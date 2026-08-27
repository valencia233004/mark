"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ImageWithFallback from "@/components/ImageWithFallback";
import WorkflowGraphic from "@/components/WorkflowGraphic";
import MagneticWrapper from "@/components/MagneticWrapper";

const headlineLines = [
  { text: "Automation systems that", highlight: false },
  { text: "save your business", highlight: false },
  { text: "hours every week.", highlight: true },
];

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.15 + i * 0.12,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const graphicY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-warm-brown"
    >
      <div className="absolute inset-0 opacity-[0.04] hero-grid-pattern" aria-hidden="true" />

      {/* Ambient gradient blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="ambient-blob absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="ambient-blob absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-700/8 blur-[100px]" style={{ animationDelay: "-20s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-6 py-24 pt-28 md:pt-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text with parallax */}
          <motion.div className="flex-1 text-center md:text-left" style={{ y: textY }}>
            <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight tracking-tight">
              {headlineLines.map((line, i) => (
                <motion.span
                  key={i}
                  className={`block ${line.highlight ? "text-amber-500" : ""}`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-5 text-base sm:text-lg text-warm-gray-light leading-relaxed max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              I help businesses automate their lead follow-up, CRM, and client
              workflows using GoHighLevel, n8n, Zapier, and Make — so nothing
              falls through the cracks.
            </motion.p>

            {/* Magnetic CTA buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              <MagneticWrapper>
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "btn-press btn-ripple outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-brown"
                  )}
                >
                  Get in touch
                </a>
              </MagneticWrapper>
              <MagneticWrapper>
                <a
                  href="#work"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "border-cream/30 text-cream hover:bg-cream hover:text-warm-charcoal btn-press btn-ripple outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-warm-brown"
                  )}
                >
                  See how I work
                </a>
              </MagneticWrapper>
            </motion.div>
          </motion.div>

          {/* Photo + graphic with different parallax speeds */}
          <div className="relative flex-shrink-0">
            {/* Workflow graphic — faster parallax */}
            <motion.div style={{ y: graphicY }}>
              <WorkflowGraphic className="absolute -top-8 -right-8 w-56 h-44 md:w-64 md:h-52 pointer-events-none" />
            </motion.div>

            {/* Photo — slower parallax + floating */}
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
              style={{ y: photoY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              <div className="absolute inset-0 rounded-full bg-amber-500/15 blur-2xl" />
              <motion.div
                className="w-full h-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ImageWithFallback
                  src="/images/profile.png"
                  alt="John Mark — Automation & CRM specialist"
                  width={320}
                  height={320}
                  priority
                  isCircular
                  className="relative w-full h-full"
                  fallbackClassName="w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
