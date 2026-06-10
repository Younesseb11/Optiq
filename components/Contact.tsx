"use client";

import { motion as m } from "framer-motion";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  // TODO: Replace the phone number placeholder '212XXXXXXXXX' with Optiq's real business phone number
  const whatsappNumber = "212XXXXXXXXX";
  const whatsappMessage = encodeURIComponent(
    "Hello Optiq! We saw your portfolio and would like to discuss a video project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // TODO: Replace the email placeholder with Optiq's production business email address
  const emailAddress = "hello@optiq.agency";
  const mailtoUrl = `mailto:${emailAddress}?subject=Project%20Inquiry%20-%20OPTIQ`;

  return (
    <section
      id="contact"
      className="py-28 md:py-40 bg-dark-100 relative overflow-hidden px-6 md:px-12 border-t border-dark-200"
    >
      {/* Decorative Cinematic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Ambient background accent flare */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Contact Indicator */}
        <m.span
          className="text-accent text-xs uppercase tracking-extrawide block mb-6 font-semibold"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          LET&apos;S COLLABORATE
        </m.span>

        {/* Large Header */}
        <m.h2
          className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-wider text-foreground mb-6 leading-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to level up
          <br />
          your content?
        </m.h2>

        {/* Subtitle */}
        <m.p
          className="text-foreground/70 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-12 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s build something people can&apos;t scroll past.
        </m.p>

        {/* Dynamic Buttons */}
        <m.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Primary WhatsApp CTA */}
          <m.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-accent text-background font-bold uppercase tracking-widest text-sm hover:bg-accent-hover transition-all duration-300 border border-accent rounded-none clickable accent-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare size={16} fill="currentColor" />
            Chat on WhatsApp
            <ArrowRight size={14} />
          </m.a>

          {/* Secondary Email Link */}
          <div className="group mt-4">
            <a
              href={mailtoUrl}
              className="flex items-center gap-2 text-foreground/50 hover:text-foreground text-sm font-bold tracking-widest uppercase pb-1 transition-colors duration-300 border-b border-foreground/10 group-hover:border-accent"
            >
              <Mail size={14} />
              {emailAddress}
            </a>
          </div>
        </m.div>

        {/* Localized Response SLA banner */}
        <m.div
          className="mt-16 text-[10px] text-foreground/30 font-bold uppercase tracking-widest flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Typically responds in under 2 hours</span>
        </m.div>
      </div>
    </section>
  );
}
