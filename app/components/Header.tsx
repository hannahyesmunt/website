"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-48 border-r border-accent bg-background flex-col z-10">
        <nav className="p-6 flex flex-col gap-6">
          <Link href="/" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
            Hannah Yesmunt
          </Link>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/professional"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Professional
            </Link>
            <Link
              href="/technical-work"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Technical Work
            </Link>
            <Link
              href="/pocket-design-lab"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Pocket Design Lab
            </Link>
            <Link
              href="/media"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Media / Press
            </Link>
            <Link
              href="/about"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </aside>
      
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-20 border-b border-accent bg-background">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
            Hannah Yesmunt
          </Link>
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-accent transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-accent transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-accent transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <nav className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 border-t border-accent' : 'max-h-0'}`}>
          <div className="px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/professional"
              onClick={closeMenu}
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Professional
            </Link>
            <Link
              href="/technical-work"
              onClick={closeMenu}
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Technical Work
            </Link>
            <Link
              href="/pocket-design-lab"
              onClick={closeMenu}
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Pocket Design Lab
            </Link>
            <Link
              href="/media"
              onClick={closeMenu}
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Media / Press
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
