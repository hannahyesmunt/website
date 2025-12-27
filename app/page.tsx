import Link from "next/link";
import Image from "next/image";

const heroImages = [
  { src: "/images/main/bball.jpg", alt: "Editorial work" },
  { src: "/images/main/Adaptation_6652_exposure1.webp", alt: "Adaptation editorial" },
  { src: "/images/main/Flatlay_077_websize.webp", alt: "Flatlay photography" },
  { src: "/images/main/Flatlay_060_websize.webp", alt: "Flatlay photography" },
  { src: "/images/main/sa_coolpool_9687.jpg", alt: "Saint Andro" },
  { src: "/images/main/2024_06_05_Pocket_Design_Lab_388.webp", alt: "Pocket Design Lab" },
  { src: "/images/main/Adaptation_7350_edit.webp", alt: "Adaptation editorial" },
  { src: "/images/main/clo2.webp", alt: "CLO 3D design" },
  { src: "/images/main/IMG_5703.jpeg", alt: "Technical work" },
  { src: "/images/main/PDL+Studio+RAW-028.jpg", alt: "Pocket Design Lab studio" },
  { src: "/images/main/PDL+Studio+RAW-042.jpg", alt: "Pocket Design Lab studio" },
  { src: "/images/main/tieGuy1.webp", alt: "Editorial work" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto py-8 md:py-16 max-w-5xl flex-1">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-xl md:text-2xl font-bold font-mono uppercase tracking-[0.1em] text-foreground mb-1">
            Hannah Yesmunt
          </h1>
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-6 md:mb-4">
            Product Developer / Assistant Designer
          </p>
          <div className="max-w-xl">
            <p className="text-[11px] md:text-xs font-sans text-muted leading-relaxed">
              Focused on functional design, product workflows, and inclusive apparel solutions
            </p>
          </div>

          {/* Photo Gallery - Masonry */}
          <div className="w-full mt-12 md:mt-10">
            <div className="columns-2 md:columns-3 gap-3 md:gap-2">
              {heroImages.map((image, index) => (
                <div key={index} className="mb-3 md:mb-2 break-inside-avoid">
                  <div className="relative w-full overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mt-16 md:mt-20 flex flex-col items-center">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8 text-center">
              Explore my work
            </span>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
              <Link
                href="/professional"
                className="px-6 py-4 sm:py-3 border border-accent text-foreground rounded-lg hover:bg-accent hover:text-white transition-colors text-center text-sm font-medium"
              >
                Professional
              </Link>
              <Link
                href="/technical-work"
                className="px-6 py-4 sm:py-3 border border-accent text-foreground rounded-lg hover:bg-accent hover:text-white transition-colors text-center text-sm font-medium"
              >
                Technical Work
              </Link>
              <Link
                href="/pocket-design-lab"
                className="px-6 py-4 sm:py-3 border border-accent text-foreground rounded-lg hover:bg-accent hover:text-white transition-colors text-center text-sm font-medium"
              >
                Pocket Design Lab
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Media Teaser Section */}
      <section className="border-t border-accent bg-background">
        <div className="container mx-auto py-16 max-w-3xl">
          <div className="flex flex-col items-center text-center gap-8 md:gap-6">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted">
              Featured In
            </span>
            <div className="max-w-xl">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Selected features highlighting my work in fashion, product development, and creative projects.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-4 px-4">
              <Image
                src="/images/main/press/sd l-01.avif"
                alt="Something Different Magazine"
                width={150}
                height={50}
                className="h-[50px] md:h-[60px] w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
              />
              <Image
                src="/images/main/press/submissionbeauty.logo.small.72dpi_r3.avif"
                alt="Submission Beauty"
                width={150}
                height={50}
                className="h-5 md:h-6 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
              />
              <Image
                src="/images/main/press/250px-CreativeMornings_Logo.png"
                alt="Creative Mornings"
                width={150}
                height={50}
                className="h-10 md:h-14 w-auto object-contain opacity-50 hover:opacity-100 mt-2 md:mt-3 grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <Link
              href="/media"
              className="mt-8 md:mt-4 px-8 py-4 sm:px-6 sm:py-3 border border-accent text-foreground rounded-lg hover:bg-accent hover:text-white transition-colors text-sm font-medium"
            >
              See All Media
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
