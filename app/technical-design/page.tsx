import GalleryItem from "@/app/components/GalleryItem";
import { technicalDesignGallery } from "@/data/technicalDesignGallery";

export default function TechnicalDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 md:py-16 max-w-5xl px-4 md:px-0">
        <header className="mb-8 md:mb-12">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">
            Technical Design
          </span>
          <h1 className="text-lg md:text-2xl font-bold text-foreground tracking-tight mb-4 md:mb-6">
            Design, Pattern & Prototype
          </h1>
          <div className="max-w-2xl">
            <p className="text-xs md:text-base text-muted leading-relaxed">
              Hands-on work across the full development cycle — prototyping, muslins,
              fit sessions, technical flats, CLO 3D renders, and finished samples. Each
              piece here was designed, patterned, and built by me.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {technicalDesignGallery.map((image) => (
            <GalleryItem key={image.src} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}
