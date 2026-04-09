import Link from "next/link";
import { reviews, vendorPartners, siteConfig } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Reviews | Minakshi Makeup & Hair",
  description: "Read what 168+ happy brides say about Minakshi Makeup & Hair. 4.9★ rated bridal makeup artist in Mumbai.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-6 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Reviews</span>
          <h1 className="font-[var(--font-heading)] text-2xl md:text-5xl font-bold text-[var(--color-text)] mt-3">
            Humari <span className="text-gold-gradient italic">Dulhanein Kya Kehti Hain</span>
          </h1>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-4 mt-8 bg-white rounded-2xl px-8 py-4 shadow-md border border-[var(--color-cream-dark)]">
            <div className="text-center">
              <div className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-text)]">{siteConfig.rating}</div>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-[var(--color-cream-dark)]" />
            <div className="text-left">
              <div className="font-semibold text-sm text-[var(--color-text)]">{siteConfig.reviewCount}+ Reviews</div>
              <div className="text-xs text-[var(--color-text-mid)]">Google Reviews</div>
            </div>
            <div className="h-10 w-px bg-[var(--color-cream-dark)]" />
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-10bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-[var(--color-cream-dark)] h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-[var(--color-text)]">{review.name}</div>
                      <div className="text-xs text-[var(--color-text-light)]">{review.event}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="text-sm text-[var(--color-text-mid)] leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Partners */}
      <section className="py-10bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Dream Team</span>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[var(--color-text)] mt-3">
              Trusted <span className="text-gold-gradient italic">Vendor Partners</span>
            </h2>
            <p className="text-[var(--color-text-mid)] mt-3 max-w-xl mx-auto">
              Best wedding photographers aur cinematographers ke saath milke kaam karti hoon
              taaki aapko complete, seamless experience mile.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
            {vendorPartners.map((vendor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[var(--color-off-white)] rounded-2xl p-6 text-center border border-[var(--color-cream-dark)]">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-gold-dark)] to-[var(--color-gold-light)] flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
                  </div>
                  <h3 className="font-[var(--font-heading)] font-semibold text-[var(--color-text)]">{vendor.name}</h3>
                  <p className="text-xs text-[var(--color-text-mid)] mt-1">{vendor.role}</p>
                  <a
                    href={`https://instagram.com/${vendor.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--color-gold-dark)] mt-3 hover:underline"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    {vendor.instagram}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold text-white">
              <span className="text-gold-gradient italic">500+ Families</span> Ka Bharosa
            </h2>
            <p className="text-white/60 mt-4">
              Saikdon khush dulhanon ke saath judiye jinhone apne sabse khaas din ke liye Minakshi pe bharosa kiya.
            </p>
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide"
            >
              Apna Session Book Karo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
