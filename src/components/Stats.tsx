"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Workflow, Timer, Puzzle, Earth } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";

const stats = [
  { value: 50, suffix: "+", label: "Workflows Automated", icon: Workflow },
  { value: 500, suffix: "+", label: "Hours Saved for Clients", icon: Timer },
  { value: 10, suffix: "+", label: "Tools Integrated", icon: Puzzle },
  { value: 4, suffix: "", label: "Countries Served", icon: Earth },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
        setDone(true);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span className="relative inline-block">
      {done && (
        <span className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl animate-pulse" aria-hidden="true" />
      )}
      <span className="relative">
        {count}{suffix}
      </span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="py-16 md:py-20 bg-warm-brown/5 dark:bg-warm-brown/50"
      role="region"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <div className="flex justify-center">
            <SectionEyebrow number="—" label="BY THE NUMBERS" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                }}
                className="text-center p-6 rounded-xl bg-card border border-border/70 card-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <div className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-amber-500">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
