"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-6 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Sampark Karein</span>
          <h1 className="font-[var(--font-heading)] text-2xl md:text-5xl font-bold text-[var(--color-text)] mt-3">
            Milke <span className="text-gold-gradient italic">Jadoo Create Karte Hain</span>
          </h1>
          <p className="text-[var(--color-text-mid)] mt-4 max-w-xl mx-auto">
            Book karna hai? Koi sawaal hai? Sabse fast reply ke liye WhatsApp pe reach out karo,
            ya neeche inquiry form fill karo.
          </p>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 mt-6 bg-white rounded-full px-5 py-2.5 shadow-sm border border-[var(--color-cream-dark)]">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[var(--color-text)]">{siteConfig.bookingStatus}</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left - Contact Info + WhatsApp */}
          <ScrollReveal variant="left">
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-cream-dark)]">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[var(--color-text)] mb-2">
                  Sabse Fast Tarika
                </h3>
                <p className="text-sm text-[var(--color-text-mid)] mb-6">
                  WhatsApp pe sabse jaldi reply milta hai. Usually 1-2 ghante mein reply karti hoon.
                </p>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-shadow"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-cream-dark)] space-y-6">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[var(--color-text)]">
                  Contact Details
                </h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold-soft)] flex items-center justify-center shrink-0 text-[var(--color-gold)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-text)]">Location</div>
                    <div className="text-sm text-[var(--color-text-mid)]">Mumbai (Vasai-Virar), Maharashtra</div>
                    <div className="text-xs text-[var(--color-gold-dark)] mt-1">Destination Weddings ke liye globally available</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold-soft)] flex items-center justify-center shrink-0 text-[var(--color-gold)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-text)]">Instagram</div>
                    <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-gold-dark)] hover:underline">
                      @minakshimakeupandhair
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold-soft)] flex items-center justify-center shrink-0 text-[var(--color-gold)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-text)]">YouTube</div>
                    <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-gold-dark)] hover:underline">
                      @minakshimakeupandhair
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal variant="right">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-cream-dark)]">
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[var(--color-text)] mb-2">
                Inquiry Bhejo
              </h3>
              <p className="text-sm text-[var(--color-text-mid)] mb-8">
                Form fill karo aur main 24 ghante mein reply karungi.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Aapka Naam *</label>
                  <input
                    type="text"
                    required
                    placeholder="Apna poora naam likhein"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-off-white)] text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold-glow)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-off-white)] text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold-glow)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Event Ka Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-off-white)] text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold-glow)] transition-colors"
                  >
                    <option value="">Event type select karo</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="engagement">Engagement Makeup</option>
                    <option value="reception">Reception Makeup</option>
                    <option value="south-indian">South Indian Bridal</option>
                    <option value="bengali">Bengali Bridal</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="hair">Hair Styling</option>
                    <option value="package">Full Wedding Package</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Event Ki Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-off-white)] text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold-glow)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Apne look ka vision bataao, koi preferences, outfit details..."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-off-white)] text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold-glow)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`btn-shimmer w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all ${
                    submitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white hover:shadow-[0_8px_32px_rgba(200,165,90,0.3)]"
                  }`}
                >
                  {submitted ? "Inquiry Bhej Di! Jaldi reply karenge." : "Inquiry Bhejo"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
