"use client";

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

interface PlatformVideoProps {
  src: string;
  aspectRatio?: "9/16" | "16/9";
}

export default function PlatformVideo({ src, aspectRatio = "16/9" }: PlatformVideoProps) {
  const isVertical = aspectRatio === "9/16";
  const playerWidth = isVertical ? 1080 : 1920;
  const playerHeight = isVertical ? 1920 : 1080;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-sm bg-black">
      <CldVideoPlayer
        width={playerWidth}
        height={playerHeight}
        src={src}
        logo={false}
        autoPlay={true}
        colors={{
          base: '#000000',
          accent: '#ffffff',
          text: '#ffffff'
        }}
      />
    </div>
  );
}
