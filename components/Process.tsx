"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UploadCloud, Edit3, Rocket } from "lucide-react";

interface Step {
  id: number;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    number: "01",
    icon: <UploadCloud size={24} className="text-accent" />,
    title: "Footage & Brief",
    description: "Upload your raw footage and brand assets to a shared folder. Share your goals, style guidelines, and general video brief.",
  },
  {
    id: 2,
    number: "02",
    icon: <Edit3 size={24} className="text-accent" />,
    title: "Edit & Review",
    description: "We construct the narrative, color correct, apply sound design, add typography, and deliver a first draft. You review and request changes.",
  },
  {
    id: 3,
    number: "03",
    icon: <Rocket size={24} className="text-accent" />,
    title: "Scroll-Stopping Content",
    description: "Once approved, you receive high-resolution, render-optimized files ready to publish, drive high retention, and engage your audience.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress inside the process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress into drawing line scaling (from 20% to 70% viewport offset)
  const scaleX = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);

  return (
    <section 
      id="process" 
      ref={containerRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden px-6 md:px-12 border-t border-dark-200"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="mb-24 text-center">
          <motion.span 
            className="text-accent text-xs uppercase tracking-extrawide block mb-3 font-semibold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            WORKFLOW
          </motion.span>
          <motion.h2 
            className="font-display text-5xl md:text-7xl uppercase tracking-wider text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-foreground/50 text-xs md:text-sm font-medium tracking-widest max-w-md mx-auto mt-4 leading-relaxed uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A seamless collaborative process from raw footage to high-impact results.
          </motion.p>
        </div>

        {/* Timeline Grid Wrapper */}
        <div className="relative mt-12">
          
          {/* Horizontal connecting line (Desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-dark-200/50 -z-10">
            <motion.div 
              style={{ scaleX, originX: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          {/* Vertical connecting line (Mobile/Tablet only) */}
          <div className="lg:hidden absolute left-[39px] top-[40px] bottom-[40px] w-[2px] bg-dark-200/50 -z-10">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex lg:flex-col items-start lg:items-center text-left lg:text-center relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step Number + Icon Circle */}
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-dark-100 border-2 border-dark-200 group-hover:border-accent transition-colors duration-500 rounded-none relative z-10 mr-6 lg:mr-0 lg:mb-6">
                  {/* Inside Circle Icon */}
                  <div className="scale-110 transition-transform duration-300 group-hover:scale-125">
                    {step.icon}
                  </div>
                  
                  {/* Absolute number badge */}
                  <span className="absolute -top-3.5 -right-3 text-[10px] font-bold tracking-widest text-background bg-accent px-1.5 py-0.5 min-w-[20px] text-center">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-grow">
                  <h3 className="font-display text-2xl tracking-wide uppercase text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-foreground/75 text-sm md:text-base font-light leading-relaxed max-w-xs lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
