import Link from "next/link";
import Image from "next/image";

interface MediaItem {
  publication: string;
  title: string;
  description: string;
  link: string;
  year: string;
}

const mediaItems: MediaItem[] = [
  {
    publication: "Something Different Magazine",
    title: "CORPCORE",
    description: "An ironic look at corporate culture and the dreams it may crush. Collection conceived, sewn, & styled by Hannah Yesmunt & Kiernan McKay.",
    link: "https://www.sdmag.net/post/corpcore",
    year: "2023",
  },
  {
    publication: "Submission Beauty Magazine",
    title: "ADAPTATION",
    description: "Exploring how personal style adapts to climate change through upcycled and redesigned pieces. Styling by Hannah Yesmunt.",
    link: "https://submissionbeauty.com/blogs/magazine/adaptation",
    year: "2024",
  },
  {
    publication: "Creative Mornings",
    title: "Guest Speaker July 2024",
    description: "Brief description of the feature or article highlighting your work.",
    link: "#",
    year: "2024",
  },
];

const mediaImages = [
  { src: "/images/main/Adaptation_6652_exposure1.webp", alt: "Adaptation editorial" },
  { src: "/images/main/Adaptation_7350_edit.webp", alt: "Adaptation editorial" },
  { src: "/images/main/2024_06_05_Pocket_Design_Lab_388.webp", alt: "Pocket Design Lab" },
  { src: "/images/main/DOUBLE+TOP+6.webp", alt: "Editorial work" },
  { src: "/images/main/Flatlay_050_websize+(1).webp", alt: "Flatlay photography" },
  { src: "/images/main/Flatlay_060_websize.webp", alt: "Flatlay photography" },
  { src: "/images/main/Flatlay_077_websize.webp", alt: "Flatlay photography" },
  { src: "/images/main/untitled0578_faze2_websize.webp", alt: "Editorial work" },
  { src: "/images/main/Screenshot+2023-03-01+at+12.15.16+PM.webp", alt: "Media feature" },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
            Media / Press
          </h1>
          <p className="text-foreground/70 mt-6">
            A curated selection of media coverage featuring my work in fashion, product development, and creative projects.
          </p>
        </header>

        {/* Photo Gallery */}
        <section className="mb-12">
          <div className="columns-2 md:columns-3 gap-4">
            {mediaImages.map((image, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <div className="relative w-full bg-foreground/5 rounded-lg overflow-hidden border border-accent/30">
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
        </section>

        <div className="space-y-6">
          {mediaItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-accent/30 rounded-lg p-6 bg-background hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-200"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                      {item.publication}
                    </span>
                  </div>
                  <span className="text-sm text-foreground/50 whitespace-nowrap flex-shrink-0">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70">
                  {item.description}
                </p>
                <span className="text-sm text-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-1">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

