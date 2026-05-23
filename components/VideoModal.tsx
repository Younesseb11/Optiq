"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import PlatformVideo from "./PlatformVideo";

interface VideoModalProps {
  videoId: string;
  videoName: string;
  aspectRatio: "9/16" | "16/9";
  onClose: () => void;
}

export default function VideoModal({
  videoId,
  videoName,
  aspectRatio,
  onClose,
}: VideoModalProps) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
      onClick={handleClose}
    >
      {/* Centered modal container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full bg-black border border-dark-300 shadow-2xl flex items-center justify-center overflow-hidden"
        style={{
          maxWidth: aspectRatio === "9/16" ? "400px" : "900px",
          aspectRatio: aspectRatio === "9/16" ? "9/16" : "16/9",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full">
          <PlatformVideo src={videoId} aspectRatio={aspectRatio} />
        </div>

        {/* Overlay showing video name */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded-sm z-30 pointer-events-none">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            {videoName}
          </span>
        </div>
      </motion.div>

      {/* Close button: top-right X icon (Lucide X) */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-[60] p-3 rounded-full bg-background/50 border border-white/10 hover:bg-accent hover:text-background text-foreground transition-all duration-300 shadow-lg"
        title="Close Video"
      >
        <X size={20} />
      </button>
    </motion.div>
  );
}
