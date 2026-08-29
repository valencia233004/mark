"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useMotionValueEvent } from "framer-motion";
import { MessageCircle, PenTool, Wrench, Rocket, ArrowRight, ChevronRight } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import MaskReveal from "@/components/MaskReveal";
import { animate, stagger } from "animejs";

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

/* ── Animated step circle: fills with amber as user scrolls past ── */
function StepCircle({ number, isFilled }: { number: string; isFilled: boolean }) {
  return (
    <div
      className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-card z-10 transition-all duration-700 ${
        isFilled
          ? "border-amber-500 bg-amber-500/15 shadow-[0_0_12px_rgba(194,112,62,0.25)]"
          : "border-amber-500/50"
      }`}
    >
      <span
        className={`font-[family-name:var(--font-display)] text-sm font-bold transition-colors duration-500 ${
          isFilled ? "text-amber-500" : "text-amber-500/60"
        }`}
      >
        {number}
      </span>
    </div>
  );
}

/* ── Desktop SVG path with anime.js stroke-dashoffset drawing ── */
function DesktopCurvedPath({ progress }: { progress: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const bgPathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const pathD = "M 60 50 C 180 20, 240 80, 340 50 S 480 20, 620 50 S 760 80, 900 50";

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
      pathRef.current.style.strokeDasharray = `${len}`;
      pathRef.current.style.strokeDashoffset = `${len}`;
    }
  }, []);

  useEffect(() => {
    if (!pathRef.current || pathLength === 0) return;

    animate(pathRef.current, {
      strokeDashoffset: pathLength * (1 - progress),
      ease: "out(2)",
      duration: 100,
    });
  }, [progress, pathLength]);

  return (
    <svg
      viewBox="0 0 960 100"
      fill="none"
      className="absolute top-0 left-0 w-full h-[100px]"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Dashed background path */}
      <path
        ref={bgPathRef}
        d={pathD}
        stroke="var(--border)"
        strokeWidth="2"
        strokeDasharray="8 6"
        strokeOpacity="0.5"
        fill="none"
      />
      {/* Animated gradient path drawn via anime.js stroke-dashoffset */}
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C2703E" />
          <stop offset="50%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#C2703E" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={pathD}
        stroke="url(#pathGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Small dots along the path */}
      {[0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87].map((pos) => {
        const x = 60 + pos * 840;
        const y = 50 + Math.sin(pos * Math.PI * 3) * 15;
        return (
          <circle
            key={pos}
            cx={x}
            cy={y}
            r="2.5"
            fill={progress >= pos ? "#C2703E" : "var(--border)"}
            opacity={progress >= pos ? 0.8 : 0.3}
            className="transition-all duration-500"
          />
        );
      })}
    </svg>
  );
}

/* ── Chevron connectors between desktop steps ── */
function StepConnector({ filled }: { filled: boolean }) {
  return (
    <div className="hidden md:flex items-center justify-center pt-4">
      <div
        className={`transition-colors duration-500 ${
          filled ? "text-amber-500" : "text-border"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </div>
    </div>
  );
}

/* ── Mobile SVG path with anime.js stroke-dashoffset ── */
function MobileCurvedPath({ progress }: { progress: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const pathD = "M 25 30 C 25 90, 35 90, 35 170 S 25 250, 25 310 S 35 390, 35 450";

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
      pathRef.current.style.strokeDasharray = `${len}`;
      pathRef.current.style.strokeDashoffset = `${len}`;
    }
  }, []);

  useEffect(() => {
    if (!pathRef.current || pathLength === 0) return;

    animate(pathRef.current, {
      strokeDashoffset: pathLength * (1 - progress),
      ease: "out(2)",
      duration: 100,
    });
  }, [progress, pathLength]);

  return (
    <svg
      viewBox="0 0 50 480"
      fill="none"
      className="absolute left-[27px] top-0 h-full w-[50px]"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={pathD}
        stroke="var(--border)"
        strokeWidth="2"
        strokeDasharray="6 5"
        strokeOpacity="0.4"
        fill="none"
      />
      <defs>
        <linearGradient id="mobilePathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C2703E" />
          <stop offset="100%" stopColor="#D4A574" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={pathD}
        stroke="url(#mobilePathGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  // Track scroll progress in React state so child components re-render
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  // Precompute which steps are filled
  const filledSteps = steps.map((_, i) => progress >= (i + 0.5) / steps.length);

  return (
    <section
      id="process"
      ref={ref}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      role="region"
      aria-label="My work process"
    >
      {/* Dotted grid background */}
      <div className="absolute inset-0 dotted-grid-bg opacity-[0.35] dark:opacity-[0.15] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
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

        {/* Desktop: horizontal timeline with curved path */}
        <div className="hidden md:block mt-14">
          {/* Curved connecting path — anime.js stroke-dashoffset */}
          <div className="relative h-[100px] mb-4">
            <DesktopCurvedPath progress={progress} />
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-start">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const staggerOffset = i % 2 === 0 ? 0 : 24;
              return [
                ...(i > 0 ? [
                  <StepConnector key={`connector-${i}`} filled={progress >= i / steps.length} />
                ] : []),
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.15,
                    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                  }}
                  style={{ marginTop: staggerOffset }}
                >
                  <div className="flex flex-col items-center text-center">
                    <StepCircle number={step.number} isFilled={filledSteps[i]} />
                    <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mb-3 mt-4">
                      <Icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>,
              ];
            }).flat()}
          </div>
        </div>

        {/* Mobile: vertical timeline with curved path */}
        <div className="md:hidden mt-10 relative">
          <MobileCurvedPath progress={progress} />

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
                  <div className="flex-shrink-0">
                    <StepCircle number={step.number} isFilled={filledSteps[i]} />
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

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
          >
            Ready to start?
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
