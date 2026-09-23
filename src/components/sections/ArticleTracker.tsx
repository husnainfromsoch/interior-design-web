"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** GA4: article_read_50 / article_read_90, related service and related article clicks. */
export default function ArticleTracker({ articleId, locale }: { articleId: string; locale: string }) {
  useEffect(() => {
    const body = document.querySelector<HTMLElement>("[data-article-body]");
    const sent = new Set<number>();

    function onScroll() {
      if (!body) return;
      const rect = body.getBoundingClientRect();
      const total = rect.height;
      if (total <= 0) return;
      const read = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / total));
      for (const step of [50, 90]) {
        if (read * 100 >= step && !sent.has(step)) {
          sent.add(step);
          trackEvent(`article_read_${step}`, { article_id: articleId, locale });
        }
      }
    }

    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track-service],[data-track-related]");
      if (!el) return;
      if (el.dataset.trackService) {
        trackEvent("article_service_click", { article_id: articleId, service: el.dataset.trackService });
      } else if (el.dataset.trackRelated) {
        trackEvent("article_related_click", { article_id: articleId, target_id: el.dataset.trackRelated });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [articleId, locale]);

  return null;
}
