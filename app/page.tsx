import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-24 max-w-3xl flex-1">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
            Hannah Yesmunt
          </h1>
          <p className="text-xl text-foreground/80">
            Product Developer / Assistant Designer
          </p>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Focused on technical design, product workflows, and inclusive apparel solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
