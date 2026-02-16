import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Video as VideoType } from "@/types/videos";

interface VideosCarouselProps {
  videos: VideoType[];
}

// Video Card Component
const VideoCard: React.FC<{
  video: VideoType;
  isPlaying: boolean;
  onPlay: () => void;
}> = ({ video, isPlaying, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (video.type === "video" && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(e => console.error("Error playing video:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, video.type]);

  return (
    <div className="shrink-0 group">
      <div className=" ">
        <div className="relative overflow-hidden rounded-2xl bg-black/90 w-64 sm:w-72 h-96 sm:h-120">
          <div className="relative w-full h-full">
            {video.type === "video" ? (
              <>
                <video 
                  ref={videoRef}
                  src={video.url} 
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  playsInline
                  muted={false}
                  loop
                />
                {!isPlaying && (
                  <>
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                    <button
                      onClick={onPlay}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full bg-black backdrop-blur-md p-6 transition-all duration-300 hover:scale-110 hover:bg-white shadow-2xl cursor-pointer"
                      aria-label="Play video"
                    >
                      <Play
                        className="w-12 h-12 text-[#c7aa87] drop-shadow-lg"
                        fill="currentColor"
                      />
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={video.url}
                  alt={video.title || "Web Project"}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-lg leading-tight drop-shadow-sm">
                    {video.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Carousel Component
export const VideosCarousel: React.FC<VideosCarouselProps> = ({ videos }) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? -288 : 288;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative py-8">
      {videos.length > 1 && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/95 p-2 sm:p-3 transition-all hover:scale-110 cursor-pointer hover:bg-white shadow-lg flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 cursor-pointer z-0" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/95 p-2 sm:p-3 transition-all hover:scale-110 cursor-pointer hover:bg-white shadow-lg flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 cursor-pointer z-0" />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-6 sm:px-4 pb-6 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videos.map((video) => {
          const isPlaying = playingVideo === video.id;

          return (
            <VideoCard
              key={video.id}
              video={video}
              isPlaying={isPlaying}
              onPlay={() => setPlayingVideo(video.id)}
            />
          );
        })}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
