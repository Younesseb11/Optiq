"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center overflow-hidden grain-bg mesh-gradient px-6 relative">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

      {/* Floating Flare */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      <div className="relative z-10 max-w-md text-center flex flex-col items-center">
        {/* Animated 404 Title */}
        <motion.h1
          className="font-display text-[15vw] md:text-[140px] leading-none uppercase tracking-wider text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          404
        </motion.h1>

        {/* Text Details */}
        <motion.h2
          className="font-display text-2xl md:text-3xl tracking-widest text-accent uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Lost in the Edit
        </motion.h2>

        <motion.p
          className="text-foreground/70 text-sm md:text-base font-light tracking-wide leading-relaxed mb-10 max-w-sm font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          The page you are looking for has been cut from the final sequence or moved to a different timeline.
        </motion.p>

        {/* Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="w-full sm:w-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-accent text-background font-bold uppercase tracking-widest text-sm border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300 group clickable"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
