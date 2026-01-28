import Link from "next/link";
import Image from "next/image";

const heroImages = [
  { src: "/images/main/bball.jpg", alt: "Jabari Walker in SkechCloud Elevate set" },
  { src: "/images/main/PDL+Studio+RAW-028.jpg", alt: "Pocket Design Lab - Gorpcore Skirt" },
  { src: "/images/main/Flatlay_077_websize.webp", alt: "Saint Andro Zip-Off Capris" },
  { src: "/images/main/Flatlay_060_websize.webp", alt: "Saint Andro Baggy Hiking Pants" },
  { src: "/images/main/sa_coolpool_9687.jpg", alt: "Saint Andro 2-Way Swim Top" },
  { src: "/images/main/2024_06_05_Pocket_Design_Lab_388.webp", alt: 'Pocket Design Lab "Technical Bonnet"' },
  { src: "/images/main/clo2.webp", alt: "CLO 3D design" },
  { src: "/images/main/Adaptation_6652_exposure1.webp", alt: "Adaptation editorial" },
  { src: "/images/main/IMG_5703.jpeg", alt: "Technical work" },
  { src: "/images/main/Adaptation_7350_edit.webp", alt: '"Sporty Bonnet" for Adaptation Editorial' },
  { src: "/images/main/PDL+Studio+RAW-042.jpg", alt: 'Pocket Design Lab "Spring Jacket"' },
  { src: "/images/main/tieGuy1.webp", alt: 'Editorial Work "CORPCORE"' },
  { src: "/images/PDL/corpcore/IT DEPARTMENT/8.jpg", alt: 'Editorial Work "CORPCORE"' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto py-6 md:py-16 max-w-5xl flex-1 px-4 md:px-0">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-xl md:text-3xl font-bold font-mono uppercase tracking-[0.1em] text-foreground mb-0.5 md:mb-1">
            Hannah Yesmunt
          </h1>
          <p className="text-xs md:text-base font-mono uppercase tracking-[0.08em] text-muted mb-1.5 md:mb-1">
            Product Developer / Designer
          </p>
          <div className="max-w-xl">
            <p className="text-xs md:text-base font-sans text-muted leading-relaxed">
              Focused on functional design, product workflows, and inclusive apparel solutions
            </p>
          </div>

          {/* Photo Gallery - Masonry */}
          <div className="w-full mt-8 md:mt-10">
            <div className="columns-2 md:columns-3 gap-2 md:gap-3">
              {heroImages.map((image, index) => (
                <div key={index} className="mb-2 md:mb-3 break-inside-avoid group cursor-default">
                  <div className="relative w-full overflow-hidden rounded-md md:rounded-lg border border-border bg-surface shadow-sm">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-all duration-300 md:group-hover:scale-105 md:group-hover:opacity-40"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    {/* Desktop Hover Description */}
                    <div className="hidden md:flex absolute inset-0 items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-foreground text-center leading-relaxed">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                  {/* Mobile Description */}
                  <div className="md:hidden mt-1.5 px-0.5">
                    <p className="text-[9px] font-mono uppercase tracking-[0.06em] text-muted leading-tight">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mt-12 md:mt-20 flex flex-col items-center">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-6 md:mb-8 text-center">
              Explore my work
            </span>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Link
                href="/professional"
                className="px-5 py-3 sm:px-6 sm:py-3 border border-accent text-foreground rounded-md md:rounded-lg hover:bg-accent hover:text-white transition-colors text-center text-xs md:text-sm font-medium"
              >
                Professional
              </Link>
              <Link
                href="/technical-work"
                className="px-5 py-3 sm:px-6 sm:py-3 border border-accent text-foreground rounded-md md:rounded-lg hover:bg-accent hover:text-white transition-colors text-center text-xs md:text-sm font-medium"
              >
                Technical Work
              </Link>
              <Link
                href="/pocket-design-lab"
                className="px-5 py-3 sm:px-6 sm:py-3 border border-accent text-foreground rounded-md md:rounded-lg hover:bg-accent hover:text-white transition-colors text-center text-xs md:text-sm font-medium"
              >
                Pocket Design Lab
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Media Teaser Section */}
      <section className="border-t border-accent bg-background">
        <div className="container mx-auto py-10 md:py-16 max-w-3xl px-4 md:px-0">
          <div className="flex flex-col items-center text-center gap-5 md:gap-6">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted">
              Featured In
            </span>
            <div className="max-w-xl">
              <p className="text-xs md:text-lg text-muted leading-relaxed">
                Selected features highlighting my work in fashion, product development, and creative projects.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 md:gap-12 mt-2 md:mt-4">
              <div className="bg-zinc-900 px-3 py-1.5 md:px-4 md:py-2 rounded">
                <Image
                  src="/images/main/press/sd l-01.avif"
                  alt="Something Different Magazine"
                  width={150}
                  height={50}
                  className="h-[24px] md:h-[40px] w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
                />
              </div>
              <Image
                src="/images/main/press/submissionbeauty.logo.small.72dpi_r3.avif"
                alt="Submission Beauty"
                width={150}
                height={50}
                className="h-4 md:h-6 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
              />
              <Image
                src="/images/main/press/250px-CreativeMornings_Logo.png"
                alt="Creative Mornings"
                width={150}
                height={50}
                className="h-8 md:h-14 w-auto object-contain opacity-50 hover:opacity-100 mt-1 md:mt-3 grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <Link
              href="/media"
              className="mt-6 md:mt-4 px-6 py-3 sm:px-6 sm:py-3 border border-accent text-foreground rounded-md md:rounded-lg hover:bg-accent hover:text-white transition-colors text-xs md:text-sm font-medium"
            >
              See All Media
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
