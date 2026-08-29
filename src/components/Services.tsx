"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GitBranch, Zap, FileText, CalendarCheck, ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import TiltCard from "@/components/TiltCard";
import MaskReveal from "@/components/MaskReveal";
import SectionEyebrow from "@/components/SectionEyebrow";

const serviceTools: Record<string, { name: string; icon: string }[]> = {
  "CRM & Pipeline Setup": [
    { name: "GoHighLevel", icon: "https://cdn.simpleicons.org/gohighlevel" },
    { name: "Airtable", icon: "https://cdn.simpleicons.org/airtable" },
  ],
  "Workflow Automation": [
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
    { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4F00" },
    { name: "Make", icon: "https://cdn.simpleicons.org/make" },
  ],
  "Funnel & Landing Page Builds": [
    { name: "GoHighLevel", icon: "https://cdn.simpleicons.org/gohighlevel" },
  ],
  "Appointment Booking Automation": [
    { name: "Calendly", icon: "https://cdn.simpleicons.org/calendly" },
    { name: "GoHighLevel", icon: "https://cdn.simpleicons.org/gohighlevel" },
    { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4F00" },
  ],
};

const services = [
  {
    icon: GitBranch,
    title: "CRM & Pipeline Setup",
    description: "Organize your leads and customers into a clear pipeline that shows exactly where every deal stands.",
    isCore: true,
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automatic follow-ups, tagging, and notifications so no lead waits longer than it should.",
    isCore: false,
  },
  {
    icon: FileText,
    title: "Funnel & Landing Page Builds",
    description: "Opt-in pages and forms that feed directly into your automated system.",
    isCore: false,
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking Automation",
    description: "Calendars connected to confirmation and reminder workflows.",
    isCore: false,
  },
];

function ToolLogoRow({ tools }: { tools: { name: string; icon: string }[] }) {
  return (
    <div className="flex items-center gap-2 mt-3 opacity-60 group-hover:opacity-90 transition-opacity">
      {tools.map((tool) => (
        <Image
          key={tool.name}
          src={tool.icon}
          alt={tool.name}
          width={18}
          height={18}
          unoptimized
          className="w-[18px] h-[18px]"
        />
      ))}
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-28 bg-sand/40 dark:bg-warm-brown/50"
      role="region"
      aria-label="Services offered"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow number="02" label="WHAT I DO" />
          <MaskReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Services
            </h2>
          </MaskReveal>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Systems designed to keep your business running without constant manual effort.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const number = String(i + 1).padStart(2, "0");
            const tools = serviceTools[service.title] || [];
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <SpotlightCard>
                  <Card
                    className={`h-full border-border/70 cursor-default card-lift group relative overflow-hidden transition-all duration-300 ${
                      service.isCore
                        ? "border-amber-500/40 shadow-[0_0_0_1px_rgba(194,112,62,0.15)]"
                        : ""
                    } ${
                      isHovered
                        ? "border-transparent shadow-[0_0_0_1px_rgba(194,112,62,0.3),0_0_0_2px_rgba(122,139,111,0.15)]"
                        : ""
                    }`}
                  >
                    {/* Core Service badge */}
                    {service.isCore && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 z-10">
                        Core Service
                      </div>
                    )}

                    {/* Watermark number */}
                    <span className="absolute top-4 right-4 font-[family-name:var(--font-display)] text-6xl font-bold text-foreground/[0.03] select-none pointer-events-none" aria-hidden="true">
                      {number}
                    </span>

                    <CardHeader>
                      <TiltCard maxTilt={4}>
                        <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                        </div>
                      </TiltCard>
                      <CardTitle className="text-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {service.description}
                      </CardDescription>

                      {/* Tool logos */}
                      {tools.length > 0 && <ToolLogoRow tools={tools} />}

                      {/* Hover reveal: Learn more */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3"
                      >
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400">
                          Learn more <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </motion.div>
                    </CardHeader>
                  </Card>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
