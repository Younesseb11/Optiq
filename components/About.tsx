"use client";

import { motion } from "framer-motion";
import { Award, Compass, Globe } from "lucide-react";
import Image from "next/image";

interface StatItem {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    icon: <Award className="text-accent mb-2" size={20} />,
    value: "100+ Projects",
    label: "Edited & Delivered",
  },
  {
    id: 2,
    icon: <Compass className="text-accent mb-2" size={20} />,
    value: "4+ Years",
    label: "Industry Experience",
  },
  {
    id: 3,
    icon: <Globe className="text-accent mb-2" size={20} />,
    value: "100% Remote",
    label: "Worldwide Delivery",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-dark-50 relative overflow-hidden px-6 md:px-12 border-t border-dark-200"
    >
      {/* Decorative large font backing */}
      <div className="absolute left-6 bottom-10 font-display text-[12vw] text-dark-100 opacity-20 pointer-events-none select-none tracking-widest leading-none">
        OPTIQ
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.span
              className="text-accent text-xs uppercase tracking-extrawide block mb-3 font-semibold"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Who We Are
            </motion.span>

            <motion.h2
              className="font-display text-5xl md:text-7xl uppercase tracking-wider text-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Editing with intent.
            </motion.h2>

            <motion.div
              className="space-y-6 text-foreground/80 font-light text-base md:text-lg leading-relaxed max-w-xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Optiq is a video editing studio specializing in short-form content
                that converts. We work with digital creators, local businesses,
                and brands to build visual stories that make people stop — and
                stay.
              </p>
              <p>
                Our philosophy is simple:{" "}
                <em className="text-foreground font-medium not-italic border-b border-accent/40">
                  every second of your video should earn its place.
                </em>{" "}
                We bring together sharp editing, dynamic pacing, and purposeful
                sound design to create content that performs.
              </p>
            </motion.div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-xl">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  className="bg-dark-100 border border-dark-200/80 p-5 flex flex-col items-start group hover:border-accent/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                >
                  {stat.icon}
                  <span className="font-display text-2xl uppercase tracking-wider text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/45">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Portrait Column (Asymmetric Image Mockup Frame) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              className="relative w-full max-w-[360px] aspect-[3/4] bg-dark-100 border-2 border-dark-200 p-4 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Outer corner marks */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-accent" />
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-accent" />

              {/* Photo Frame with Centered Optiq Logo */}
              <div className="relative w-full h-full bg-gradient-to-br from-dark-300 via-dark-200 to-black placeholder-noise overflow-hidden flex flex-col justify-center items-center select-none border border-dark-300">
                <div className="relative w-48 h-16 z-10 transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src="/logo.png"
                    alt="Optiq Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* SVG Film Grid backdrop overlay */}
                <div className="absolute inset-0 z-10 bg-[radial-gradient(#242424_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 mix-blend-overlay pointer-events-none" />

                {/* Aesthetic Viewfinder overlay details */}
                <div className="absolute inset-0 z-20 pointer-events-none mix-blend-difference">
                  <span className="absolute top-4 left-4 text-[9px] font-bold tracking-widest text-white/80 font-mono">
                    REC [🔴]
                  </span>
                  <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-white/80 font-mono">
                    24 FPS
                  </span>
                  <span className="absolute bottom-4 left-4 text-[9px] font-bold tracking-widest text-white/80 font-mono">
                    4K ULTRA
                  </span>
                  <span className="absolute bottom-4 right-4 text-[9px] font-bold tracking-widest text-white/80 font-mono">
                    100% BAT
                  </span>
                </div>

                {/* Animated Camera Lens Ring overlay */}
                <motion.div
                  className="absolute z-20 w-32 h-32 rounded-full border border-dark-400 flex items-center justify-center pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                  <div className="w-28 h-28 rounded-full border border-dashed border-accent/60" />
                  <div className="absolute w-2 h-2 bg-accent rounded-full -top-1" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
