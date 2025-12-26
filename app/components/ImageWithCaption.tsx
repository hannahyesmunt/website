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
          width={1200}
          height={900}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs font-mono tracking-[0.06em] text-muted text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

