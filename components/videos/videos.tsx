"use client";

import { useVideos } from "@/hooks/use-videos";
import { VideosCarousel } from "./videos-carousel";

export default function Videos() {
  const { data: videos, isLoading, error } = useVideos();

  if (isLoading) {
    return <div className="py-20 text-center">Loading videos...</div>;
  }

  if (error || !videos || videos.length === 0) {
    return null; // Don't show section if no videos
  }

  return (
    <div className="py-4 ">
      <div className="max-w-7xl mx-auto px-4">
        <VideosCarousel videos={videos} />
      </div>
    </div>
  );
}
