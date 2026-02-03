"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ScrollGalleryImage {
  src: string;
  alt: string;
}

interface ScrollGalleryProps {
  images: ScrollGalleryImage[];
  desktopVisible?: number; // How many images visible on desktop (default 3)
}

export default function ScrollGallery({ images, desktopVisible = 3 }: ScrollGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(container.scrollLeft / maxScroll);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const visibleCount = isMobile ? 1 : desktopVisible;

  return (
    <div className="relative w-full">
      {/* Scrollable gallery container */}
      <div
        ref={scrollRef}
        className="flex gap-2 md:gap-3 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start"
            style={{ 
              width: isMobile ? "85%" : `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 12 / visibleCount}px)` 
            }}
          >
            <div className="relative w-full bg-surface rounded-md md:rounded-lg overflow-hidden border border-border">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
                sizes={isMobile ? "85vw" : `${100 / desktopVisible}vw`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 flex justify-center">
        <div className="w-24 md:w-32 h-0.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-150"
            style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
          />
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-0 right-0 mb-8 mr-2 md:mr-3">
        <span className="text-[10px] md:text-xs font-mono tracking-wider text-muted">
          {images.length} images
        </span>
      </div>
    </div>
  );
}
