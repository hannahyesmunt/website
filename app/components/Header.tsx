import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-foreground">
          Website
        </div>
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
          >
            Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
}

