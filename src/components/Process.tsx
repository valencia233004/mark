"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MessageCircle, PenTool, Wrench, Rocket } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import MaskReveal from "@/components/MaskReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start with a call to understand your current workflows, pain points, and goals.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "System Design",
    description: "I map out the automation architecture — what triggers what, and where data flows.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build & Test",
    description: "I build the workflows, connect your tools, and test everything until it runs flawlessly.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We go live together. I provide documentation and ongoing support as your business grows.",
    icon: Rocket,
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={ref}
      className="py-20 md:py-28 bg-background"
      role="region"
      aria-label="My work process"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow number="—" label="HOW I WORK" />
          <MaskReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              My Process
            </h2>
          </MaskReveal>
          <p className="mt-3 text-muted-foreground max-w-xl">
            A clear, repeatable approach to building automation that works.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mt-14">
          {/* Connecting line */}
          <div className="relative mb-10">
            <div className="h-[2px] bg-border/50 w-full rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-[2px] rounded-full"
              style={{
                width: lineWidth,
                background: "linear-gradient(90deg, #C2703E, #D4A574)",
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.15,
                    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full border-2 border-amber-500 flex items-center justify-center mb-4 bg-card">
                      <span className="font-[family-name:var(--font-display)] text-sm font-bold text-amber-500">
                        {step.number}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden mt-10 relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-border/50" />
          <motion.div
            className="absolute left-7 top-0 w-[2px] rounded-full"
            style={{
              height: lineHeight,
              background: "linear-gradient(180deg, #C2703E, #D4A574)",
            }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.15,
                    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                  }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-amber-500 flex items-center justify-center bg-card z-10">
                    <span className="font-[family-name:var(--font-display)] text-sm font-bold text-amber-500">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
