"use client";

import { useState, useRef, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleCount = isMobile ? 1 : desktopVisible;
  const maxIndex = Math.max(0, images.length - visibleCount);

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  // Calculate width percentage for each image
  const imageWidthPercent = 100 / visibleCount;

  return (
    <div className="relative w-full group">
      {/* Left click zone */}
      <button
        onClick={goPrev}
        disabled={!canGoPrev}
        className={`absolute left-0 top-0 bottom-0 w-1/3 md:w-1/4 z-10 cursor-w-resize transition-opacity duration-200 ${
          canGoPrev ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Previous images"
      >
        <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-foreground/80 text-lg md:text-2xl font-light">←</span>
        </div>
      </button>

      {/* Right click zone */}
      <button
        onClick={goNext}
        disabled={!canGoNext}
        className={`absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4 z-10 cursor-e-resize transition-opacity duration-200 ${
          canGoNext ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Next images"
      >
        <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-foreground/80 text-lg md:text-2xl font-light">→</span>
        </div>
      </button>

      {/* Gallery container */}
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * imageWidthPercent}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-1 md:px-1.5"
              style={{ width: `${imageWidthPercent}%` }}
            >
              <div className="relative w-full bg-surface rounded-md md:rounded-lg overflow-hidden border border-border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                  sizes={isMobile ? "100vw" : `${100 / desktopVisible}vw`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center mt-4 gap-1.5">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-0.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-accent"
                : "w-2 bg-border hover:bg-muted"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute bottom-0 right-0 mb-8 mr-2 md:mr-3">
        <span className="text-[10px] md:text-xs font-mono tracking-wider text-muted">
          {currentIndex + 1}–{Math.min(currentIndex + visibleCount, images.length)} / {images.length}
        </span>
      </div>
    </div>
  );
}
