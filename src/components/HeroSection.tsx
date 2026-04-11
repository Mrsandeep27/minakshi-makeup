"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import TypeWriter from "./TypeWriter";

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 10 + "s";
      p.style.animationDuration = 6 + Math.random() * 6 + "s";
      const size = 2 + Math.random() * 5;
      p.style.width = size + "px";
      p.style.height = size + "px";
      container.appendChild(p);
    }
  }, []);

  return (
    <header className="relative min-h-screen flex items-end justify-center pb-4 md:pb-20 overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0 hero-ken-burns">
        <img
          src="/images/hero-bg.webp"
          alt="Bridal beauty"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Dark Overlay — lighter on top to show face, darker at bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Floating Trust Badges */}
      {/* Floating badges — hidden on mobile, shown on md+ */}
      <div className="absolute top-32 left-6 md:left-16 hidden md:block animate-[fadeInUp_1s_ease_1.2s_forwards] opacity-0">
        <div className="glass-card-strong px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-gold)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-sm">{siteConfig.rating} Rating</div>
            <div className="text-white/50 text-xs">{siteConfig.reviewCount}+ Google Reviews</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 right-6 md:right-16 hidden md:block animate-[fadeInUp_1s_ease_1.5s_forwards] opacity-0">
        <div className="glass-card-strong px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">Booking Open</div>
            <div className="text-white/50 text-xs">Limited Dates Available</div>
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-6 md:right-20 hidden lg:block animate-[fadeInUp_1s_ease_1.8s_forwards] opacity-0">
        <div className="glass-card-strong px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] font-bold text-sm">
            {siteConfig.experience}+
          </div>
          <div>
            <div className="text-white font-bold text-sm">Years Experience</div>
            <div className="text-white/50 text-xs">500+ Happy Brides</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.05] animate-[fadeInUp_0.8s_ease_0.2s_forwards] opacity-0" style={{textShadow: '0 4px 30px rgba(0,0,0,0.5)'}}>
          Your Story,
          <br />
          <span className="text-gold-gradient italic" style={{filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.3))'}}>Our Artistry</span>
        </h1>

        {/* Typewriter subtitle */}
        <div className="mt-6 animate-[fadeInUp_0.8s_ease_0.4s_forwards] opacity-0">
          <span className="text-white/80 text-sm sm:text-base md:text-xl" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Crafting </span>
          <TypeWriter
            words={["Bridal Dreams", "Timeless Elegance", "Your Perfect Look", "Destination Glam", "Celebration Vibes", "Pure Confidence"]}
            className="text-[var(--color-gold)] text-sm sm:text-base md:text-xl font-semibold"
            typingSpeed={80}
            deletingSpeed={50}
            pauseTime={1800}
          />
        </div>

        {/* Subtitle */}
        <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto mt-3 md:mt-4 leading-relaxed animate-[fadeInUp_0.8s_ease_0.5s_forwards] opacity-0" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
          We don&apos;t just do makeup — we reveal the most beautiful version of you.
          Flawless looks that last from vows to the last dance.
        </p>

        {/* CTAs + Stats side by side */}
        <div className="flex flex-col items-center mt-6 md:mt-10 animate-[fadeInUp_0.8s_ease_0.7s_forwards] opacity-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-shimmer flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-6 py-3 md:px-9 md:py-4 rounded-full font-semibold text-sm md:text-base tracking-wide hover:shadow-[0_8px_40px_rgba(200,165,90,0.5)] transition-all duration-300 hover:scale-105"
            >
              <span>Book Your Special Day</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 md:px-9 md:py-4 rounded-full font-semibold text-sm md:text-base tracking-wide hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
              View My Work
            </Link>
          </div>

          {/* Quick stats inline below CTAs */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-12 mt-5 md:mt-8 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 md:px-8 md:py-3 border border-white/10">
            <div className="text-center">
              <div className="text-white font-[var(--font-heading)] text-sm sm:text-xl font-bold">{siteConfig.experience}+</div>
              <div className="text-white/40 text-[8px] sm:text-[10px] uppercase tracking-wider">Years</div>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="text-center">
              <div className="text-white font-[var(--font-heading)] text-sm sm:text-xl font-bold">{siteConfig.bridesCount}+</div>
              <div className="text-white/40 text-[8px] sm:text-[10px] uppercase tracking-wider">Brides</div>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="text-center">
              <div className="text-white font-[var(--font-heading)] text-sm sm:text-xl font-bold">{siteConfig.rating}</div>
              <div className="text-white/40 text-[8px] sm:text-[10px] uppercase tracking-wider">Rating</div>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="text-center">
              <div className="text-white font-[var(--font-heading)] text-sm sm:text-xl font-bold">50+</div>
              <div className="text-white/40 text-[8px] sm:text-[10px] uppercase tracking-wider">Destinations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeInUp_0.8s_ease_1.1s_forwards] opacity-0">
        <div className="mouse">
          <div className="mouse-wheel" />
        </div>
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Explore</span>
      </div>
    </header>
  );
}
