"use client";

import React from "react";
import { processSteps } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const icons: Record<string, React.ReactNode> = {
  message: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
  sparkle: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" /></svg>,
  palette: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" /><circle cx="7.5" cy="11.5" r="1.5" /><circle cx="10" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /><circle cx="17" cy="11.5" r="1.5" /></svg>,
  crown: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20h20M4 20V8l4 4 4-8 4 8 4-4v12" /></svg>,
};

export default function ProcessTimeline() {
  return (
    <section className="py-12 md:py-16 bg-[var(--color-off-white)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Kaise Hota Hai</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--color-text)] mt-3">
            Aapka Safar <span className="text-gold-gradient italic">Bridal Beauty</span> Tak
          </h2>
          <p className="text-[var(--color-text-mid)] mt-4 max-w-xl mx-auto">
            Pehli inquiry se lekar aapke big day tak — ek seamless, personalized experience.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[var(--color-gold-glow)] via-[var(--color-gold)] to-[var(--color-gold-glow)]" />

          {processSteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 150} className="text-center relative">
              {/* Step number badge */}
              <div className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 w-5 h-5 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-[var(--color-gold-dark)] to-[var(--color-gold)] text-white text-[10px] md:text-xs font-bold flex items-center justify-center z-20 shadow-md">
                {step.step}
              </div>

              <div className="w-16 h-16 md:w-28 md:h-28 rounded-xl md:rounded-2xl bg-white border-2 border-[var(--color-cream-dark)] hover:border-[var(--color-gold-glow)] flex items-center justify-center mx-auto mb-3 md:mb-6 relative z-10 text-[var(--color-gold)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {icons[step.icon]}
                </div>
              </div>

              <h3 className="font-[var(--font-heading)] text-sm md:text-xl font-semibold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="hidden md:block text-sm text-[var(--color-text-mid)] mt-3 leading-relaxed max-w-[250px] mx-auto">
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
