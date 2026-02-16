import path from "path";
import { NextResponse } from "next/server";
import { getFilesRecursive, filenameToTitle } from "@/lib/fs-utils";

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");
  const brandsDir = path.join(publicDir, "brands");

  const brandFiles = getFilesRecursive(brandsDir, [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".svg",
  ]);

  const brands = brandFiles.map((file) => ({
    name: filenameToTitle(file.filename),
    image: `/brands/${file.relativePath.replace(/\\/g, "/")}`,
  }));

  return NextResponse.json(brands);
}
