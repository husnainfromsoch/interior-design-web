"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  avatarSrc: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: string;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
  className?: string;
}

const StatCard = ({ value, label }: Stat) => (
  <Card className="rounded-xl border-champagne/20 bg-ivory/[0.04] text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-champagne/40 hover:bg-ivory/[0.07] hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.5)]">
    <CardContent className="p-4">
      <p className="text-3xl font-bold text-ivory">{value}</p>
      <p className="text-sm text-stone">{label}</p>
    </CardContent>
  </Card>
);

const StickyTestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div
      className="sticky w-full"
      style={{ top: `${20 + index * 24}px` }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <div className="flex h-auto w-full flex-col rounded-2xl border border-ivory/10 bg-soft-black p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.75)]">
        <div className="flex items-center gap-4">
          <div
            className="h-14 w-14 flex-shrink-0 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${testimonial.avatarSrc})` }}
            aria-label={`Photo of ${testimonial.name}`}
          />
          <div className="flex-grow">
            <p className="text-lg font-semibold text-ivory">{testimonial.name}</p>
            <p className="text-sm text-stone">{testimonial.title}</p>
          </div>
        </div>

        <div className="my-4 flex items-center gap-2">
          <span className="text-base font-bold text-ivory">{testimonial.rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(testimonial.rating)
                    ? "fill-champagne text-champagne"
                    : "text-stone/30",
                )}
              />
            ))}
          </div>
        </div>

        {testimonial.quote && (
          <p className="text-base text-stone">&ldquo;{testimonial.quote}&rdquo;</p>
        )}
      </div>
    </motion.div>
  );
};

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  className,
}: ClientsSectionProps) => {
  const scrollContainerHeight = `calc(100vh + ${testimonials.length * 100}px)`;

  return (
    <section className={cn("w-full bg-soft-black py-20 text-ivory md:py-28", className)}>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="flex flex-col gap-6 lg:sticky lg:top-20">
          <div className="reveal inline-flex items-center gap-2 self-start rounded-full border border-ivory/10 bg-ivory/[0.04] px-3 py-1 text-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-champagne" />
            <span className="text-stone">{tagLabel}</span>
          </div>

          <h2 className="reveal font-serif text-4xl tracking-tight md:text-5xl">{title}</h2>
          <p className="reveal text-lg text-stone" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            {description}
          </p>

          <div className="reveal mt-4 grid grid-cols-3 gap-4" style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="reveal mt-6 flex flex-wrap items-center gap-4" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
            <Button href={secondaryActionHref} variant="outline-light">
              {secondaryActionLabel}
            </Button>
            <Button href={primaryActionHref} variant="primary">
              {primaryActionLabel}
            </Button>
          </div>
        </div>

        <div
          className="relative flex flex-col gap-4"
          style={{ height: scrollContainerHeight }}
        >
          {testimonials.map((testimonial, index) => (
            <StickyTestimonialCard key={testimonial.name} index={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
