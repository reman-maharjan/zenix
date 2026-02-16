import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import type { Video } from "@/types/videos";

function filenameToTitle(filename: string): string {
  const base = filename.replace(/\.[^/.]+$/, "");
  const withSpaces = base.replace(/[-_]+/g, " ");

  return withSpaces.replace(/\b\w/g, (char) => char.toUpperCase());
}

function getFilesRecursive(
  rootDir: string,
  allowedExtensions: string[]
): { relativePath: string; filename: string }[] {
  const results: { relativePath: string; filename: string }[] = [];

  if (!fs.existsSync(rootDir)) {
    return results;
  }

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
          results.push({
            relativePath,
            filename: entry.name,
          });
        }
      }
    }
  };

  walk(rootDir, "");
  return results;
}

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");
  const videosDir = path.join(publicDir, "portfoliovideos");
  const imagesDir = path.join(publicDir, "portfolio");
  const webDir = path.join(publicDir, "web");

  // Read all videos and images recursively so nested folders work,
  // similar to how the portfolio grid reads from /public.
  const videoFiles = getFilesRecursive(videosDir, [
    ".mp4",
    ".mov",
    ".webm",
    ".m4v",
  ]);

  const imageFiles = getFilesRecursive(imagesDir, [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
  ]);

  const webFiles = getFilesRecursive(webDir, [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
  ]);

  // Map images by slug (filename without extension) for thumbnails
  const imageMap = new Map<string, string>();
  for (const img of imageFiles) {
    const slug = path.basename(img.filename, path.extname(img.filename));
    imageMap.set(slug, `/portfolio/${img.relativePath.replace(/\\/g, "/")}`);
  }

  const videos: Video[] = videoFiles.map((file, index) => {
    const slug = path.basename(file.filename, path.extname(file.filename));

    return {
      id: slug || `video-${index + 1}`,
      url: `/portfoliovideos/${file.relativePath.replace(/\\/g, "/")}`,
      type: "video",
      title: filenameToTitle(file.filename),
      thumbnail: imageMap.get(slug),
    };
  });

  // Add web projects as image-based items
  const webProjects: Video[] = webFiles.map((file, index) => {
    const slug = path.basename(file.filename, path.extname(file.filename));

    return {
      id: `web-${slug || index + 1}`,
      url: `/web/${file.relativePath.replace(/\\/g, "/")}`,
      type: "image",
      title: filenameToTitle(file.filename),
      thumbnail: `/web/${file.relativePath.replace(/\\/g, "/")}`,
    };
  });

  // Combine videos and web projects
  const allProjects = [...videos, ...webProjects];

  return NextResponse.json(allProjects);
}

