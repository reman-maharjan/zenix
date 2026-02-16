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
                  playsInline
                  muted
                  loop
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                {/* Subtle overlay on hover - consistent with previous UI */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
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
