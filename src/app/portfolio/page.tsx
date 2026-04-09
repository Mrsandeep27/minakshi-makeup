"use client";

import Link from "next/link";
import { portfolio, portfolioCategories, siteConfig } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import MasonryGallery from "@/components/MasonryGallery";

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-6 bg-[var(--color-cream)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Mera Kaam</span>
          <h1 className="font-[var(--font-heading)] text-2xl md:text-5xl font-bold text-[var(--color-text)] mt-3">
            <span className="text-gold-gradient italic">Bridal Beauty</span> Ka Portfolio
          </h1>
          <p className="text-[var(--color-text-mid)] mt-4 max-w-2xl mx-auto">
            Meri best bridal transformations ka ek curated showcase — har culture, har style.
            Har look mein ek unique kahani hai pyaar aur khoobsurti ki.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-[var(--color-text-mid)]">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
              {portfolio.length} Looks
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
              No Filters
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              {siteConfig.rating} Rated
            </span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-6">
          <MasonryGallery items={portfolio} categories={portfolioCategories} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[var(--color-dark)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
              Pasand Aaya Jo Dikha?
            </h2>
            <p className="text-white/50 mt-4">
              Aao milke aapka apna stunning bridal look banate hain. Trial session book karo aur jadoo khud dekho.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="btn-shimmer bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:shadow-[0_8px_40px_rgba(200,165,90,0.5)] transition-all duration-300 hover:scale-105"
              >
                Book a Trial Session
              </Link>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                See more on Instagram
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
