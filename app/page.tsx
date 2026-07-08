import Link from "next/link";
import Image from "next/image";
import GalleryItem from "@/app/components/GalleryItem";

const homeGallery = [
  { src: "/images/main/slimewear-dress-shirt.png", alt: '"Slimewear" Dress Shirt', subtext: "Patternmaking, Design & Garment Construction" },
  { src: "/images/main/og-anunoby-skechers.png", alt: "OG Anunoby in Skechers Performance Apparel", subtext: "Product Development" },
  { src: "/images/main/sa_coolpool_9687.jpg", alt: "Saint Andro 2-Way Swim Top", subtext: "Fit Development" },
  { src: "/images/main/Adaptation_7350_edit.webp", alt: '"Sporty Bonnet" for Adaptation Editorial', subtext: "Accessory Design & Styling" },
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
            Technical Design | Product Development
          </p>
          <div className="max-w-xl">
            <p className="text-xs md:text-base font-sans text-muted leading-relaxed">
              Technical apparel design and product development — spanning performance
              apparel, hands-on pattern and prototype work, and brand-scale production.
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="w-full mt-8 md:mt-10">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3">
              {homeGallery.map((image) => (
                <GalleryItem key={image.src} image={image} />
              ))}
            </div>
          </div>

          <div className="w-full mt-12 md:mt-20 flex flex-col items-center">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-6 md:mb-8 text-center">
              Explore my work
            </span>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Link
                href="/technical-design"
                className="px-5 py-3 sm:px-6 sm:py-3 border border-accent text-foreground rounded-md md:rounded-lg hover:bg-accent hover:text-white transition-colors text-center text-xs md:text-sm font-medium"
              >
                Technical Design
              </Link>
              <Link
                href="/case-studies"
                className="px-5 py-3 sm:px-6 sm:py-3 border border-accent text-foreground rounded-md md:rounded-lg hover:bg-accent hover:text-white transition-colors text-center text-xs md:text-sm font-medium"
              >
                Case Studies
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
                Selected features highlighting creative projects and my work in fashion.
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
