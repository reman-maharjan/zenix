import path from "path";
import { NextResponse } from "next/server";
import { getFilesRecursive, filenameToTitle } from "@/lib/fs-utils";
import type { Video } from "@/types/videos";

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");
  const videosDir = path.join(publicDir, "portfoliovideos");
  const imagesDir = path.join(publicDir, "portfolio");

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

  return NextResponse.json(videos);
}

