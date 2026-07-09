import GalleryItem from "@/app/components/GalleryItem";
import { technicalDesignSections } from "@/data/technicalDesignGallery";

const technicalDesignSkills = [
  "Prototyping",
  "Muslins",
  "Fit Sessions",
  "Technical Flats",
  "CLO 3D Renders",
  "Finished Samples",
  "Design",
  "Patternmaking",
  "Pattern Grading",
  "Garment Construction",
  "Fabric Sourcing",
  "Spec Sheet Development",
];

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
              Hands-on work across the full development cycle.
            </p>
          </div>
          <section className="mt-6 md:mt-8">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">
              Skills
            </span>
            <ul className="flex flex-wrap gap-1.5 md:gap-2">
              {technicalDesignSkills.map((skill) => (
                <li
                  key={skill}
                  className="px-2 md:px-3 py-0.5 md:py-1 bg-surface border border-border rounded-full text-[10px] md:text-xs font-mono tracking-[0.06em] text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </header>

        <div className="space-y-10 md:space-y-16">
          {technicalDesignSections.map((section, index) => (
            <section key={section.id}>
              {index > 0 && <div className="mb-8 md:mb-12 border-t border-border" />}
              <header className="mb-5 md:mb-8">
                <h2 className="text-sm md:text-lg font-bold text-foreground tracking-tight">
                  {section.title}
                </h2>
                {section.subtext && (
                  <p className="mt-2 md:mt-3 max-w-2xl text-xs md:text-sm text-muted leading-relaxed">
                    {section.subtext}
                  </p>
                )}
              </header>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-auto">
                {section.images.map((image) => (
                  <GalleryItem key={image.src} image={image} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
