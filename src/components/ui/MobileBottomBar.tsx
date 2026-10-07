"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics";
import { useContactSettings } from "@/components/cms/SiteSettingsProvider";
import { whatsappHref } from "@/lib/contact";

// Mobile bottom bar (Changes Sheet G6): shown below 1024 px, where it provides the
// "Discuss Project" button the header has on desktop. Hidden when 30% or more of the
// enquiry form is in view, and while the on-screen keyboard is open.
export default function MobileBottomBar({ labels, whatsappPrefill }: { labels: { discuss: string; whatsapp: string }; whatsappPrefill: string }) {
  const { whatsappNumber } = useContactSettings();
  const router = useRouter();
  const pathname = usePathname();
  const [pastFirstScreen, setPastFirstScreen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Insights articles: appear once the cover has scrolled out of view.
      const cover = document.querySelector("[data-article-cover]");
      if (cover) setPastFirstScreen(cover.getBoundingClientRect().bottom < 0);
      else setPastFirstScreen(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const form = document.getElementById("project-enquiry");
    if (!form) return;
    // 30% of the form in view; a form much taller than the screen also counts once it
    // fills most of the viewport.
    const io = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.intersectionRatio >= 0.3 || entry.intersectionRect.height >= window.innerHeight * 0.6),
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );
    io.observe(form);
    return () => {
      io.disconnect();
      setFormVisible(false);
    };
  }, [pathname]);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => setKeyboardOpen(vv.height < window.innerHeight * 0.75);
    vv.addEventListener("resize", onResize);
    return () => vv.removeEventListener("resize", onResize);
  }, []);

  const hidden = !pastFirstScreen || formVisible || keyboardOpen;

  function discuss(e: React.MouseEvent<HTMLAnchorElement>) {
    const form = document.getElementById("project-enquiry");
    e.preventDefault();
    if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
    else router.push("/contact#project-enquiry");
  }

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-bv-line bg-bv-background/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none min-[1100px]:hidden ${
        hidden ? "pointer-events-none translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-[560px] gap-3">
        <a
          href="#project-enquiry"
          onClick={discuss}
          tabIndex={hidden ? -1 : 0}
          className="press t-button inline-flex h-[48px] flex-1 items-center justify-center rounded-sm bg-bv-accent px-4 text-bv-white active:bg-bv-accent-hover"
        >
          {labels.discuss}
        </a>
        <a
          href={whatsappHref(whatsappNumber, whatsappPrefill)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { placement: "bottom_bar" })}
          tabIndex={hidden ? -1 : 0}
          className="press t-button inline-flex h-[48px] flex-1 items-center justify-center rounded-sm bg-bv-ink px-4 text-bv-white active:bg-bv-ink/85"
        >
          {labels.whatsapp}
        </a>
      </div>
    </div>
  );
}
