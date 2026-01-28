import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 md:py-16 max-w-5xl px-4 md:px-0">
        <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">
          Contact
        </span>
        <h1 className="text-lg md:text-2xl font-bold text-foreground tracking-tight mb-4 md:mb-8">
          Get in Touch
        </h1>
        <div className="space-y-6 md:space-y-12">
          <div>
            <p className="text-xs md:text-base text-foreground leading-relaxed max-w-xl">
              I&apos;m always open to discussing new opportunities, collaborations, or answering questions about my work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-border">
            <div>
              <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-2 md:mb-3">
                LinkedIn
              </h3>
              <Link
                href="https://www.linkedin.com/in/hannah-yesmunt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-base text-foreground hover:text-accent transition-colors underline underline-offset-4 decoration-accent/30 hover:decoration-accent"
              >
                hannah-yesmunt
              </Link>
            </div>
            <div>
              <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-2 md:mb-3">
                Instagram
              </h3>
              <Link
                href="https://instagram.com/pocketdesignlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-base text-foreground hover:text-accent transition-colors underline underline-offset-4 decoration-accent/30 hover:decoration-accent"
              >
                @pocketdesignlab
              </Link>
            </div>
            <div>
              <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-2 md:mb-3">
                Email
              </h3>
              <Link
                href="mailto:hannahyesmunt@gmail.com"
                className="text-xs md:text-base text-foreground hover:text-accent transition-colors underline underline-offset-4 decoration-accent/30 hover:decoration-accent"
              >
                hannahyesmunt@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
