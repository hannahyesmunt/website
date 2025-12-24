import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 border-r border-accent bg-background flex-col z-10">
        <nav className="p-6 flex flex-col gap-6">
          <Link href="/" className="text-xl font-semibold text-foreground hover:opacity-80 transition-opacity">
            Hannah Yesmunt
          </Link>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/professional"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Professional
            </Link>
            <Link
              href="/technical-work"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Technical Work
            </Link>
            <Link
              href="/pocket-design-lab"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Pocket Design Lab
            </Link>
            <Link
              href="/about"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </aside>
      
      {/* Mobile Header */}
      <header className="md:hidden w-full border-b border-accent bg-background">
        <nav className="px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-xl font-semibold text-foreground hover:opacity-80 transition-opacity">
            Hannah Yesmunt
          </Link>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/professional"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Professional
            </Link>
            <Link
              href="/technical-work"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Technical Work
            </Link>
            <Link
              href="/pocket-design-lab"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Pocket Design Lab
            </Link>
            <Link
              href="/about"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

