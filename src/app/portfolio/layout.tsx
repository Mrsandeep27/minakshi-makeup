import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Bridal Makeup Looks & Transformations",
  description:
    "Browse 37+ real bridal makeup transformations by Minakshi. No filter, no editing — Bridal, Party, Engagement, Haldi, Pre-Wedding looks. 4.9★ rated Mumbai makeup artist.",
  alternates: {
    canonical: "https://mgmakeupandhair.in/portfolio",
  },
  openGraph: {
    title: "Portfolio — Minakshi Makeup & Hair",
    description: "37+ real bridal transformations. No filter, no editing — pure artistry.",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
