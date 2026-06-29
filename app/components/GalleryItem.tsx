import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
  subtext?: string;
};

export default function GalleryItem({ image }: { image: GalleryImage }) {
  return (
    <div className="mb-2 md:mb-3 break-inside-avoid group cursor-default">
      <div className="relative w-full overflow-hidden rounded-md md:rounded-lg border border-border bg-surface shadow-sm">
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          className="w-full h-auto object-cover transition-all duration-300 md:group-hover:scale-105 md:group-hover:opacity-40"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="hidden md:flex absolute inset-0 items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="text-center">
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-foreground leading-relaxed">
              {image.alt}
            </p>
            {image.subtext && (
              <p className="mt-1 text-[9px] font-mono uppercase tracking-[0.06em] text-muted leading-relaxed">
                {image.subtext}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden mt-1.5 px-0.5">
        <p className="text-[9px] font-mono uppercase tracking-[0.06em] text-foreground leading-tight">
          {image.alt}
        </p>
        {image.subtext && (
          <p className="mt-0.5 text-[8px] font-mono uppercase tracking-[0.06em] text-muted leading-tight">
            {image.subtext}
          </p>
        )}
      </div>
    </div>
  );
}
