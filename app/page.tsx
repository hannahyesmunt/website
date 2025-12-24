import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24 max-w-3xl">
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
    </div>
  );
}
