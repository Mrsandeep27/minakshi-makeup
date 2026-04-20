import Link from "next/link";
import dynamic from "next/dynamic";
import { siteConfig, stats, services, marqueeItems, reviews, portfolio } from "@/lib/data";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { SkeletonBlock } from "@/components/Skeleton";

const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"), {
  loading: () => <div className="py-6 px-5"><div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto">{[...Array(4)].map((_, i) => <SkeletonBlock key={i} className="h-20 md:h-32" />)}</div></div>,
});
const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"), {
  loading: () => <div className="flex gap-4 px-5 overflow-hidden">{[...Array(3)].map((_, i) => <SkeletonBlock key={i} className="flex-shrink-0 w-[260px] h-[200px] rounded-2xl" />)}</div>,
});
const InstaGrid = dynamic(() => import("@/components/InstaGrid"), {
  loading: () => <div className="grid grid-cols-4 gap-1.5 px-5">{[...Array(8)].map((_, i) => <SkeletonBlock key={i} className="aspect-square" />)}</div>,
});
const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfterSlider"), {
  loading: () => <SkeletonBlock className="h-[220px] md:h-[500px] max-w-4xl mx-auto rounded-2xl" />,
});

const instaPosts = [
  { image: "/images/portfolio/marathi-bride.webp", caption: "Marathi bride" },
  { image: "/images/portfolio/engagement-glamour.webp", caption: "Engagement makeover" },
  { image: "/images/portfolio/south-indian.webp", caption: "South Indian bridal" },
  { image: "/images/portfolio/reception-glam.webp", caption: "Reception glam" },
  { image: "/images/portfolio/cinematic-wedding.webp", caption: "Cinematic wedding" },
  { image: "/images/portfolio/soft-pink-bride.webp", caption: "Soft pink bride" },
  { image: "/images/portfolio/flower-art.webp", caption: "Flower art styling" },
  { image: "/images/portfolio/wedding-look.webp", caption: "Wedding look" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Marquee */}
      <div className="bg-[var(--color-dark)] py-2 md:py-4 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          <div className="flex items-center gap-8 px-4">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-[var(--font-accent)] text-lg tracking-[0.1em] uppercase text-white/70">{item}</span>
                <span className="text-[var(--color-gold)] text-xs">&#9830;</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <section className="bg-white border-b border-[var(--color-cream-dark)] py-2 md:py-6">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--color-gold)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-[var(--color-text)]">{siteConfig.rating}</span>
              <span className="text-sm text-[var(--color-text-mid)]">on Google ({siteConfig.reviewCount}+ reviews)</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-[var(--color-text-light)]">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                Trusted by 500+ Families
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Available Globally
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                100% Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[var(--color-dark)]">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100} className="text-center">
              <div className="font-[var(--font-heading)] text-2xl md:text-5xl font-bold text-gold-gradient">
                <CountUp target={stat.number} suffix={stat.suffix} decimals={stat.number % 1 !== 0 ? 1 : 0} />
              </div>
              <div className="font-[var(--font-accent)] text-[10px] md:text-sm tracking-[0.15em] uppercase text-white/50 mt-1 md:mt-2">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== MAKEUP CLASSES — Certified Courses ===== */}
      <section className="py-8 md:py-16 bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <ScrollReveal className="text-center mb-6 md:mb-10">
            <span className="font-[var(--font-accent)] text-xs md:text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Learn From The Best</span>
            <h2 className="font-[var(--font-heading)] text-xl md:text-4xl font-bold text-[var(--color-text)] mt-2">
              Become a <span className="text-gold-gradient italic">Certified Makeup Artist</span>
            </h2>
            <p className="text-[var(--color-text-mid)] text-xs md:text-base mt-2 md:mt-3 max-w-2xl mx-auto">
              Hands-on training for Indian skin tones. Small batches for personal attention. Certificate on completion.
            </p>
          </ScrollReveal>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {/* Self Makeup Pro */}
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-[var(--color-cream-dark)] hover:border-[var(--color-gold-glow)] hover:shadow-xl transition-all duration-300">
                <h3 className="font-[var(--font-heading)] text-base md:text-lg font-bold text-[var(--color-text)]">Self Makeup</h3>
                <p className="text-[var(--color-text-mid)] text-[11px] md:text-sm mt-1.5 leading-relaxed">Learn your face, master everyday & party looks. Perfect for beginners who want to do their own makeup like a pro.</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 bg-[var(--color-gold-soft)] rounded-full text-[9px] font-medium text-[var(--color-gold-dark)]">Self Glam</span>
                  <span className="px-2 py-0.5 bg-[var(--color-gold-soft)] rounded-full text-[9px] font-medium text-[var(--color-gold-dark)]">Certificate</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Bridal Masterclass */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-[var(--color-gold)] shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold)] text-white text-[8px] md:text-[9px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">Most Popular</div>
                <h3 className="font-[var(--font-heading)] text-base md:text-lg font-bold text-[var(--color-text)] mt-2">Bridal Masterclass</h3>
                <p className="text-[var(--color-text-mid)] text-[11px] md:text-sm mt-1.5 leading-relaxed">Full bridal, reception & engagement looks. Product knowledge, humidity-proof base techniques, and complete styling.</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 bg-[var(--color-gold-soft)] rounded-full text-[9px] font-medium text-[var(--color-gold-dark)]">Bridal Looks</span>
                  <span className="px-2 py-0.5 bg-[var(--color-gold-soft)] rounded-full text-[9px] font-medium text-[var(--color-gold-dark)]">Product Guide</span>
                  <span className="px-2 py-0.5 bg-[var(--color-gold-soft)] rounded-full text-[9px] font-medium text-[var(--color-gold-dark)]">Certificate</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Professional Artist Course */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-[var(--color-cream-dark)] hover:border-[var(--color-gold-glow)] hover:shadow-xl transition-all duration-300">
                <h3 className="font-[var(--font-heading)] text-base md:text-lg font-bold text-[var(--color-text)]">Professional Artist Course</h3>
                <p className="text-[var(--color-text-mid)] text-[11px] md:text-sm mt-1.5 leading-relaxed">From beginner to paid artist. Client handling, pricing, hygiene + certificate + professional photoshoot included.</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 bg-[var(--color-gold-soft)] rounded-full text-[9px] font-medium text-[var(--color-gold-dark)]">Business Basics</span>
                  <span className="px-2 py-0.5 bg-[var(--color-gold-soft)] rounded-full text-[9px] font-medium text-[var(--color-gold-dark)]">Photoshoot</span>
                  <span className="px-2 py-0.5 bg-[var(--color-gold-soft)] rounded-full text-[9px] font-medium text-[var(--color-gold-dark)]">Certified Artist</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 md:mt-8">
            <Link
              href="/contact"
              className="btn-shimmer flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:shadow-[0_8px_40px_rgba(200,165,90,0.5)] transition-all duration-300 hover:scale-105"
            >
              Enroll Now &rarr; Get Certified
            </Link>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-text-mid)] hover:text-[var(--color-gold)] transition-colors text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.587-.823-6.327-2.2l-.441-.353-3.198 1.072 1.072-3.198-.353-.441A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" /></svg>
              WhatsApp to Book
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FEATURED BRIDES GALLERY — full-width visual impact ===== */}
      <section className="py-3 md:py-16 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <ScrollReveal className="hidden md:block text-center mb-14">
            <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Featured Brides</span>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-text)] mt-3">
              Real Brides, <span className="text-gold-gradient italic">Real Glow</span>
            </h2>
            <p className="text-[var(--color-text-mid)] mt-4 max-w-xl mx-auto">
              A glimpse of some of our beautiful brides on their most special day. No filter, no editing — just real beauty.
            </p>
          </ScrollReveal>

          {/* Scrollable image strip on mobile, bento grid on desktop */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
            {[
              { src: "/images/portfolio/glamorous-engagement.webp", title: "Glamorous Engagement" },
              { src: "/images/portfolio/marathi-bride.webp", title: "Marathi Dulhan" },
              { src: "/images/portfolio/soft-pink-bride.webp", title: "Soft Pink Bride" },
              { src: "/images/portfolio/glowing-wedding.webp", title: "Pyaar Se Chamakti Dulhan" },
              { src: "/images/portfolio/reception-makeover.webp", title: "Reception Makeover" },
              { src: "/images/portfolio/hd-siders-look.webp", title: "HD Siders Look" },
            ].map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[200px] group relative h-[280px] rounded-xl overflow-hidden">
                <img loading="lazy" decoding="async" src={item.src} alt={item.title} className="w-full h-full object-cover" style={{objectPosition: 'center 30%'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-white text-xs font-semibold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop bento grid */}
          <div className="hidden md:grid grid-cols-4 gap-4">
            <ScrollReveal delay={0} className="col-span-1 row-span-2">
              <div className="group relative h-full min-h-[520px] rounded-2xl overflow-hidden">
                <img loading="lazy" decoding="async" src="/images/portfolio/glamorous-engagement.webp" alt="Glamorous Engagement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{objectPosition: 'center 30%'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-[var(--color-gold)]/80 text-white text-[10px] font-bold tracking-wider uppercase rounded-full">Engagement</span>
                  <h3 className="font-[var(--font-heading)] text-white text-lg font-semibold mt-2">Glamorous Engagement Look</h3>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="group relative h-[250px] rounded-2xl overflow-hidden">
                <img loading="lazy" decoding="async" src="/images/portfolio/marathi-bride.webp" alt="Marathi Bride" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{objectPosition: 'center 30%'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">Marathi Dulhan</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="group relative h-[250px] rounded-2xl overflow-hidden">
                <img loading="lazy" decoding="async" src="/images/portfolio/soft-pink-bride.webp" alt="Soft Pink Bride" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{objectPosition: 'center 30%'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">Soft Pink Bride</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160} className="col-span-1 row-span-2">
              <div className="group relative h-full min-h-[520px] rounded-2xl overflow-hidden">
                <img loading="lazy" decoding="async" src="/images/portfolio/glowing-wedding.webp" alt="Glowing Wedding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{objectPosition: 'center 30%'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-[var(--color-gold)]/80 text-white text-[10px] font-bold tracking-wider uppercase rounded-full">Bridal</span>
                  <h3 className="font-[var(--font-heading)] text-white text-lg font-semibold mt-2">Pyaar Se Chamakti Dulhan</h3>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="group relative h-[250px] rounded-2xl overflow-hidden">
                <img loading="lazy" decoding="async" src="/images/portfolio/reception-makeover.webp" alt="Reception" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{objectPosition: 'center 30%'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">Reception Makeover</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="group relative h-[250px] rounded-2xl overflow-hidden">
                <img loading="lazy" decoding="async" src="/images/portfolio/hd-siders-look.webp" alt="HD Look" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{objectPosition: 'center 30%'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">HD Siders Look</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="hidden md:block text-center mt-10">
            <Link
              href="/portfolio"
              className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:shadow-[0_8px_32px_rgba(200,165,90,0.3)] transition-all duration-300 hover:scale-105"
            >
              View Full Portfolio ({portfolio.length}+ Looks)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FULLWIDTH IMAGE STRIP ===== */}
      <div className="overflow-hidden">
        <div className="flex image-strip-scroll">
          {[
            "/images/portfolio/engagement-bride-1.webp",
            "/images/portfolio/minimal-wedding.webp",
            "/images/portfolio/glamorous-engagement-3.webp",
            "/images/portfolio/wedding-classic.webp",
            "/images/portfolio/engagement-bride-2.webp",
            "/images/portfolio/reception-look.webp",
            "/images/portfolio/glowing-wedding-2.webp",
            "/images/portfolio/glamorous-engagement-2.webp",
            "/images/portfolio/engagement-bride-1.webp",
            "/images/portfolio/minimal-wedding.webp",
            "/images/portfolio/glamorous-engagement-3.webp",
            "/images/portfolio/wedding-classic.webp",
          ].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[150px] h-[190px] md:w-[280px] md:h-[350px]">
              <img loading="lazy" decoding="async" src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* About Preview */}
      <section className="py-3 md:py-16 bg-[var(--color-off-white)]">
        {/* Mobile: compact side-by-side layout */}
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex gap-4 md:hidden items-start">
            <div className="flex-shrink-0 w-[120px]">
              <div className="relative rounded-xl overflow-hidden gold-frame-glow">
                <img loading="lazy" decoding="async"                   src="/images/about-main.webp"
                  alt="Minakshi at work"
                  className="w-full h-[160px] object-cover" style={{objectPosition: 'center 30%'}}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-[var(--font-accent)] text-[10px] tracking-[0.2em] uppercase text-[var(--color-gold)]">About Minakshi</span>
              <h2 className="font-[var(--font-heading)] text-base font-bold text-[var(--color-text)] mt-1 leading-tight">
                Every Bride Becomes a <span className="text-gold-gradient italic">Masterpiece</span>
              </h2>
              <p className="text-[var(--color-text-mid)] text-xs mt-2 leading-relaxed line-clamp-4">
                Minakshi is a professional bridal makeup artist in Mumbai with 8+ years of experience and 500+ happy brides. The best bridal makeup artist Mumbai brides trust for their special day.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Multi-Cultural", "HD Makeup", "No-Lash Natural"].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-[var(--color-gold-soft)] border border-[var(--color-gold-glow)] rounded-full text-[10px] font-medium tracking-wide text-[var(--color-gold-dark)]">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/portfolio"
                className="btn-shimmer inline-flex items-center gap-1.5 mt-3 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-4 py-2 rounded-full font-semibold text-xs tracking-wide"
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Desktop: original 2-column layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden gold-frame-glow">
                  <img loading="lazy" decoding="async"                     src="/images/about-main.webp"
                    alt="Minakshi at work"
                    className="w-full h-[520px] object-cover" style={{objectPosition: 'center 30%'}}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card-dark px-5 py-4 flex items-center gap-4 animate-float">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-gold-dark)] to-[var(--color-gold-light)] flex items-center justify-center text-white font-bold text-xl">{siteConfig.experience}+</div>
                  <div>
                    <div className="font-semibold text-sm text-white">Saal Ka</div>
                    <div className="text-xs text-white/60">Bridal Artistry</div>
                  </div>
                </div>
                <img loading="lazy" decoding="async"                   src="/images/about-detail.webp"
                  alt="Makeup detail"
                  className="absolute -top-6 -left-6 w-36 h-44 object-cover rounded-2xl shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 dot-grid opacity-30" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right">
              <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">About Minakshi</span>
              <h2 className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-text)] mt-3 leading-tight">
                Every Bride Becomes a <span className="text-gold-gradient italic">Masterpiece</span>
              </h2>
              <p className="text-[var(--color-text-mid)] mt-6 leading-relaxed">
                With over 8 years of experience, I&apos;ve had the honour of making 500+ brides feel their most beautiful.
                Based in Mumbai and available globally — I specialize in multi-cultural bridal artistry
                across Marathi, South Indian, Bengali, and Buddhist styles.
              </p>
              <p className="text-[var(--color-text-mid)] mt-4 leading-relaxed">
                My philosophy is simple: &ldquo;No filter ahead.&rdquo; I enhance your natural beauty rather than masking it.
                Every brush stroke is a celebration of who you are — making your special day truly unforgettable.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {["Multi-Cultural Expert", "HD Makeup", "No-Lash Natural", "Globally Available"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[var(--color-gold-soft)] border border-[var(--color-gold-glow)] rounded-full text-xs font-medium tracking-wide text-[var(--color-gold-dark)]">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/portfolio"
                className="btn-shimmer inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:shadow-[0_8px_32px_rgba(200,165,90,0.3)] transition-all duration-300 hover:scale-105"
              >
                <span>View My Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Before/After Transformations — TWO sliders side by side */}
      <section className="py-3 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <ScrollReveal className="hidden md:block text-center mb-14">
            <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Transformation</span>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-text)] mt-3">
              See the <span className="text-gold-gradient italic">Magic Happen</span>
            </h2>
            <p className="text-[var(--color-text-mid)] mt-4 max-w-xl mx-auto">
              Slider drag karke dekho real bridal transformation. No filters. No editing. Sirf pure artistry.
            </p>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <BeforeAfterSlider
                beforeImage="/images/portfolio/before-after-before.webp"
                afterImage="/images/portfolio/before-after-after.webp"
                beforeLabel="Before"
                afterLabel="After Makeup"
                className=""
              />
              <p className="hidden md:block text-center text-sm text-[var(--color-text-mid)] mt-3 font-medium">Bridal Makeover — Drag to see the magic</p>
            </ScrollReveal>
          </div>

          <div className="hidden md:flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-mid)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
              No Filter
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-mid)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
              No Editing
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-mid)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
              Sirf Pure Artistry
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-3 md:py-16 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <ScrollReveal className="hidden md:block text-center mb-16">
            <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Our Services</span>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-text)] mt-3">
              Crafted for Your <span className="text-gold-gradient italic">Special Day</span>
            </h2>
            <p className="text-[var(--color-text-mid)] mt-4 max-w-2xl mx-auto">
              Every bride is unique. Whether traditional or modern glam — I tailor every service to bring your vision to life.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {services.slice(0, 4).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--color-cream-dark)] hover:border-[var(--color-gold-glow)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-36 md:h-60 overflow-hidden">
                    <img loading="lazy" decoding="async"                       src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{objectPosition: 'center 30%'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {service.popular && (
                      <span className="absolute top-3 right-3 bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold)] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="p-3 md:p-5">
                    <h3 className="font-[var(--font-heading)] text-sm md:text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-gold-dark)] transition-colors">{service.title}</h3>
                    <p className="hidden md:block text-sm text-[var(--color-text-mid)] mt-2 leading-relaxed line-clamp-2">{service.description}</p>
                    <div className="hidden md:flex flex-wrap gap-2 mt-3">
                      {service.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] font-medium tracking-wide uppercase text-[var(--color-gold-dark)] bg-[var(--color-gold-soft)] px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] tracking-wide uppercase transition-colors group-hover:gap-2.5">
                      Book Karo
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Second row of services */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-3 md:mt-6">
            {services.slice(4, 8).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--color-cream-dark)] hover:border-[var(--color-gold-glow)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-36 md:h-48 overflow-hidden">
                    <img loading="lazy" decoding="async"                       src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{objectPosition: 'center 30%'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 md:p-5">
                    <h3 className="font-[var(--font-heading)] text-sm md:text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-gold-dark)] transition-colors">{service.title}</h3>
                    <p className="hidden md:block text-sm text-[var(--color-text-mid)] mt-2 leading-relaxed line-clamp-2">{service.description}</p>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] tracking-wide uppercase transition-colors group-hover:gap-2.5">
                      Book Karo
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Booking Banner */}
      <section className="relative h-[240px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 parallax-bg">
          <img loading="lazy" decoding="async"             src="/images/portfolio/cinematic-wedding.webp"
            alt="Bridal beauty"
            className="w-full h-[120%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/90 via-[var(--color-dark)]/70 to-[var(--color-dark)]/90" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-[var(--color-gold)]/20 backdrop-blur-sm border border-[var(--color-gold)]/30 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-3 md:mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">{siteConfig.bookingStatus}</span>
            </div>
            <h2 className="font-[var(--font-heading)] text-2xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Make Your Special Day<br /><span className="text-gold-gradient italic">Unforgettable</span>
            </h2>
            <p className="text-white/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base">
              Limited dates available. Book your trial session today.
            </p>
            <div className="flex flex-row items-center justify-center gap-3 mt-5 md:mt-8">
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-5 py-3 md:px-8 md:py-4 rounded-full font-semibold text-xs md:text-sm tracking-wide hover:shadow-[0_8px_40px_rgba(200,165,90,0.5)] transition-all duration-300 hover:scale-105"
              >
                Check Availability
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 md:px-8 md:py-4 rounded-full font-semibold text-xs md:text-sm tracking-wide hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <ProcessTimeline />

      {/* Reviews Section */}
      <section className="py-3 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <ScrollReveal className="hidden md:block text-center mb-14">
            <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Reviews</span>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-text)] mt-3">
              What Our <span className="text-gold-gradient italic">Brides Say</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="flex items-center gap-1 bg-white border border-[var(--color-cream-dark)] rounded-full px-4 py-2 shadow-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <span className="font-bold text-sm text-[var(--color-text)] ml-1">{siteConfig.rating}</span>
                <span className="text-xs text-[var(--color-text-mid)] ml-1">({siteConfig.reviewCount}+ reviews)</span>
                <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <TestimonialCarousel reviews={reviews} />

        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="hidden md:block text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium text-sm text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors tracking-wide border border-[var(--color-gold-glow)] hover:border-[var(--color-gold)] px-6 py-3 rounded-full hover:bg-[var(--color-gold-soft)] transition-all duration-300"
            >
              Apna Trial Book Karo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WEDDING PLATFORMS TRUST BAR ===== */}
      <section className="py-2 md:py-8 bg-[var(--color-cream)] border-y border-[var(--color-cream-dark)]">
        <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">
          <p className="hidden md:block font-[var(--font-accent)] text-sm tracking-[0.15em] uppercase text-[var(--color-text-light)] mb-8">As Featured On Leading Wedding Platforms</p>
          <div className="flex items-center justify-center gap-3 md:gap-16 flex-wrap opacity-40">
            <span className="font-[var(--font-heading)] text-xs md:text-2xl font-bold text-[var(--color-text)]">WedMeGood</span>
            <span className="font-[var(--font-heading)] text-xs md:text-2xl font-bold text-[var(--color-text)]">ShaadiSaga</span>
            <span className="font-[var(--font-heading)] text-xs md:text-2xl font-bold text-[var(--color-text)]">WeddingBazaar</span>
            <span className="font-[var(--font-heading)] text-xs md:text-2xl font-bold text-[var(--color-text)]">Shaadi.com</span>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-3 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <ScrollReveal className="hidden md:block text-center mb-12">
            <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Follow on Instagram</span>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-text)] mt-3">
              @minakshimakeupandhair
            </h2>
            <p className="text-[var(--color-text-mid)] mt-3">Real work. Real brides. Real transformations.</p>
          </ScrollReveal>

          <ScrollReveal>
            <InstaGrid
              posts={instaPosts}
              username="minakshimakeupandhair"
              instagramUrl={siteConfig.instagram}
            />
          </ScrollReveal>

          <ScrollReveal className="hidden md:block text-center mt-10">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              Follow on Instagram
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-4 md:py-16 bg-[var(--color-dark)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-[var(--font-heading)] text-xl md:text-5xl font-bold text-white leading-tight">
              Ready to Look Your Most <span className="text-gold-gradient italic">Beautiful</span>?
            </h2>
            <p className="text-white/50 mt-3 md:mt-6 text-sm md:text-lg">
              Let&apos;s discuss your vision and create a look that&apos;s uniquely yours.
              Limited dates available — aaj hi book karo!
            </p>
            <div className="flex flex-row items-center justify-center gap-3 mt-6 md:mt-10">
              <Link
                href="/contact"
                className="btn-shimmer bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-5 py-3 md:px-9 md:py-4 rounded-full font-semibold text-xs md:text-base tracking-wide hover:shadow-[0_8px_40px_rgba(200,165,90,0.5)] transition-all duration-300 hover:scale-105"
              >
                Check Availability
              </Link>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 md:px-9 md:py-4 rounded-full font-semibold text-xs md:text-base tracking-wide hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
