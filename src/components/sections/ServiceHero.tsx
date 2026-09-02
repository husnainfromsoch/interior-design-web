"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const SLIDE_MS = 2000;

export default function ServiceHero({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || images.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [reduceMotion, images.length]);

  useEffect(() => {
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} aria-label={title} className="relative min-h-[86vh] overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 -top-[8%] h-[116%] w-full">
        {images.map((src, i) => (
          <div
            key={src + i}
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${i === active && !reduceMotion ? "kenburns-fast" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
