import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, social media, photography, video and web — explore the full set of digital marketing and content services offered by Zenix Digital Productions in Lalitpur.",
  openGraph: {
    title: "Services – Zenix Digital Productions",
    description:
      "Discover how Zenix Digital Productions helps brands with strategy, content production and performance marketing across social, video and web.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesGrid />
    </div>
  );
}
