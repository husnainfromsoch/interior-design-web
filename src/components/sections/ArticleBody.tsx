type Block =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "callout"; label: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "");
}

function inlineFormat(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-bv-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function parseArticleBody(markdown: string): Block[] {
  const lines = markdown.split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      blocks.push({ type: "h2", text, id: slugify(text) });
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      blocks.push({ type: "h3", text, id: slugify(text) });
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push({ type: "quote", text: line.slice(2).trim() });
      i++;
      continue;
    }

    const calloutMatch = line.match(/^(?:Callout\s*—\s*|Врезка\s*«)(Important|Важно)[:»]?\s*(.*)$/i);
    if (calloutMatch) {
      blocks.push({ type: "callout", label: calloutMatch[1], text: calloutMatch[2].replace(/^:\s*/, "") });
      i++;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    blocks.push({ type: "p", text: line });
    i++;
  }

  return blocks;
}

export function articleHeadings(markdown: string) {
  return parseArticleBody(markdown)
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id, text: b.text }));
}

export default function ArticleBody({ markdown }: { markdown: string }) {
  const blocks = parseArticleBody(markdown);

  return (
    <div className="max-w-[720px]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className="scroll-mt-32 font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.2] text-bv-ink mt-16 mb-5 sm:text-[32px] lg:text-[36px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={block.id}
                className="scroll-mt-32 font-[var(--font-bv-body)] text-[21px] font-semibold leading-[1.3] text-bv-ink mt-10 mb-3"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[17px] leading-[1.7] text-bv-ink/85 mb-6 sm:text-[18px]">
                {inlineFormat(block.text)}
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-10 border-y border-bv-line py-6 font-[var(--font-bv-heading)] text-[26px] leading-[1.35] text-bv-ink sm:text-[30px]"
              >
                {block.text}
              </blockquote>
            );
          case "callout":
            return (
              <div key={i} className="my-8 border-l-[3px] border-bv-accent py-5 pl-6">
                <span className="block font-[var(--font-bv-body)] text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-accent">
                  {block.label}
                </span>
                <p className="mt-2 text-[16px] leading-[1.65] text-bv-ink/85">{inlineFormat(block.text)}</p>
              </div>
            );
          case "ul":
            return (
              <ul key={i} className="mb-6 space-y-3 pl-6">
                {block.items.map((item, j) => (
                  <li key={j} className="list-disc text-[17px] leading-[1.7] text-bv-ink/85 marker:text-bv-accent">
                    {inlineFormat(item)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-6 space-y-3 pl-6">
                {block.items.map((item, j) => (
                  <li key={j} className="list-decimal text-[17px] leading-[1.7] text-bv-ink/85 marker:text-bv-accent marker:font-semibold">
                    {inlineFormat(item)}
                  </li>
                ))}
              </ol>
            );
        }
      })}
    </div>
  );
}
