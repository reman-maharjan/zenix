import fs from "fs";
import path from "path";

export function filenameToTitle(filename: string): string {
  const base = filename.replace(/\.[^/.]+$/, "");
  const withSpaces = base.replace(/[-_]+/g, " ");

  return withSpaces.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getFilesRecursive(
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
