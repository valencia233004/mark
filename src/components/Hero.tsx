"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ImageWithFallback from "@/components/ImageWithFallback";
import WorkflowGraphic from "@/components/WorkflowGraphic";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-warm-brown"
    >
      {/* Subtle grid pattern background (#7 — extracted to CSS class) */}
      <div
        className="absolute inset-0 opacity-[0.04] hero-grid-pattern"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl w-full px-6 py-24 pt-28 md:pt-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left — text content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight tracking-tight">
              Automation systems that save your business{" "}
              <span className="text-amber-500">hours every week.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-warm-gray-light leading-relaxed max-w-xl mx-auto md:mx-0">
              I help businesses automate their lead follow-up, CRM, and client
              workflows using GoHighLevel, n8n, Zapier, and Make — so nothing
              falls through the cracks.
            </p>

            {/* (#8 — staggered CTA animation) */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* (#6 — explicit focus ring on CTA links) */}
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-brown"
                )}
              >
                Get in touch
              </a>
              <a
                href="#work"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "border-cream/30 text-cream hover:bg-cream hover:text-warm-charcoal outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-warm-brown"
                )}
              >
                See how I work
              </a>
            </motion.div>
          </motion.div>

          {/* Right — profile photo + workflow graphic */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Workflow graphic behind the photo */}
            <WorkflowGraphic className="absolute -top-8 -right-8 w-56 h-44 md:w-64 md:h-52 pointer-events-none" />

            {/* (#5 — src matches user's chosen filename) */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-amber-500/15 blur-2xl" />
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
