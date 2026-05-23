"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoCardProps {
  name: string;
  category: string;
  videoId: string;
  thumbnail: string;
  aspectRatio: "9/16" | "16/9";
  onPlay: (id: string, name: string) => void;
}

export default function VideoCard({
  name,
  category,
  videoId,
  thumbnail,
  aspectRatio,
  onPlay,
}: VideoCardProps) {
  return (
    <motion.div
      onClick={() => onPlay(videoId, name)}
      className="group relative cursor-pointer flex flex-col w-full bg-dark-100 border border-dark-200/60 overflow-hidden select-none"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ aspectRatio: aspectRatio }}
    >
      {/* Wrapper relative container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Next.js Image component */}
        <Image
          src={thumbnail}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark gradient overlay on top of the thumbnail so text remains readable */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Centered play button icon on top (z-20) */}
        <div className="absolute z-20 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm border border-accent/20 flex items-center justify-center text-accent shadow-2xl transition-all duration-300 group-hover:bg-accent group-hover:text-background group-hover:scale-110 group-hover:border-accent"
            whileHover={{ scale: 1.15 }}
          >
            <Play size={22} className="ml-1 fill-current" />
          </motion.div>
        </div>

        {/* Category tag overlaid at top right (z-20) */}
        <span className="absolute top-4 right-4 z-20 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-bold tracking-widest uppercase rounded-sm text-accent">
          {category}
        </span>

        {/* Project name overlaid at bottom left (z-20) */}
        <div className="absolute bottom-4 left-4 z-20 text-left pr-4">
          <h3 className="font-display text-2xl md:text-3xl tracking-wider text-foreground group-hover:text-accent transition-colors duration-300 uppercase leading-none">
            {name}
          </h3>
        </div>
      </div>

      {/* Subtle amber glow border on hover */}
      <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30" />
    </motion.div>
  );
}
