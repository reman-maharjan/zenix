export interface Video {
  id: string;
  url: string;
  type: "video" | "image";
  title?: string;
  description?: string;
  thumbnail?: string;
}
