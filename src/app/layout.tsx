import type { Metadata } from "next";
import { Playfair_Display, Raleway, Italiana } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

// Heading font: Playfair Display — luxurious editorial serif
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Body font: Raleway — clean, modern sans-serif
const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Accent font: Italiana — refined, fashion-forward
const italiana = Italiana({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mgmakeupandhair.in"),
  title: {
    default: "Minakshi Makeup & Hair | Best Bridal Makeup Artist Mumbai",
    template: "%s | Minakshi Makeup & Hair",
  },
  description:
    "Mumbai's #1 Bridal Makeup Artist — 500+ happy brides, 4.9★ Google rating (171+ reviews). HD & Natural bridal makeup, party looks, destination weddings. Book now!",
  keywords: [
    "bridal makeup artist Mumbai",
    "best makeup artist Mumbai",
    "bridal makeup near me",
    "engagement makeup artist Mumbai",
    "wedding makeup artist Mumbai",
    "party makeup artist Mumbai",
    "destination bridal makeup India",
    "makeup classes Mumbai",
    "bridal hair styling Mumbai",
    "HD bridal makeup Mumbai",
    "natural bridal makeup Mumbai",
    "Marathi bridal makeup",
    "South Indian bridal makeup Mumbai",
    "baby shower makeup Mumbai",
    "haldi makeup artist",
    "pre wedding makeup Mumbai",
    "professional makeup artist Mumbai",
    "makeup artist Vasai Virar",
    "bridal makeup artist near me",
    "affordable bridal makeup Mumbai",
  ],
  openGraph: {
    title: "Minakshi Makeup & Hair | Best Bridal Makeup Artist Mumbai",
    description: "500+ happy brides. 4.9★ rated. HD & Natural bridal looks. Available for destination weddings globally. Book your special day!",
    type: "website",
    locale: "en_IN",
    url: "https://mgmakeupandhair.in",
    siteName: "Minakshi Makeup & Hair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minakshi Makeup & Hair | Best Bridal Makeup Artist Mumbai",
    description: "500+ happy brides. 4.9★ rated. Book your special day!",
  },
  alternates: {
    canonical: "https://mgmakeupandhair.in",
  },
  verification: {
    google: "", // Add Google Search Console verification code later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${raleway.variable} ${italiana.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-off-white)] text-[var(--color-text)] antialiased">
        {/* LocalBusiness + MakeupArtist Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "BeautySalon"],
              name: "Minakshi Makeup & Hair",
              alternateName: "MG Makeup and Hair",
              description: "Mumbai's top-rated bridal makeup artist with 8+ years experience, 500+ happy brides, and 4.9★ Google rating. Specializing in HD & Natural bridal makeup, party looks, destination weddings, and certified makeup classes.",
              url: "https://mgmakeupandhair.in",
              telephone: "+919172235347",
              email: "minakshimakeupandhair@gmail.com",
              image: "https://mgmakeupandhair.in/images/hero-bg.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.0760",
                longitude: "72.8777",
              },
              areaServed: [
                { "@type": "City", name: "Mumbai" },
                { "@type": "State", name: "Maharashtra" },
                { "@type": "Country", name: "India" },
              ],
              priceRange: "₹₹₹",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "171",
                bestRating: "5",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Makeup Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Makeup & Hair HD / Natural" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre / Post Wedding Functions" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Party Makeup & Hair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baby Shower / Birthday Makeup & Hair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Makeup Classes / Workshops" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Destination Bridal Makeup" } },
                ],
              },
              sameAs: [
                "https://www.instagram.com/minakshimakeupandhair",
                "https://youtube.com/@minakshimakeupandhair",
              ],
            }),
          }}
        />
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
        <script dangerouslySetInnerHTML={{__html: `
          document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
              if (img.complete) img.classList.add('loaded');
              else img.addEventListener('load', function() { this.classList.add('loaded'); });
            });
            new MutationObserver(function(mutations) {
              mutations.forEach(function(m) {
                m.addedNodes.forEach(function(n) {
                  if (n.querySelectorAll) n.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
                    if (img.complete) img.classList.add('loaded');
                    else img.addEventListener('load', function() { this.classList.add('loaded'); });
                  });
                });
              });
            }).observe(document.body, { childList: true, subtree: true });
          });
        `}} />
      </body>
    </html>
  );
}
