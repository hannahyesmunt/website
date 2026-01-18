import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="mb-4 break-inside-avoid">
      <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={750}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 1000px"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 px-2 text-xs font-mono tracking-[0.06em] text-muted text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

