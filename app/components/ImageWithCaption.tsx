import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video bg-foreground/5 rounded-lg overflow-hidden border border-accent/30">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
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

