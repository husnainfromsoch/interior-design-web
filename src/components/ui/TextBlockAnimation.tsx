"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";

type TextBlockAnimationProps = {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
};

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  stagger = 0.1,
  duration = 0.6,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;
      // Spec §25: with reduced motion the heading is simply shown, with no block sweep.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // autoSplit re-splits on resize and font load, so line breaks always match the real column width.
      // Once the reveal has played, the split is reverted so the heading wraps as normal text again.
      const split = SplitText.create(el, {
        type: "lines",
        linesClass: "block-line-parent",
        autoSplit: true,
        onSplit(self) {
          const lines = self.lines;
          const blocks: HTMLDivElement[] = [];

          lines.forEach((line) => {
            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";
            wrapper.style.display = "block";
            wrapper.style.overflow = "hidden";

            const block = document.createElement("div");
            block.style.position = "absolute";
            block.style.top = "0";
            block.style.left = "0";
            block.style.width = "100%";
            block.style.height = "100%";
            block.style.backgroundColor = blockColor;
            block.style.zIndex = "2";
            block.style.transform = "scaleX(0)";
            block.style.transformOrigin = "left center";

            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
            wrapper.appendChild(block);

            gsap.set(line, { opacity: 0 });
            blocks.push(block);
          });

          const tl = gsap.timeline({
            defaults: { ease: "expo.inOut" },
            scrollTrigger: animateOnScroll
              ? { trigger: el, start: "top 85%", toggleActions: "play none none none" }
              : undefined,
            delay,
            onComplete: () => {
              self.kill();
              self.revert();
            },
          });

          tl.to(blocks, { scaleX: 1, duration, stagger, transformOrigin: "left center" })
            .set(lines, { opacity: 1, stagger }, `<${duration / 2}`)
            .to(blocks, { scaleX: 0, duration, stagger, transformOrigin: "right center" }, `<${duration * 0.4}`);

          return tl;
        },
      });

      return () => {
        split.revert();
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {children}
    </div>
  );
}
