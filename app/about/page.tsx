import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          About
        </h1>
        <div className="max-w-none">
          <p className="text-foreground/80 leading-relaxed mb-6">
            Coming soon.
          </p>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Connect
            </h2>
            <Link
              href="https://linkedin.com/in/hannahyesmunt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

