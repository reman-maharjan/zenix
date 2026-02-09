import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import {
  getPortfolioBySlug,
  getRelatedProjects,
  portfolioData,
} from "@/lib/portfolioData";
import CompanyOverview from "@/components/portfolio/portfolio-details/CompanyOverview";
import VideoShowcase from "@/components/portfolio/portfolio-details/VideoShowcase";
import ProjectDetails from "@/components/portfolio/portfolio-details/ProjectDetails";
import TechnicalSpecs from "@/components/portfolio/portfolio-details/TechnicalSpecs";

type PortfolioDetailPageProps = {
  // In Next.js 16 app router, `params` is passed as a Promise in server components
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${portfolio.title} – ${portfolio.client} | Portfolio`;
  const description = portfolio.tagline || portfolio.description;
  const url = `/portfolio/${portfolio.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: portfolio.image
        ? [
            {
              url: portfolio.image,
              alt: portfolio.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: portfolio.image ? [portfolio.image] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  // If portfolio not found, show 404
  if (!portfolio) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Company Overview Hero */}
      <CompanyOverview portfolio={portfolio} />

      {/* Project Statistics */}

      {/* Project Details (Challenge, Solution, Approach) */}
      <ProjectDetails portfolio={portfolio} />

      {/* Video Showcase */}
      <VideoShowcase
        videos={portfolio.videos}
        clientName={portfolio.client}
      />

      {/* Technical Specs (Services & Deliverables) */}
      <TechnicalSpecs
        services={portfolio.services}
        deliverables={portfolio.deliverables}
      />

      {/* Related Projects */}
    </div>
  );
}
