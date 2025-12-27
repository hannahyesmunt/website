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
        <nav className="p-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-3xl font-normal text-foreground hover:text-accent transition-colors font-[family-name:var(--font-tourney)] mb-4"
            >
              HY
            </Link>
            <Link
              href="/"
              className="text-muted hover:text-accent transition-colors font-sans uppercase tracking-[0.08em] text-[12px] font-normal"
            >
              Home
            </Link>
            <Link
              href="/professional"
              className="text-muted hover:text-accent transition-colors font-sans uppercase tracking-[0.08em] text-[12px] font-normal"
            >
              Professional
            </Link>
            <Link
              href="/technical-work"
              className="text-muted hover:text-accent transition-colors font-sans uppercase tracking-[0.08em] text-[12px] font-normal"
            >
              Technical Work
            </Link>
            <Link
              href="/pocket-design-lab"
              className="text-muted hover:text-accent transition-colors font-sans uppercase tracking-[0.08em] text-[12px] font-normal"
            >
              Pocket Design Lab
            </Link>
            <Link
              href="/media"
              className="text-muted hover:text-accent transition-colors font-sans uppercase tracking-[0.08em] text-[12px] font-normal"
            >
              Media / Press
            </Link>
            <Link
              href="/about"
              className="text-muted hover:text-accent transition-colors font-sans uppercase tracking-[0.08em] text-[12px] font-normal"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted hover:text-accent transition-colors font-sans uppercase tracking-[0.08em] text-[12px] font-normal"
            >
              Contact
            </Link>
        </nav>
      </aside>
      
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-20 border-b border-accent bg-background">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-normal text-foreground hover:text-accent transition-colors font-[family-name:var(--font-tourney)]"
          >
            HY
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
        <nav className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 border-t border-border' : 'max-h-0'}`}>
          <div className="px-4 py-2.5 flex flex-col gap-0">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-muted hover:text-accent transition-colors py-1 text-sm font-sans uppercase tracking-[0.08em] font-normal"
            >
              Home
            </Link>
            <Link
              href="/professional"
              onClick={closeMenu}
              className="text-muted hover:text-accent transition-colors py-1 text-sm font-sans uppercase tracking-[0.08em] font-normal"
            >
              Professional
            </Link>
            <Link
              href="/technical-work"
              onClick={closeMenu}
              className="text-muted hover:text-accent transition-colors py-1 text-sm font-sans uppercase tracking-[0.08em] font-normal"
            >
              Technical Work
            </Link>
            <Link
              href="/pocket-design-lab"
              onClick={closeMenu}
              className="text-muted hover:text-accent transition-colors py-1 text-sm font-sans uppercase tracking-[0.08em] font-normal"
            >
              Pocket Design Lab
            </Link>
            <Link
              href="/media"
              onClick={closeMenu}
              className="text-muted hover:text-accent transition-colors py-1 text-sm font-sans uppercase tracking-[0.08em] font-normal"
            >
              Media / Press
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-muted hover:text-accent transition-colors py-1 text-sm font-sans uppercase tracking-[0.08em] font-normal"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-muted hover:text-accent transition-colors py-1 text-sm font-sans uppercase tracking-[0.08em] font-normal"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
