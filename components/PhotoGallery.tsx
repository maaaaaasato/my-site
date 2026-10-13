
"use client";

import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
};

type PhotoGalleryProps = {
  photos: Photo[];
};

function PhotoItem({ photo }: { photo: Photo }) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [rowSpan, setRowSpan] = useState(1);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const updateLayout = () => {
      const height = image.getBoundingClientRect().height;
      if (height > 0) {
        setRowSpan(Math.ceil((height + 32) / 40));
      }
    };

    const observer = new ResizeObserver(updateLayout);
    observer.observe(image);

    if (image.complete) updateLayout();

    return () => observer.disconnect();
  }, [photo.src]);

  return (
    <figure
      className="min-w-0"
      style={{ gridRowEnd: `span ${rowSpan}` }}
    >
      <img
        ref={imageRef}
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        onLoad={() => {
          const image = imageRef.current;
          if (image) {
            const height = image.getBoundingClientRect().height;
            if (height > 0) {
              setRowSpan(Math.ceil((height + 32) / 40));
            }
          }
        }}
        className="block h-auto w-full max-w-full"
      />
    </figure>
  );
}

export default function PhotoGallery({
  photos,
}: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-1 grid-flow-row-dense auto-rows-[8px] gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
      {photos.map((photo) => (
        <PhotoItem key={photo.src} photo={photo} />
      ))}
    </div>
  );
}
