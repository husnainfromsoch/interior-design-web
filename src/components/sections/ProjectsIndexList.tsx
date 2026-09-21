"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export type IndexProject = {
  id: string;
  href: string;
  image: string;
  title: string;
  tags: string[];
  num: string;
};

export default function ProjectsIndexList({ items }: { items: IndexProject[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  }

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
      <div className="divide-y divide-bv-line border-y border-bv-line">
        {items.map((item, i) => (
          <Link
            key={item.id}
            href={item.href}
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
            className="reveal group relative flex items-center gap-6 py-7 transition-colors duration-200 sm:py-9"
            style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
          >
            <span className="font-[var(--font-bv-body)] text-[14px] font-semibold tracking-[0.1em] text-bv-accent">
              {item.num}
            </span>

            <div className="relative block h-16 w-20 flex-none overflow-hidden rounded-[10px] bg-bv-surface sm:hidden">
              <Image src={item.image} alt="" fill sizes="80px" className="object-cover" />
            </div>

            <h3 className="min-w-0 flex-1 truncate font-[var(--font-bv-heading)] text-[22px] font-medium leading-[1.15] text-bv-ink transition-colors duration-200 group-hover:text-bv-accent sm:text-[32px] lg:text-[40px]">
              {item.title}
            </h3>

            <div className="hidden shrink-0 flex-wrap justify-end gap-x-4 gap-y-1 text-right text-[13px] text-bv-muted md:flex md:max-w-[280px]">
              {item.tags.slice(0, 2).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <span
              aria-hidden="true"
              className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-bv-field-border text-bv-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-45 group-hover:border-bv-ink group-hover:bg-bv-ink group-hover:text-bv-white motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 hidden aspect-[4/3] w-[300px] overflow-hidden rounded-[16px] shadow-[0_30px_60px_-20px_rgba(51,46,43,0.45)] motion-reduce:!hidden sm:block"
        style={{ x: springX, y: springY, translateX: "24px", translateY: "-50%" }}
        initial={false}
        animate={{ opacity: activeItem ? 1 : 0, scale: activeItem ? 1 : 0.94 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {items.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt=""
            fill
            sizes="300px"
            className="object-cover transition-opacity duration-300"
            style={{ opacity: item.id === activeId ? 1 : 0 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
