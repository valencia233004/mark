"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Clock, ChevronDown } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import MaskReveal from "@/components/MaskReveal";

interface Project {
  title: string;
  image: string;
  status: string;
  statusLabel: string;
  tools: string[];
  description: string;
}

const projects: Project[] = [
  {
    title: "Lead Pipeline Automation",
    image: "/images/project-1.jpg",
    status: "Building now",
    statusLabel: "Coming soon",
    tools: ["GoHighLevel", "Zapier"],
    description: "A fully automated lead pipeline that captures inbound leads, scores them, routes them to the right pipeline stage, and triggers follow-up sequences — all without manual intervention.",
  },
  {
    title: "GHL Funnel + Booking System",
    image: "/images/project-2.jpg",
    status: "Building now",
    statusLabel: "Coming soon",
    tools: ["GoHighLevel", "Make"],
    description: "A high-converting funnel connected to an automated booking flow. Leads opt in, receive instant confirmation, and get smart reminders — reducing no-shows and manual scheduling work.",
  },
  {
    title: "n8n Workflow Integration",
    image: "/images/project-3.jpg",
    status: "Building now",
    statusLabel: "Coming soon",
    tools: ["n8n", "GoHighLevel", "Zapier"],
    description: "A multi-step n8n workflow that syncs data across CRM, email, and calendar tools — handling lead assignment, status updates, and notification triggers in one connected system.",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <SpotlightCard>
      <Card className="overflow-hidden border-border/70 card-lift">
        <div className="relative aspect-video">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            fill
            className="w-full h-full"
            fallbackClassName="w-full h-full aspect-video"
          />
          <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-warm-charcoal/80 text-cream backdrop-blur-sm">
            <Clock size={12} />
            {project.statusLabel}
          </div>
        </div>

        <button
          type="button"
          className="w-full p-5 flex items-center justify-between text-left cursor-pointer hover:bg-sand/30 dark:hover:bg-white/5 transition-colors"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={`${project.title} — ${expanded ? "collapse" : "expand"} details`}
        >
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.status}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex-shrink-0 ml-3"
          >
            <ChevronDown size={20} className="text-muted-foreground" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, delay: 0.1 }}
                className="px-5 pb-5 border-t border-border/50 pt-4 space-y-4"
              >
                {/* Frosted glass detail panel */}
                <div className="glass-panel p-4 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-medium">
                    <Clock size={14} />
                    {project.status}
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Tools used</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 dark:bg-sage-500/10 text-sage-600 dark:text-sage-500 border border-sage-500/20">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">What it will include</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </SpotlightCard>
  );
}

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <MaskReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Work
            </h2>
          </MaskReveal>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Projects I&apos;m building to demonstrate real automation systems.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
