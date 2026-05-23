"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  // Custom high-quality SVG icon for TikTok since Lucide does not ship one by default
  const TikTokIcon = () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.32A122.65,122.65,0,0,0,448,109.91Z"></path>
    </svg>
  );

  const socialLinks = [
    {
      name: "Instagram",
      href: "#", // TODO: Add Youness's real Instagram profile URL
      icon: <Instagram size={16} />,
    },
    {
      name: "TikTok",
      href: "#", // TODO: Add Youness's real TikTok profile URL
      icon: <TikTokIcon />,
    },
    {
      name: "YouTube",
      href: "#", // TODO: Add Youness's real YouTube channel URL
      icon: <Youtube size={16} />,
    },
  ];

  return (
    <footer className="bg-background py-12 md:py-16 border-t border-dark-200 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative vertical divider line inside footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-[1px] bg-dark-200" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Brand Signature */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#"
            className="font-display text-2xl tracking-widest text-foreground hover:text-accent transition-colors duration-300 mb-2"
          >
            OPTIQ
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 font-mono">
            OPTIQ © 2025
          </span>
        </div>

        {/* Center: Brand Philosophy Tagline */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 max-w-xs md:max-w-none">
            Made for creators. Built for results.
          </p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-dark-100 border border-dark-200 hover:border-accent hover:text-accent flex items-center justify-center text-foreground/60 transition-colors duration-300 rounded-none clickable"
              title={`Follow on ${social.name}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
