"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

interface Project {
  id: number;
  name: string;
  category: "Brand Ad" | "Social Content" | "UGC";
  videoId: string;
  thumbnail: string;
  aspectRatio: "9/16" | "16/9";
}

const projects: Project[] = [
  {
    id: 1,
    name: "UGC EFMC",
    category: "UGC",
    videoId: "reel_4_ybu18v",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779561493/reel_4_ybu18v.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 2,
    name: "Hook Edit",
    category: "Social Content",
    videoId: "Edit_4_x28yhl",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779561619/Edit_4_x28yhl.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 3,
    name: "The Win Spot",
    category: "Brand Ad",
    videoId: "ad_1_hwmkg9",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779561632/ad_1_hwmkg9.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 4,
    name: "Top Laptop Edit",
    category: "Social Content",
    videoId: "Top_Laptop_1_qycb2s",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779561642/Top_Laptop_1_qycb2s.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 5,
    name: "UGC Watch",
    category: "UGC",
    videoId: "Youlin1_ajelxz",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779561658/Youlin1_ajelxz.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 6,
    name: "Fitness Cinematic",
    category: "Brand Ad",
    videoId: "Fitness_Cinematic_video_rkg8ns",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779561711/Fitness_Cinematic_video_rkg8ns.jpg",
    aspectRatio: "16/9",
  },
  {
    id: 7,
    name: "UGC Awtan",
    category: "UGC",
    videoId: "Centre_awtan_3_1_qb4beq",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779561860/Centre_awtan_3_1_qb4beq.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 8,
    name: "New Site Arabic",
    category: "Brand Ad",
    videoId: "NewSite_1_twy8ic",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779561876/NewSite_1_twy8ic.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 9,
    name: "Brain Edit",
    category: "Social Content",
    videoId: "Edit_2_jy5vrh",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/v1779562004/Edit_2_jy5vrh.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 10,
    name: "CCF Center",
    category: "UGC",
    videoId: "CCF_1_eytyat",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/CCF_1_eytyat.jpg",
    aspectRatio: "9/16",
  },
  {
    id: 11,
    name: "Hajj Edit",
    category: "UGC",
    videoId: "islamic_OH24MBPu_np2ck1",
    thumbnail: "https://res.cloudinary.com/dxqjrsuaz/video/upload/islamic_OH24MBPu_np2ck1.jpg",
    aspectRatio: "9/16",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Brand Ad", value: "Brand Ad" },
  { label: "Social Content", value: "Social Content" },
  { label: "UGC", value: "UGC" },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    name: string;
    aspectRatio: "9/16" | "16/9";
  } | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const verticalProjects = filteredProjects.filter(
    (project) => project.aspectRatio === "9/16"
  );
  const horizontalProjects = filteredProjects.filter(
    (project) => project.aspectRatio === "16/9"
  );

  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-background relative overflow-hidden px-6 md:px-12 border-t border-dark-200"
    >
      {/* Decorative text watermark */}
      <div className="absolute right-0 top-10 font-display text-[15vw] text-dark-100 opacity-20 pointer-events-none select-none tracking-widest leading-none">
        SELECTED
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span
              className="text-accent text-xs uppercase tracking-extrawide block mb-3 font-semibold"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.span>
            <motion.h2
              className="font-display text-5xl md:text-7xl uppercase tracking-wider text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Selected Work
            </motion.h2>
          </div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap gap-2 border-b border-dark-200 pb-2 md:pb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-4 py-2 text-xs uppercase tracking-widest font-bold transition-colors duration-300 ${
                  activeFilter === filter.value
                    ? "text-accent"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {filter.label}
                {activeFilter === filter.value && (
                  <motion.div
                    layoutId="activeFilterBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Display Areas */}
        <div className="flex flex-col gap-12">
          {/* Vertical 9:16 Video Cards Grid */}
          {verticalProjects.length > 0 && (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start"
            >
              <AnimatePresence mode="popLayout">
                {verticalProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={project.id}
                    className="w-full"
                  >
                    <VideoCard
                      name={project.name}
                      category={project.category}
                      videoId={project.videoId}
                      thumbnail={project.thumbnail}
                      aspectRatio={project.aspectRatio}
                      onPlay={(id, name) =>
                        setActiveVideo({
                          id,
                          name,
                          aspectRatio: project.aspectRatio,
                        })
                      }
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Horizontal 16:9 Video Cards Section */}
          {horizontalProjects.length > 0 && (
            <motion.div layout className="w-full flex justify-center mt-4">
              <AnimatePresence mode="popLayout">
                {horizontalProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={project.id}
                    className="w-full max-w-3xl"
                  >
                    <VideoCard
                      name={project.name}
                      category={project.category}
                      videoId={project.videoId}
                      thumbnail={project.thumbnail}
                      aspectRatio={project.aspectRatio}
                      onPlay={(id, name) =>
                        setActiveVideo({
                          id,
                          name,
                          aspectRatio: project.aspectRatio,
                        })
                      }
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA for Work */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-foreground/50 text-sm tracking-wide mb-4">
            Need a custom video format or specific edit style?
          </p>
          <a
            href="#contact"
            className="text-accent hover:text-accent-hover text-sm font-bold tracking-widest uppercase border-b border-accent/30 hover:border-accent transition-all duration-300 pb-1"
          >
            Let&apos;s talk requirements &rarr;
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal System */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal
            videoId={activeVideo.id}
            videoName={activeVideo.name}
            aspectRatio={activeVideo.aspectRatio}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
