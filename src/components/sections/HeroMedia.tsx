"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

export default function HeroMedia({
  videoSrc,
  labels,
}: {
  videoSrc: string;
  labels: { pause: string; play: string };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoAllowed, setVideoAllowed] = useState(false);
  const [paused, setPaused] = useState(false);

  // Depth on scroll: the media sinks and slowly scales as the hero leaves the viewport.
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const mediaY = useTransform(scrollY, [0, 900], [0, 180]);
  const mediaScale = useTransform(scrollY, [0, 900], [1, 1.08]);

  // No poster image (owner request 2026-10-08): the hero shows the video or, when it cannot
  // play, the plain dark background. The video starts loading as soon as the component
  // mounts, and never on a reduced-motion or constrained connection.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const slowConnection = connection?.saveData || connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g";

    if (prefersReducedMotion || slowConnection) return;

    setVideoAllowed(true);
  }, []);

  useEffect(() => {
    if (!videoAllowed) return;
    const video = videoRef.current;
    if (!video) return;

    // Fast opening: the first seconds play at 3x (quick zoom-in), then ease out back to 1x.
    const FAST_RATE = 3;
    const FAST_MS = 3000;
    const EASE_MS = 1400;
    let rampId: number | undefined;
    let holdId: number | undefined;

    video.src = videoSrc;
    video.playbackRate = FAST_RATE;
    video
      .play()
      .then(() => {
        setVideoReady(true);
        holdId = window.setTimeout(() => {
          const start = performance.now();
          const step = () => {
            const p = Math.min((performance.now() - start) / EASE_MS, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic: sheds speed quickly, settles gently
            video.playbackRate = FAST_RATE - (FAST_RATE - 1) * eased;
            if (p < 1) rampId = window.requestAnimationFrame(step);
          };
          rampId = window.requestAnimationFrame(step);
        }, FAST_MS);
      })
      .catch(() => {
        // Autoplay refused or errored: the dark background remains, no error surfaced to the visitor.
        setVideoReady(false);
      });

    return () => {
      window.clearTimeout(holdId);
      if (rampId) window.cancelAnimationFrame(rampId);
    };
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
      <motion.div className="absolute inset-0 will-change-transform" style={reduce ? undefined : { y: mediaY, scale: mediaScale }}>
      {videoAllowed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      )}
      </motion.div>
      {videoReady && (
        <button
          type="button"
          onClick={togglePause}
          aria-label={paused ? labels.play : labels.pause}
          className="press absolute bottom-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-sm border border-bv-white/40 bg-bv-ink/30 text-bv-white backdrop-blur-sm duration-200 hover:bg-bv-ink/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-white"
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
