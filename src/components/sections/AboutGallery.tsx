"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const columns: { src: string; alt: string }[][] = [
  [
    { src: "/projects/marina-penthouse-terrace.avif", alt: "Marina penthouse terrace" },
    { src: "/projects/jbr-apartment-bathroom.avif", alt: "JBR apartment bathroom" },
  ],
  [
    { src: "/projects/downtown-villa-living.avif", alt: "Downtown villa living room" },
    { src: "/projects/villa-exterior.avif", alt: "Villa exterior renovation" },
  ],
  [
    { src: "/projects/al-barari-kitchen.avif", alt: "Al Barari custom kitchen" },
    { src: "/projects/marina-penthouse-terrace.avif", alt: "Marina penthouse terrace detail" },
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
