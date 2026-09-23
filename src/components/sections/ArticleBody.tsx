import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Block =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "callout"; label: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; header: string[]; rows: string[][] }
  | { type: "image"; alt: string; src: string; caption?: string; wide?: boolean };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "");
}

function renderLink(text: string, href: string, key: number) {
  const cls =
    "text-bv-ink underline underline-offset-4 decoration-bv-ink/40 transition-colors duration-200 hover:decoration-bv-accent";
  if (/^https?:\/\//.test(href)) {
    return (
      <a key={key} href={href} rel="noopener" className={cls}>
        {text}
        <span aria-hidden="true" className="ml-0.5 text-[0.8em]">↗</span>
      </a>
    );
  }
  // Locale prefix is added by the i18n Link; strip any hard-coded one.
  return (
    <Link key={key} href={href.replace(/^\/ru(?=\/|$)/, "") || "/"} className={cls}>
      {text}
    </Link>
  );
}

function inlineFormat(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={i} className="font-semibold text-bv-ink">
          {bold[1]}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return renderLink(link[1], link[2], i);
    return <span key={i}>{part}</span>;
  });
}

function splitRow(line: string) {
  return line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());
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

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!/^\|[\s:|-]+\|$/.test(lines[i].trim())) rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push({ type: "table", header: rows[0] ?? [], rows: rows.slice(1) });
      continue;
    }

    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"(wide)")?\)(?:\|(.+))?$/);
    if (imageMatch) {
      blocks.push({ type: "image", alt: imageMatch[1], src: imageMatch[2], wide: Boolean(imageMatch[3]), caption: imageMatch[4]?.trim() });
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

export default function ArticleBody({
  markdown,
  labels,
}: {
  markdown: string;
  labels: { important: string; aiDisclosure: string };
}) {
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
                className="scroll-mt-32 font-bv-heading text-[28px] font-medium leading-[1.2] text-bv-ink mt-16 mb-5 sm:text-[32px] lg:text-[36px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={block.id}
                className="scroll-mt-32 font-bv-body text-[21px] font-semibold leading-[1.3] text-bv-ink mt-10 mb-3"
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
                className="my-10 border-y border-bv-line py-6 font-bv-heading text-[26px] leading-[1.35] text-bv-ink sm:text-[30px]"
              >
                {block.text}
              </blockquote>
            );
          case "callout":
            return (
              <div key={i} className="my-8 border-l-[3px] border-bv-accent py-5 pl-6">
                <span className="block font-bv-body text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-accent">
                  {labels.important}
                </span>
                <p className="mt-2 text-[16px] leading-[1.65] text-bv-ink/85">{inlineFormat(block.text)}</p>
              </div>
            );
          case "table":
            return (
              <div key={i} className="mb-8 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left font-bv-body text-[15px] text-bv-ink/85">
                  <thead>
                    <tr className="bg-bv-surface">
                      {block.header.map((h, j) => (
                        <th key={j} scope="col" className="px-4 py-3 align-top font-semibold text-bv-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-b border-bv-line">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-3 align-top leading-[1.55]">
                            {inlineFormat(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "image":
            return (
              <figure key={i} className={`my-10 ${block.wide ? "lg:-mx-[180px]" : ""}`}>
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image src={block.src} alt={block.alt} fill sizes="(min-width: 1080px) 1080px, 100vw" className="object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2 text-[13px] leading-[1.5] text-bv-muted">
                  {block.caption && <span className="block">{block.caption}</span>}
                  <span className="block text-[12px] text-bv-muted/80">{labels.aiDisclosure}</span>
                </figcaption>
              </figure>
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
              <ol key={i} className="mb-6 list-none space-y-3 pl-0">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4 text-[17px] leading-[1.7] text-bv-ink/85">
                    <span
                      aria-hidden="true"
                      className="mt-[5px] flex h-[22px] w-[22px] flex-none items-center justify-center bg-bv-accent text-[12px] font-semibold leading-none text-bv-white"
                    >
                      {j + 1}
                    </span>
                    <span>{inlineFormat(item)}</span>
                  </li>
                ))}
              </ol>
            );
        }
      })}
    </div>
  );
}
