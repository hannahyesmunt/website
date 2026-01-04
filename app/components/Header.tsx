"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/professional", label: "Professional" },
    { href: "/technical-work", label: "Technical Work" },
    { href: "/pocket-design-lab", label: "Pocket Design Lab" },
    { href: "/media", label: "Media / Press" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname === path || pathname?.startsWith(path + "/");
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-48 border-r border-accent bg-background flex-col z-40">
        <nav className="p-6 flex flex-col gap-4">
          <Link
            href="/"
            className="text-3xl font-normal text-foreground hover:text-accent transition-colors font-[family-name:var(--font-tourney)] mb-4"
          >
            HY
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors font-sans uppercase tracking-[0.08em] text-[13px] font-normal ${
                isActive(link.href) ? "text-accent" : "text-muted hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-accent bg-background">
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
            <span
              className={`w-6 h-0.5 bg-accent transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-accent transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-accent transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <nav
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 border-t border-border" : "max-h-0"
          }`}
        >
          <div className="px-4 py-2.5 flex flex-col gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`py-1 text-[15px] font-sans uppercase tracking-[0.08em] font-normal transition-colors ${
                  isActive(link.href) ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
