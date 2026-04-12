import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book Now — Bridal Makeup Artist Mumbai",
  description:
    "Book Minakshi for bridal, party, or destination makeup. WhatsApp +91 91722 35347. Mumbai's top-rated makeup artist — 4.9★, 500+ happy brides. Limited dates available!",
  alternates: {
    canonical: "https://mgmakeupandhair.in/contact",
  },
  openGraph: {
    title: "Book Now — Minakshi Makeup & Hair",
    description: "Book Mumbai's top bridal makeup artist. WhatsApp +91 91722 35347.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
