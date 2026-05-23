"use client";

import { motion } from "framer-motion";
import { Scissors, Target, Layers, Music } from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: <Scissors size={32} className="text-accent" />,
    title: "Short-Form Video Editing",
    description:
      "Highly engaging, fast-paced edits optimized for Reels, TikToks, and YouTube Shorts.",
    details: [
      "Hook optimization",
      "Subtitles & dynamic text",
      "Sound effects & music sync",
    ],
  },
  {
    id: 2,
    icon: <Target size={32} className="text-accent" />,
    title: "Brand Ad Production",
    description:
      "Tailor-made commercial promos for cafes, local restaurants, and businesses.",
    details: [
      "Storyboarding & pacing",
      "Cinematic sequences",
      "Clear Call-to-Actions",
    ],
  },
  {
    id: 3,
    icon: <Layers size={32} className="text-accent" />,
    title: "Motion Graphics & Animation",
    description:
      "Sleek text animations, popups, and visual transitions that retain viewer retention.",
    details: [
      "Title overlays",
      "Premium asset transitions",
      "Infographic animations",
    ],
  },
  {
    id: 4,
    icon: <Music size={32} className="text-accent" />,
    title: "Color Grading & Sound Design",
    description:
      "Premium cinematic color palettes matched with immersive, layered soundscapes.",
    details: [
      "Color correction & look styling",
      "Audio clean-up & level mixing",
      "Atmospheric background SFX",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-dark-50 relative overflow-hidden px-6 md:px-12 border-t border-dark-200"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.span
            className="text-accent text-xs uppercase tracking-extrawide block mb-3 font-semibold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            EXPERTISE
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-7xl uppercase tracking-wider text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="text-foreground/60 text-sm md:text-base font-light tracking-wide max-w-xl mt-4 leading-relaxed uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every frame built with intention. Optimized for maximum retention,
            conversion, and professional aesthetic appeal.
          </motion.p>
        </div>

        {/* 2x2 Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-dark-100/70 border border-dark-200 p-8 md:p-10 relative group transition-all duration-300 hover:border-accent/40"
              whileHover={{ y: -5 }}
            >
              {/* Top border glowing line overlay */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center p-3 bg-dark-200 border border-dark-300/50 rounded-none group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl md:text-3xl tracking-wide uppercase text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-light">
                {service.description}
              </p>

              {/* Bullet list tags */}
              <ul className="border-t border-dark-200/50 pt-6 flex flex-col gap-2.5">
                {service.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-foreground/50 font-bold uppercase tracking-wider"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-60" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
