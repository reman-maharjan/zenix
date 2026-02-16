import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  FileVideo,
} from "lucide-react";
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
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(e => console.error("Error playing video:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="shrink-0 group">
      <div className=" ">
        <div className="relative overflow-hidden rounded-2xl bg-black/90 w-72 h-120">
           <div className="relative w-full h-full">
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
                 {/* Overlay Content */}
                 <div className="absolute top-3 left-3 z-10 pointer-events-none">

                </div>

                <button
                  onClick={onPlay}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-md p-6 transition-all duration-300 hover:scale-110 hover:bg-white shadow-2xl"
                  aria-label="Play video"
                >
                  <Play
                    className="w-12 h-12 text-red-600 drop-shadow-lg"
                    fill="currentColor"
                  />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
                  {video.title && (
                    <h3 className="text-base font-bold text-white drop-shadow-lg mb-1 line-clamp-2">
                      {video.title}
                    </h3>
                  )}
                  {video.description && (
                    <p className="text-xs text-gray-100 drop-shadow-md line-clamp-2">
                      {video.description}
                    </p>
                  )}
                </div>
               </>
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 p-3 transition-all hover:scale-110 hover:bg-white shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 cursor-pointer" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 p-3 transition-all hover:scale-110 hover:bg-white shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 cursor-pointer" />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 pb-4"
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
