'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Maximize2 } from 'lucide-react';

type Video = {
  title: string;
  path: string;
};

type VideoShowcaseProps = {
  videos: Video[];
  clientName: string;
};

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ videos, clientName }) => {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f3]">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8b7457]">
              Video
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              Motion pieces for {clientName}.
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              A minimal selection of short films and product loops, crafted to feel calm, 
              considered and on-brand across web and social.
            </p>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <VideoPlayer key={index} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoPlayer: React.FC<{ video: Video; index: number }> = ({ video, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-black border border-gray-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        loop
        playsInline
        onEnded={() => setIsPlaying(false)}
      >
        <source src={video.path} type="video/mp4" />
        <source src={video.path} type="video/quicktime" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay + Controls */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${
          isHovered || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Title */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm md:text-base font-medium text-white">
              {video.title}
            </h3>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <button
            onClick={togglePlay}
            className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-gray-900" />
            ) : (
              <Play className="h-5 w-5 text-gray-900 ml-0.5" />
            )}
          </button>

          <div className="flex items-center gap-3">
            {!isPlaying && (
              <span className="hidden md:inline text-xs text-white/80">
                Click play to watch
              </span>
            )}
            <button
              onClick={handleFullscreen}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize2 className="h-4 w-4 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoShowcase;
