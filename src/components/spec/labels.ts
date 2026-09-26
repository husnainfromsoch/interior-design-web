import { sc } from "@/lib/spec";

// Lightbox/viewer labels from the §17.1 interface microcopy pack. Server-only: built here
// and passed to the client components as props, so the spec JSON never ships to the browser.
export function lightboxLabels(locale: string) {
  const ru = locale === "ru";
  return {
    close: sc("UI", "gallery.close", locale),
    prev: sc("UI", "gallery.prev", locale),
    next: sc("UI", "gallery.next", locale),
    unavailable: sc("UI", "image.unavailable", locale),
    counter: sc("UI", "gallery.counter", locale),
    zoomIn: ru ? "Увеличить" : "Zoom in",
    zoomOut: ru ? "Уменьшить" : "Zoom out",
    galleryTitle: ru ? "Галерея" : "Gallery",
  };
}
