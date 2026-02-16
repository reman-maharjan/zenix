"use client";

import React, { useState } from "react";
import { VideoLightbox } from "./VideoLightbox";

type VideoProject = {
  id: string;
  title: string;
  description?: string;
  src: string;
  slug: string;
};

type VideoProjectsClientProps = {
  items: VideoProject[];
};

export const VideoProjectsClient: React.FC<VideoProjectsClientProps> = ({
  items,
}) => {
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setActiveVideoSrc(src);
  };

  const closeLightbox = () => {
    setActiveVideoSrc(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((video) => (
          <div
            key={video.id}
            onClick={() => openLightbox(video.src)}
            className="group flex flex-col rounded-xl bg-card border border-border shadow-sm overflow-hidden hover:border-primary/60 transition-colors cursor-pointer"
          >
            <article className="flex flex-col h-full">
              <div className="relative aspect-4/5 bg-black">
                <video
                  className="h-full w-full object-cover"
                  src={video.src}
                  controls
                  playsInline
                />
                {/* 
                  Overlay to capture clicks and provide the hover effect. 
                  Removed 'pointer-events-none' so the entire area triggers the lightbox.
                */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </article>
          </div>
        ))}
      </div>

      <VideoLightbox
        src={activeVideoSrc || ""}
        isOpen={!!activeVideoSrc}
        onClose={closeLightbox}
      />
    </>
  );
};
