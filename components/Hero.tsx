"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export default function Hero() {
  const headline = "Make them stop scrolling.";
  const words = headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Custom premium easeOutExpo
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden grain-bg mesh-gradient px-6 md:px-12">
      {/* Decorative Cinematic Background Overlay Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Subtle Floating Flare */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        {/* Animated Headline */}
        <motion.h1
          className="font-display text-[12vw] sm:text-[10vw] md:text-8xl lg:text-[120px] leading-[0.9] uppercase tracking-normal text-foreground mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden mr-3 sm:mr-4 md:mr-6 pb-2"
            >
              <motion.span variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-foreground/70 max-w-2xl leading-relaxed mb-10 uppercase tracking-widest font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
        >
          Short-form video editing for creators & brands worldwide.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        >
          <motion.a
            href="#work"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-background font-bold uppercase tracking-widest text-sm w-full sm:w-auto hover:bg-accent-hover transition-colors border border-accent duration-300 clickable"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Work
            <Play size={14} fill="currentColor" />
          </motion.a>

          <motion.a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-foreground/30 text-foreground font-bold uppercase tracking-widest text-sm w-full sm:w-auto hover:border-foreground transition-colors duration-300 clickable"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Floating stats as asymmetric elements */}
      <div className="absolute bottom-16 left-6 md:left-12 hidden md:block">
        <motion.div
          className="flex flex-col items-start border-l border-accent/60 pl-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <span className="font-display text-2xl text-accent tracking-wider">
            GLOBAL CLIENTS
          </span>
          <span className="text-xs text-foreground/50 uppercase tracking-widest">
            Available Worldwide
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-16 right-6 md:right-12 hidden md:block">
        <motion.div
          className="flex flex-col items-end border-r border-accent/60 pr-4 text-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <span className="font-display text-2xl text-accent tracking-wider">
            RETENTION FIRST
          </span>
          <span className="text-xs text-foreground/50 uppercase tracking-widest">
            Editing optimized for high AVD
          </span>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 hover:text-accent transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
