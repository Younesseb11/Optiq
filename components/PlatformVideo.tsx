"use client";

import dynamic from 'next/dynamic';
import 'next-cloudinary/dist/cld-video-player.css';

// Dynamically import CldVideoPlayer with SSR disabled to prevent
// hydration mismatches and client-side errors in production builds.
const CldVideoPlayer = dynamic(
  () => import('next-cloudinary').then((mod) => mod.CldVideoPlayer),
  { ssr: false }
);

interface PlatformVideoProps {
  src: string;
  aspectRatio?: "9/16" | "16/9";
}

export default function PlatformVideo({ src, aspectRatio = "16/9" }: PlatformVideoProps) {
  const isVertical = aspectRatio === "9/16";
  const playerWidth = isVertical ? 1080 : 1920;
  const playerHeight = isVertical ? 1920 : 1080;

  if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black text-white/50 text-sm">
        Video unavailable
      </div>
    );
  }

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
