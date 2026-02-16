import React from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

type VideoProject = {
  id: string;
  title: string;
  description?: string;
  src: string;
  slug: string;
};

type DigitalItem = {
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
  const absDir = path.join(process.cwd(), "public", subdir);

  if (!fs.existsSync(absDir)) {
    return [];
  }

  const entries = fs
    .readdirSync(absDir)
    .filter((file) =>
      allowedExtensions.includes(path.extname(file).toLowerCase())
    );

  return entries.map((file, index) => ({
    id: `${subdir}-${index + 1}`,
    title: filenameToTitle(file),
    src: `/${subdir}/${file}`,
    slug: path.basename(file, path.extname(file)),
  }));
}

// Dynamically use all videos in `public/portfoliovideos`
const dynamicVideoItems = getMediaItems("portfoliovideos", [
  ".mp4",
  ".mov",
  ".webm",
  ".m4v",
]);

const VIDEO_PROJECTS: VideoProject[] =
  dynamicVideoItems.length > 0
    ? dynamicVideoItems
    : [
        {
          id: "video-1",
          title: "Sample Video 01",
          src: "/portfoliovideos/video-1.mp4",
          slug: "video-1",
        },
        {
          id: "video-2",
          title: "Sample Video 02",
          src: "/portfoliovideos/video-2.mp4",
          slug: "video-2",
        },
      ];

// Dynamically use all images in `public/portfolio`
const dynamicDigitalItems = getMediaItems("portfolio", [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
]);

const DIGITAL_MARKETING_ITEMS: DigitalItem[] =
  dynamicDigitalItems.length > 0
    ? dynamicDigitalItems
    : [
        {
          id: "digital-1",
          title: "Sample Campaign 01",
          src: "/portfolio/digital-1.jpg",
          slug: "digital-1",
        },
        {
          id: "digital-2",
          title: "Sample Campaign 02",
          src: "/portfolio/digital-2.jpg",
          slug: "digital-2",
        },
      ];

type SectionProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
};

const SectionShell: React.FC<SectionProps> = ({
  id,
  title,
  eyebrow,
  description,
  children,
}) => (
  <section id={id} className="w-full bg-background text-foreground">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8 text-center">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            {description}
          </p>
        )}
      </header>
      {children}
    </div>
  </section>
);

export const PortfolioHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-background text-foreground border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            Portfolio
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            Selected work from Zenix Digital Productions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Explore campaigns, video stories, and web experiences crafted for
            ambitious brands.
          </p>
        </div>
        <div className="mt-6 sm:mt-0 sm:w-72">
          <div className="rounded-2xl bg-card border border-border shadow-sm px-5 py-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">
              A focused look at our impact.
            </p>
            <p>
              Each project is tailored to the brand&apos;s voice, whether it&apos;s a
              fast-paced social reel or a full digital campaign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DigitalMarketingSection: React.FC = () => {
  return (
    <SectionShell
      id="digital-marketing"
      eyebrow="Portfolio"
      title="Digital Marketing"
      description={undefined}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {DIGITAL_MARKETING_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.slug}`}
            className="group flex flex-col rounded-xl bg-card border border-border shadow-sm overflow-hidden hover:border-primary/60 transition-colors"
          >
            <article className="flex flex-col h-full">
              <div className="relative aspect-square bg-black/5">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 240px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-3 py-3 sm:px-4 sm:py-4 flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
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
        <header className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
            Video Projects
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_PROJECTS.map((video) => (
            <Link
              key={video.id}
              href={`/portfolio/${video.slug}`}
              className="group flex flex-col rounded-xl bg-card border border-border shadow-sm overflow-hidden hover:border-primary/60 transition-colors"
            >
              <article className="flex flex-col h-full">
                <div className="relative aspect-4/5 bg-black">
                  <video
                    className="h-full w-full object-cover"
                    src={video.src}
                    controls
                    playsInline
                  />

                  {/* Subtle overlay on hover to echo the reference UI */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="px-3 py-3 sm:px-4 sm:py-4 flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WebProjectsSection: React.FC = () => {
  const items = [
    "Landing pages that convert",
    "Brand-first marketing sites",
    "Product presentation pages",
    "Micro-sites for campaigns",
  ];

  return (
    <SectionShell
      id="web-projects"
      eyebrow="Portfolio"
      title="Web Projects"
      description="Modern, responsive web experiences that keep the brand front and center."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-card border border-border px-4 py-5 text-sm text-foreground shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col">
      <PortfolioHeroSection />
      <SectionShell
        eyebrow="Portfolio"
        title="Explore our work"
        description="Choose a category to dive into detailed examples of our projects."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/portfolio/digital-marketing"
            className="group flex flex-col rounded-xl bg-card border border-border shadow-sm px-4 py-5 hover:border-primary/60 transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary">
              Digital Marketing
            </h3>
            <p className="text-sm text-muted-foreground">
              Campaigns, creatives, and performance-focused social content.
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

