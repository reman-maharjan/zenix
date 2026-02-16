"use client";

import React, { useEffect } from "react";

type VideoLightboxProps = {
  src: string;
  isOpen: boolean;
  onClose: () => void;
};

export const VideoLightbox: React.FC<VideoLightboxProps> = ({
  src,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
        aria-label="Close lightbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={src}
          className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};
