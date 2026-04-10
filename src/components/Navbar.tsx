"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      if (y > 100) {
        setHidden(y > lastY);
      } else {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-cream-dark)]"
    : "bg-transparent";

  const textColor = scrolled || !isHome
    ? "text-[var(--color-text)]"
    : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${navBg} ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] flex items-center justify-center text-white font-[var(--font-heading)] text-lg font-bold tracking-wide">
              M
            </span>
            <div className="flex flex-col leading-tight">
              <span className={`font-[var(--font-heading)] text-lg font-semibold tracking-wide transition-colors ${textColor}`}>
                Minakshi
              </span>
              <span className={`font-[var(--font-accent)] text-xs tracking-[0.15em] uppercase transition-colors ${scrolled || !isHome ? 'text-[var(--color-text-mid)]' : 'text-white/70'}`}>
                Makeup & Hair
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium text-sm tracking-wide transition-colors hover:text-[var(--color-gold)] ${
                  pathname === item.href
                    ? "text-[var(--color-gold)]"
                    : textColor
                } ${item.href === "/contact" ? "hidden" : ""}`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-gold)] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-shimmer bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:shadow-[var(--shadow-gold)] transition-shadow"
            >
              Check Availability
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center z-[10000]"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2 bg-[var(--color-gold)]" : scrolled || !isHome ? "bg-[var(--color-text)]" : "bg-white"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : scrolled || !isHome ? "bg-[var(--color-text)]" : "bg-white"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2 bg-[var(--color-gold)]" : scrolled || !isHome ? "bg-[var(--color-text)]" : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={pathname === item.href ? "!text-[var(--color-gold)]" : ""}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
