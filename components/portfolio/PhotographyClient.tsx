"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageLightbox } from "./ImageLightbox";

type PhotographyItem = {
  id: string;
  title: string;
  description?: string;
  src: string;
  slug: string;
};

type PhotographyClientProps = {
  items: PhotographyItem[];
};

export const PhotographyClient: React.FC<PhotographyClientProps> = ({
  items,
}) => {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxImage({ src: item.src, alt: item.title })}
            className="group flex flex-col rounded-xl bg-card border border-border shadow-sm overflow-hidden hover:border-primary/60 transition-colors cursor-pointer"
          >
            <article className="flex flex-col h-full">
              <div className="relative aspect-square bg-black/5">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 240px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </article>
          </div>
        ))}
      </div>

      <ImageLightbox
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt || ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};
