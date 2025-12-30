import Link from "next/link";

interface MediaItem {
  publication: string;
  title: string;
  description: string;
  link: string;
  year: string;
  linkText?: string;
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
    description: "Presented on the theme of 'Trust' at CreativeMornings Grand Rapids, MI.",
    link: "https://creativemornings.com/",
    year: "2024",
    linkText: "View website",
  },
  {
    publication: "Esque",
    title: "The Best Swimwear for All Genders",
    description: "Featured Saint Andro Swimwear in an editorial selection of functional and inclusive swimwear solutions.",
    link: "https://www.esque.us/p/the-best-swimwear-for-all-genders",
    year: "2024",
  },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 md:py-16 max-w-5xl">
        <header className="mb-10 md:mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">
            Press
          </span>
          <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-6">
            Media / Press
          </h1>
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm text-muted leading-relaxed">
              A curated selection of media coverage featuring my work in fashion, product development, and creative projects.
            </p>
          </div>
        </header>

        <div className="space-y-6 md:space-y-8">
          {mediaItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-lg p-5 md:p-6 bg-surface hover:border-accent hover:shadow-sm transition-all duration-200"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
                      {item.publication}
                    </span>
                  </div>
                  <span className="text-xs font-mono tracking-[0.06em] text-muted whitespace-nowrap flex-shrink-0">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed max-w-2xl">
                  {item.description}
                </p>
                <div className="mt-2">
                  <span className="text-[10px] md:text-xs font-mono tracking-[0.06em] text-muted group-hover:text-accent transition-colors inline-flex items-center gap-1 uppercase">
                    {item.linkText || "Read article"} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

