"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type PillDropdownNavItem = {
  label: string;
  href: string;
};

export const PillDropdownNav = ({
  tabs,
  locale,
  onSwitchLocale,
}: {
  tabs: PillDropdownNavItem[];
  locale?: string;
  onSwitchLocale?: (locale: "en" | "ru") => void;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-charcoal bg-ivory text-charcoal"
      >
        <motion.span
          animate={open ? "open" : "closed"}
          className="relative flex h-4 w-5 flex-col justify-between"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 7 },
            }}
            className="h-0.5 w-full origin-center rounded-full bg-charcoal"
          />
          <motion.span
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            className="h-0.5 w-full rounded-full bg-charcoal"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -7 },
            }}
            className="h-0.5 w-full origin-center rounded-full bg-charcoal"
          />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="absolute right-0 top-14 z-50 w-56 origin-top-right rounded-3xl border border-stone/60 bg-ivory p-2 shadow-xl"
          >
            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
                closed: {},
              }}
              className="flex flex-col gap-1"
            >
              {tabs.map((tab) => {
                const isActive = tab.href === pathname;
                return (
                  <motion.li
                    key={tab.href}
                    variants={{
                      closed: { opacity: 0, x: 8 },
                      open: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={tab.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors ${
                        isActive
                          ? "bg-charcoal text-ivory"
                          : "text-charcoal/75 hover:bg-stone/60"
                      }`}
                    >
                      {tab.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            {onSwitchLocale && (
              <div className="mt-1 flex items-center justify-center gap-1.5 border-t border-stone/60 px-2 pb-1 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    onSwitchLocale("en");
                    setOpen(false);
                  }}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                    locale === "en" ? "bg-charcoal text-ivory" : "text-charcoal/60 hover:bg-stone/60"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSwitchLocale("ru");
                    setOpen(false);
                  }}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                    locale === "ru" ? "bg-charcoal text-ivory" : "text-charcoal/60 hover:bg-stone/60"
                  }`}
                >
                  RU
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
