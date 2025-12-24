import Link from "next/link";
import Image from "next/image";

const heroImages = [
  { src: "/images/main/Adaptation_6652_exposure1.webp", alt: "Adaptation editorial" },
  { src: "/images/main/bball.jpg", alt: "Editorial work" },
  { src: "/images/main/DOUBLE+TOP+6.webp", alt: "Editorial work" },
  { src: "/images/main/Flatlay_050_websize+(1).webp", alt: "Flatlay photography" },
  { src: "/images/main/Screenshot+2023-03-01+at+12.15.16+PM.webp", alt: "Media feature" },
  { src: "/images/main/Flatlay_077_websize.webp", alt: "Flatlay photography" },
  { src: "/images/main/Flatlay_060_websize.webp", alt: "Flatlay photography" },
  { src: "/images/main/untitled0578_faze2_websize.webp", alt: "Editorial work" },
  { src: "/images/main/000055980003_websize.webp", alt: "Editorial work" },
  { src: "/images/main/sa_coolpool_9687.webp", alt: "Saint Andro" },
  { src: "/images/main/IMG_5700.jpeg", alt: "Project work" },
  { src: "/images/main/590402588_17942281062086715_2578124886817200815_n.jpg", alt: "Editorial work" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-24 max-w-4xl flex-1">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
            Hannah Yesmunt
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 -mt-4">
            Product Developer / Assistant Designer
          </p>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Focused on technical design, product workflows, and inclusive apparel solutions
          </p>

          {/* Photo Gallery */}
          <div className="w-full mt-8">
            <div className="columns-2 md:columns-3 gap-1">
              {heroImages.map((image, index) => (
                <div key={index} className="mb-1 break-inside-avoid">
                  <div className="relative w-full overflow-hidden">
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

          <p className="text-foreground/60 mt-8">
            Explore my work below
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/professional"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity text-center font-medium"
            >
              Professional
            </Link>
            <Link
              href="/technical-work"
              className="px-6 py-3 border border-accent/50 text-foreground rounded-lg hover:border-accent hover:bg-accent/5 transition-colors text-center"
            >
              Technical Work
            </Link>
            <Link
              href="/pocket-design-lab"
              className="px-6 py-3 border border-accent/50 text-foreground rounded-lg hover:border-accent hover:bg-accent/5 transition-colors text-center"
            >
              Pocket Design Lab
            </Link>
          </div>
        </div>
      </div>

      {/* Media Teaser Section */}
      <section className="border-t border-accent/30 bg-background">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Featured In
            </h2>
            <p className="text-foreground/70 max-w-xl">
              Selected features highlighting my work in fashion, product development, and creative projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
              <span className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors">
                IN Magazine
              </span>
              <span className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors">
                Publication 2
              </span>
              <span className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors">
                Publication 3
              </span>
            </div>
            <Link
              href="/media"
              className="mt-4 px-6 py-3 border border-accent/50 text-foreground rounded-lg hover:border-accent hover:bg-accent/5 transition-colors"
            >
              See All Media
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
