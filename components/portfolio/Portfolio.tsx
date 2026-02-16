import React from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { PhotographyClient } from "./PhotographyClient";
import { WebProjectsClient } from "./WebProjectsClient";
import { VideoProjectsClient } from "./VideoProjectsClient";

type VideoProject = {
  id: string;
  title: string;
  description?: string;
  src: string;
  slug: string;
};

type PhotographyItem = {
  id: string;
  title: string;
  description?: string;
  src: string;
  slug: string;
};

// Utility: turn "my-video-file.mp4" into "My Video File"
function filenameToTitle(filename: string): string {
  const base = filename.replace(/\.[^/.]+$/, "");
  const withSpaces = base.replace(/[-_]+/g, " ");

  return withSpaces.replace(/\b\w/g, (char) => char.toUpperCase());
}

function getMediaItems(
  subdir: string,
  allowedExtensions: string[]
): { id: string; title: string; src: string; slug: string }[] {
  const absRoot = path.join(process.cwd(), "public", subdir);

  if (!fs.existsSync(absRoot)) {
    return [];
  }

  const results: { relativePath: string; filename: string }[] = [];

  const walk = (currentDir: string, prefix: string) => {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(currentDir, entry.name);
      const relativePath = prefix ? path.join(prefix, entry.name) : entry.name;

      if (entry.isDirectory()) {
        walk(entryPath, relativePath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (allowedExtensions.includes(ext)) {
          results.push({ relativePath, filename: entry.name });
        }
      }
    }
  };

  walk(absRoot, "");

  return results.map((file, index) => ({
    id: `${subdir}-${index + 1}`,
    title: filenameToTitle(file.filename),
    src: `/${subdir}/${file.relativePath.replace(/\\/g, "/")}`,
    slug: path.basename(file.filename, path.extname(file.filename)),
  }));
}

// Dynamically use all videos in `public/portfoliovideos`
const dynamicVideoItems = getMediaItems("portfoliovideos", [
  ".mp4",
  ".mov",
  ".webm",
  ".m4v",
]);

const VIDEO_PROJECTS: VideoProject[] = dynamicVideoItems;

// Dynamically use all images in `public/portfolio`
const dynamicDigitalItems = getMediaItems("portfolio", [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
]);

const PHOTOGRAPHY_ITEMS: PhotographyItem[] = dynamicDigitalItems;

// Dynamically use all images in `public/web`
const dynamicWebItems = getMediaItems("web", [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
]);

const WEB_PROJECTS_ITEMS: PhotographyItem[] = dynamicWebItems;

type SectionProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
};

const SectionShell: React.FC<SectionProps> = ({
  id,
  children,
}) => (
  <section id={id} className="w-full bg-background text-foreground">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {children}
    </div>
  </section>
);

type PortfolioHeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

export const PortfolioHeroSection: React.FC<PortfolioHeroProps> = ({
  title,
  backgroundImage,
}) => {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          {/* Eyebrow text */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-white/80 uppercase mb-4 animate-fade-in-up">
            Zenix Digital Productions
          </p>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up animation-delay-100">
            {title}
          </h1>
          
          
        </div>
      </div>

    </section>
  );
};

export const PhotographySection: React.FC = () => {
  return (
    <SectionShell
      id="photography"
      eyebrow="Portfolio"
      title="Photography"
      description={undefined}
    >
      <PhotographyClient items={PHOTOGRAPHY_ITEMS} />
    </SectionShell>
  );
};

export const VideoProjectsSection: React.FC = () => {
  return (
    <section
      id="video-projects"
      className="w-full bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <VideoProjectsClient items={VIDEO_PROJECTS} />
      </div>
    </section>
  );
};

export const WebProjectsSection: React.FC = () => {
  return (
    <SectionShell
      id="web-projects"
      eyebrow="Portfolio"
      title="Web Projects"
      description="Modern, responsive web experiences that keep the brand front and center."
    >
      <WebProjectsClient items={WEB_PROJECTS_ITEMS} />
    </SectionShell>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col">
      <PortfolioHeroSection
        title="Portfolio"
        description="Explore campaigns, video stories, and web experiences crafted for ambitious brands"
        backgroundImage="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww"
      />
      <SectionShell
        eyebrow="Portfolio"
        title="Explore our work"
        description="Choose a category to dive into detailed examples of our projects."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/portfolio/photography"
            className="group flex flex-col rounded-xl bg-card border border-border shadow-sm px-4 py-5 hover:border-primary/60 transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary">
              Photography
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional photography, visual storytelling, and captured moments.
            </p>
          </Link>
          <Link
            href="/portfolio/video-projects"
            className="group flex flex-col rounded-xl bg-card border border-border shadow-sm px-4 py-5 hover:border-primary/60 transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary">
              Video Projects
            </h3>
            <p className="text-sm text-muted-foreground">
              Story-driven video pieces, reels, and motion content.
            </p>
          </Link>
          <Link
            href="/portfolio/web-projects"
            className="group flex flex-col rounded-xl bg-card border border-border shadow-sm px-4 py-5 hover:border-primary/60 transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary">
              Web Projects
            </h3>
            <p className="text-sm text-muted-foreground">
              Modern, responsive web experiences built for your brand.
            </p>
          </Link>
        </div>
      </SectionShell>
    </div>
  );
};

export default Portfolio;

