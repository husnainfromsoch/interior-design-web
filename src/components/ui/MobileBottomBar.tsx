"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const WHATSAPP_NUMBER = "971588099223";

export default function MobileBottomBar() {
  const t = useTranslations("BottomBar");
  const tWa = useTranslations("WhatsApp");
  const router = useRouter();
  const pathname = usePathname();
  const [pastFirstScreen, setPastFirstScreen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastFirstScreen(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const form = document.getElementById("project-enquiry");
    if (!form) {
      setFormVisible(false);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { threshold: 0.05 });
    io.observe(form);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => setKeyboardOpen(vv.height < window.innerHeight * 0.75);
    vv.addEventListener("resize", onResize);
    return () => vv.removeEventListener("resize", onResize);
  }, []);

  const hidden = !pastFirstScreen || formVisible || keyboardOpen;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tWa("message"))}`;

  function discuss(e: React.MouseEvent<HTMLAnchorElement>) {
    const form = document.getElementById("project-enquiry");
    e.preventDefault();
    if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
    else router.push("/contact");
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
          className="inline-flex h-[48px] flex-1 items-center justify-center rounded-full bg-bv-accent px-4 text-[13px] font-semibold text-bv-white active:bg-bv-accent-hover"
        >
          {t("discuss")}
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : 0}
          className="inline-flex h-[48px] flex-1 items-center justify-center rounded-full bg-bv-ink px-4 text-[13px] font-semibold text-bv-white active:bg-bv-ink/85"
        >
          {t("whatsapp")}
        </a>
      </div>
    </div>
  );
}
