"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Youness completely transformed our social presence. Our Reels went from averaging 2k views to getting over 150k views in less than three weeks. His pacing and sound cues are absolutely unmatched.",
    author: "Amine El Amrani",
    role: "Tech Content Creator",
    projectType: "Social Content Reel",
  },
  {
    id: 2,
    quote:
      "We hired Optiq to edit our restaurant launch video. The cinematic edits and quick cuts had people lining up from day one. He knows exactly how to hook the target audience.",
    author: "Sofia Bennani",
    role: "Owner, Summit Bistro",
    projectType: "Restaurant Promo Film",
  },
  {
    id: 3,
    quote:
      "Exceptional attention to detail and reliable deadlines. Youness's text animation style is top-tier. He took our raw product clips and turned them into highly high-converting commercial ad assets.",
    author: "Karim Mansouri",
    role: "E-commerce Brand Director",
    projectType: "Brand Ad Production",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-background relative overflow-hidden px-6 md:px-12 border-t border-dark-200"
    >
      {/* Decorative background watermark */}
      <div className="absolute right-6 top-10 font-display text-[15vw] text-dark-100 opacity-20 pointer-events-none select-none tracking-widest leading-none">
        VOICES
      </div>

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
            TESTIMONIALS
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-7xl uppercase tracking-wider text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Clients Say
          </motion.h2>
          <motion.p
            className="text-foreground/50 text-xs md:text-sm font-medium tracking-widest max-w-sm mt-4 leading-relaxed uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Results speak louder than edits. Creators and brands trust Optiq.
          </motion.p>
        </div>

        {/* Carousel / Grid Container */}
        {/* Uses Snap Scroll on Mobile (horizontal scrolling) & standard Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 gap-8 pb-6 md:pb-0 w-full">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-auto snap-center bg-dark-100 border border-dark-200 p-8 flex flex-col justify-between group hover:border-accent/40 transition-colors duration-300 relative"
            >
              {/* Quote Mark Watermark */}
              <div className="absolute top-6 right-8 text-dark-200/50 group-hover:text-accent/10 transition-colors duration-300">
                <Quote size={52} className="opacity-40" />
              </div>

              {/* Quote Content */}
              <div className="relative z-10 flex-grow mb-8">
                <p className="text-foreground/80 text-sm sm:text-base font-light italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="relative z-10 flex items-center gap-4 border-t border-dark-200/40 pt-6">
                {/* Visual initial badge */}
                <div className="w-10 h-10 bg-dark-200 border border-dark-300 flex items-center justify-center font-display text-accent text-lg">
                  {item.author[0]}
                </div>

                <div>
                  <h4 className="font-display text-lg uppercase tracking-wider text-foreground group-hover:text-accent transition-colors duration-300">
                    {item.author}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/45">
                    {item.role}
                  </p>

                  {/* Subtle Project Tag */}
                  <span className="inline-block mt-1 text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 bg-dark-200 border border-dark-300 text-accent/70">
                    {item.projectType}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel indicator hint */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {testimonials.map((_, idx) => (
            <span key={idx} className="w-1.5 h-1.5 rounded-full bg-dark-200" />
          ))}
        </div>
      </div>
    </section>
  );
}
