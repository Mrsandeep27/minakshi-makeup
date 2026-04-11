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
  title: "Minakshi Makeup & Hair | Professional Bridal Makeup Artist in Mumbai",
  description:
    "Professional Bridal Makeup Artist in Mumbai with 8+ years of experience. Specializing in bridal, engagement, reception makeup across all cultures. 4.9★ rated. Book your trial session today!",
  keywords: [
    "bridal makeup artist Mumbai",
    "makeup artist Mumbai",
    "engagement makeup artist Mumbai",
    "best bridal makeup near me",
    "professional makeup artist Mumbai",
    "South Indian bridal makeup Mumbai",
    "Marathi bridal makeup",
    "Buddhist wedding makeup artist",
    "wedding makeup Mumbai",
    "bridal hair styling Mumbai",
  ],
  openGraph: {
    title: "Minakshi Makeup & Hair | Professional Bridal Makeup Artist",
    description: "8+ years of creating stunning bridal looks. Available globally. Book your session today!",
    type: "website",
    locale: "en_IN",
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
