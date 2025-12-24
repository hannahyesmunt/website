import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Contact
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              I'm always open to discussing new opportunities, collaborations, or answering questions about my work.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              LinkedIn
            </h3>
            <Link
              href="https://linkedin.com/in/hannahyesmunt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors underline"
            >
              linkedin.com/in/hannahyesmunt
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Instagram
            </h3>
            <Link
              href="https://instagram.com/pocketdesignlab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors underline"
            >
              @pocketdesignlab
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Email
            </h3>
            <Link
              href="mailto:hannahyesmunt@gmail.com"
              className="text-foreground/70 hover:text-foreground transition-colors underline"
            >
              hannahyesmunt@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
