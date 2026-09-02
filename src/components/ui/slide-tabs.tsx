"use client";

import React, { useRef, useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export type SlideTabItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const defaultTabs: SlideTabItem[] = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
];

export const SlideTabs = ({ tabs = defaultTabs }: { tabs?: SlideTabItem[] }) => {
  const pathname = usePathname();
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hovered, setHovered] = useState<number | null>(null);
  const selected = tabs.findIndex((tab) => tab.href === pathname);
  const active = hovered ?? selected;
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const activeTab = tabsRef.current[active];
    if (activeTab) {
      const { width } = activeTab.getBoundingClientRect();
      setPosition({
        left: activeTab.offsetLeft,
        width,
        opacity: 1,
      });
    } else {
      setPosition((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [active]);

  const handleEnter = (i: number) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setHovered(i);
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setHovered(null), 120);
  };

  return (
    <div className="relative" onMouseLeave={handleLeave}>
      <ul className="relative mx-auto flex w-fit rounded-full border-2 border-charcoal bg-ivory p-1.5">
        {tabs.map((tab, i) => (
          <Tab
            key={tab.href}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            href={tab.href}
            isActive={active === i}
            onMouseEnter={() => handleEnter(i)}
          >
            {tab.label}
          </Tab>
        ))}

        <Cursor position={position} />
      </ul>

      <AnimatePresence>
        {hovered !== null && tabs[hovered]?.children && (
          <motion.div
            key={tabs[hovered].href}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            onMouseEnter={() => handleEnter(hovered)}
            className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-stone/60 bg-ivory p-2 shadow-xl"
          >
            <ul className="flex flex-col gap-0.5">
              {tabs[hovered].children!.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium tracking-wide text-charcoal/80 transition-colors hover:bg-stone/60 hover:text-charcoal"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type TabProps = {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  onMouseEnter: () => void;
};

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, href, isActive, onMouseEnter }, ref) => {
    return (
      <li ref={ref} onMouseEnter={onMouseEnter} className="relative z-10 block">
        <Link
          href={href}
          className={`block cursor-pointer px-5 py-2.5 text-sm font-medium tracking-wide transition-colors md:px-6 md:py-3 ${
            isActive ? "text-ivory" : "text-charcoal/75"
          }`}
        >
          {children}
        </Link>
      </li>
    );
  }
);
Tab.displayName = "Tab";

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
      className="absolute z-0 h-9 rounded-full bg-charcoal md:h-11"
    />
  );
};
