"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const VALUE_IDS = ["design", "approvals", "execution", "joinery"] as const;
const VALUE_VIDEO = "/videos/hero.mp4";

export default function AboutStory() {
  const t = useTranslations("AboutStory");
  const values = VALUE_IDS.map((id) => ({
    id,
    label: t(`values.${id}.label`),
    detail: t(`values.${id}.detail`),
    video: VALUE_VIDEO,
  }));
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + values.length) % values.length);
  };

  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="reveal-left">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              {t("badge")}
            </span>
            <h2 className="font-serif text-[28px] leading-snug sm:text-[34px]">
              {t("titlePlain1")} <span className="italic text-wood">{t("titleItalic1")}</span> {t("titleAnd")}{" "}
              <span className="italic text-wood">{t("titleItalic2")}</span>.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[17px] leading-relaxed text-warm-grey">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
              <p>{t("body3")}</p>
            </div>
          </div>

          <div className="reveal-right relative">
            <div className="relative flex h-[440px] items-center justify-center [perspective:1200px]">
              {values.map((v, i) => {
                const offset = i - active;
                const isActive = offset === 0;
                const abs = Math.abs(offset);
                if (abs > 2) return null;

                return (
                  <motion.div
                    key={v.id}
                    className="absolute h-[400px] w-[220px] overflow-hidden rounded-[22px] shadow-[0_24px_48px_-20px_rgba(46,42,37,0.45)]"
                    initial={false}
                    animate={{
                      x: offset * 130,
                      scale: isActive ? 1 : 0.84,
                      rotateY: offset * -18,
                      opacity: abs > 1 ? 0 : isActive ? 1 : 0.55,
                      filter: isActive ? "blur(0px)" : "blur(2px)",
                      zIndex: 10 - abs,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    onClick={() => setActive(i)}
                    style={{ cursor: isActive ? "default" : "pointer" }}
                  >
                    <video
                      src={v.video}
                      autoPlay
                      muted={muted}
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-serif text-[19px] text-ivory">{v.label}</p>
                      <p className="mt-1 text-[12px] leading-snug text-ivory/80">{v.detail}</p>
                    </div>

                    {isActive && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMuted((m) => !m);
                        }}
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/90 text-wood shadow-md transition hover:bg-ivory"
                        aria-label={muted ? t("unmute") : t("mute")}
                      >
                        {muted ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                            <line x1="23" y1="9" x2="17" y2="15" />
                            <line x1="17" y1="9" x2="23" y2="15" />
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
                          </svg>
                        )}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t("previous")}
              className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone/70 bg-ivory text-wood shadow-md transition hover:bg-beige"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18 9 12l6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t("next")}
              className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone/70 bg-ivory text-wood shadow-md transition hover:bg-beige"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div className="mt-6 flex items-center justify-center gap-2">
              {values.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={t("show", { label: v.label })}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-wood" : "w-2 bg-stone/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
