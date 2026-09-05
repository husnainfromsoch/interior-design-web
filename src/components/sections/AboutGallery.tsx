"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const columns: { src: string; alt: string }[][] = [
  [
    { src: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1200&auto=format&fit=crop", alt: "Living room with marble feature wall" },
    { src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop", alt: "Living room with floor-to-ceiling windows" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1597088136953-db42ae225804?q=80&w=1200&auto=format&fit=crop", alt: "Outdoor patio tiling detail" },
    { src: "https://images.unsplash.com/photo-1650338031185-1e97add7a389?q=80&w=1200&auto=format&fit=crop", alt: "Landscaped patio with planters" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1721743162928-10502681850b?q=80&w=1200&auto=format&fit=crop", alt: "Bedroom with fitted wardrobe" },
    { src: "https://images.unsplash.com/photo-1705862851897-fa60b41617c2?q=80&w=1200&auto=format&fit=crop", alt: "Villa garden pathway" },
  ],
];

function ParallaxColumn({
  images,
  offset,
}: {
  images: { src: string; alt: string }[];
  offset: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <motion.div style={{ y }} className="flex flex-col gap-4">
        {images.map((img) => (
          <div
            key={img.src + img.alt}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function AboutGallery() {
  const t = useTranslations("AboutGallery");
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[28px] leading-snug sm:text-[34px]">
            {t("title")}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <ParallaxColumn images={columns[0]} offset={40} />
          <ParallaxColumn images={columns[1]} offset={-70} />
          <ParallaxColumn images={columns[2]} offset={30} />
        </div>
      </div>
    </section>
  );
}
