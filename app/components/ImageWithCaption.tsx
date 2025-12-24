import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="mb-4 break-inside-avoid">
      <div className="relative w-full bg-foreground/5 rounded-lg overflow-hidden border border-accent/30">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-foreground/60 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

