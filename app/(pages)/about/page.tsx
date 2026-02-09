import type { Metadata } from "next";
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Zenix Digital Productions — a small, senior studio in Jwagal, Lalitpur focused on strategy, content and performance marketing for modern brands.",
  openGraph: {
    title: "About Zenix Digital Productions",
    description:
      "Learn about Zenix Digital Productions, our story, values and the team crafting strategy, social content, photography and video for brands in Nepal and beyond.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
}
