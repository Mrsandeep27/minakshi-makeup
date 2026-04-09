import Link from "next/link";
import { services, siteConfig } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Services | Minakshi Makeup & Hair",
  description: "Bridal, Engagement, Reception, South Indian, Bengali, Baby Shower makeup services. Hair Styling & Cinematic Wedding Packages. Book your trial session.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-6 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="font-[var(--font-accent)] text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]">Humari Services</span>
          <h1 className="font-[var(--font-heading)] text-2xl md:text-5xl font-bold text-[var(--color-text)] mt-3">
            Sirf Aapke Liye <span className="text-gold-gradient italic">Bani Services</span>
          </h1>
          <p className="text-[var(--color-text-mid)] mt-4 max-w-2xl mx-auto">
            Har dulhan unique hai, aur uska look bhi hona chahiye. Traditional Marathi aur South Indian styles
            se lekar modern soft glam tak — 8 saal ka experience lekar aapka vision zinda karti hoon.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-cream-dark)] hover:border-[var(--color-gold-glow)] hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
                  <div className="relative w-full md:w-72 h-56 md:h-auto shrink-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {service.popular && (
                      <span className="absolute top-3 left-3 bg-[var(--color-gold)] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h2 className="font-[var(--font-heading)] text-xl font-semibold text-[var(--color-text)]">
                      {service.title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-mid)] mt-3 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-medium tracking-wide uppercase text-[var(--color-gold-dark)] bg-[var(--color-gold-soft)] px-3 py-1 rounded-full border border-[var(--color-gold-glow)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors"
                    >
                      Ye Service Book Karo
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-10bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[var(--color-text)]">
              <span className="text-gold-gradient italic">Custom Package</span> Chahiye?
            </h2>
            <p className="text-[var(--color-text-mid)] mt-4">
              Destination wedding plan kar rahe ho? Poori bridal party ke liye makeup chahiye?
              Main aapki specific needs aur budget ke hisaab se custom packages banati hoon.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="btn-shimmer bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:shadow-[0_8px_32px_rgba(200,165,90,0.3)] transition-shadow"
              >
                Apni Requirements Bataao
              </Link>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Or WhatsApp directly
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
