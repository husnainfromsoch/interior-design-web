'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

/**
 * Scroll-driven pin-and-expand media block. Progress is derived from the
 * container's scroll position (not global wheel/touch hijacking), so it
 * behaves correctly regardless of where it sits on the page.
 */
const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isMobileState, setIsMobileState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollableDistance = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress =
        scrollableDistance > 0
          ? Math.min(Math.max(scrolled / scrollableDistance, 0), 1)
          : 0;

      setScrollProgress(progress);
      setShowContent(progress >= 0.98);
    };

    const handleResize = () => {
      setIsMobileState(window.innerWidth < 768);
      handleScroll();
    };

    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className="relative">
      <div ref={containerRef} className="relative" style={{ height: '250vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 h-full"
          animate={{ opacity: 1 - scrollProgress }}
          transition={{ duration: 0.1 }}
        >
          <Image
            src={bgImageSrc}
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
          <div
            className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
            style={{
              width: `${mediaWidth}px`,
              height: `${mediaHeight}px`,
              maxWidth: '95vw',
              maxHeight: '85vh',
              boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            {mediaType === 'video' ? (
              <div className="relative h-full w-full pointer-events-none">
                <video
                  src={mediaSrc}
                  poster={posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full rounded-xl object-cover"
                  controls={false}
                  disablePictureInPicture
                  disableRemotePlayback
                />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-black/30"
                  animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  fill
                  className="rounded-xl object-cover"
                />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-black/50"
                  animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            )}

            <div className="relative z-10 mt-4 flex flex-col items-center text-center">
              {date && (
                <p
                  className="text-2xl text-ivory"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {date}
                </p>
              )}
              {scrollToExpand && (
                <p
                  className="text-center font-medium text-ivory/80"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {scrollToExpand}
                </p>
              )}
            </div>
          </div>

          <div
            className={`relative z-10 flex w-full flex-col items-center justify-center gap-4 text-center ${
              textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
            }`}
          >
            <h2
              className="font-serif text-4xl font-bold text-ivory md:text-5xl lg:text-6xl"
              style={{ transform: `translateX(-${textTranslateX}vw)` }}
            >
              {firstWord}
            </h2>
            <h2
              className="text-center font-serif text-4xl font-bold text-ivory md:text-5xl lg:text-6xl"
              style={{ transform: `translateX(${textTranslateX}vw)` }}
            >
              {restOfTitle}
            </h2>
          </div>
        </div>
      </div>
      </div>

      <motion.div
        className="flex w-full flex-col px-8 py-10 md:px-16 lg:py-20"
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollExpandMedia;
