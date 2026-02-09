import type { Metadata } from "next";
import React from "react";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioDetails from "@/components/portfolio/PortfolioDetails";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected client work from Zenix Digital Productions across jewellery, lifestyle, technology and social impact brands in Nepal and beyond.",
  openGraph: {
    title: "Portfolio – Zenix Digital Productions",
    description:
      "Explore case studies and campaign work from Zenix Digital Productions, including photography, video and social content for leading brands.",
    url: "/portfolio",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioDetails />
      <PortfolioCTA />
    </div>
  );
}
