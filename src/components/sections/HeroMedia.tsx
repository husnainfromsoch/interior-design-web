"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

export default function HeroMedia({
  poster,
  posterAlt,
  videoSrc,
  labels,
}: {
  poster: string;
  posterAlt: string;
  videoSrc: string;
  labels: { pause: string; play: string };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoAllowed, setVideoAllowed] = useState(false);
  const [paused, setPaused] = useState(false);

  // Poster is the LCP element; the video is only requested after first paint,
  // and never on a reduced-motion or constrained connection (spec §5 H01 / §2.4).
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const slowConnection = connection?.saveData || connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g";

    if (prefersReducedMotion || slowConnection) return;

    const id = window.requestAnimationFrame(() => {
      window.setTimeout(() => setVideoAllowed(true), 0);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!videoAllowed) return;
    const video = videoRef.current;
    if (!video) return;

    video.src = videoSrc;
    video
      .play()
      .then(() => setVideoReady(true))
      .catch(() => {
        // Autoplay refused or errored: poster remains, no error surfaced to the visitor.
        setVideoReady(false);
      });
  }, [videoAllowed, videoSrc]);

  const togglePause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      {videoAllowed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
      )}
      {videoReady && (
        <button
          type="button"
          onClick={togglePause}
          aria-label={paused ? labels.play : labels.pause}
          className="absolute bottom-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-[2px] border border-bv-white/40 bg-bv-ink/30 text-bv-white backdrop-blur-sm transition-colors hover:bg-bv-ink/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-white"
        >
          {paused ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7-11-7Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
