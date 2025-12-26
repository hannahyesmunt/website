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
];

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
            Media / Press
          </h1>
          <p className="text-muted mt-6">
            A curated selection of media coverage featuring my work in fashion, product development, and creative projects.
          </p>
        </header>

        <div className="space-y-6">
          {mediaItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-lg p-6 bg-surface hover:border-accent hover:shadow-sm transition-all duration-200"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                      {item.publication}
                    </span>
                  </div>
                  <span className="text-sm text-muted whitespace-nowrap flex-shrink-0">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">
                  {item.description}
                </p>
                <span className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1">
                  {item.linkText || "Read article"} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

