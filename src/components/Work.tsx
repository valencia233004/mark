"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import ImageWithFallback from "@/components/ImageWithFallback";
import { CheckCircle2, ChevronDown } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import MaskReveal from "@/components/MaskReveal";
import SectionEyebrow from "@/components/SectionEyebrow";

const toolIcons: Record<string, string> = {
  "GoHighLevel": "https://cdn.simpleicons.org/gohighlevel",
  "Zapier": "https://cdn.simpleicons.org/zapier/FF4F00",
  "n8n": "https://cdn.simpleicons.org/n8n",
  "Make (Integromat)": "https://cdn.simpleicons.org/make",
  "Google Sheets": "https://cdn.simpleicons.org/googlesheets",
  "Slack": "https://cdn.simpleicons.org/slack",
  "Google Calendar": "https://cdn.simpleicons.org/googlecalendar",
  "Shopify": "https://cdn.simpleicons.org/shopify",
  "Twilio": "https://cdn.simpleicons.org/twilio",
  "Calendly": "https://cdn.simpleicons.org/calendly",
  "Airtable": "https://cdn.simpleicons.org/airtable",
};

interface Project {
  title: string;
  image: string;
  tools: string[];
  description: string;
  results: string;
}

const projects: Project[] = [
  {
    title: "Lead Pipeline Automation for Real Estate Agency",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tools: ["GoHighLevel", "Zapier", "Google Sheets"],
    description: "Built an end-to-end lead capture and nurturing pipeline for a US-based real estate agency. Incoming leads from Facebook Ads and the website are automatically captured in GHL, scored based on budget and timeline, assigned to the right agent, and enrolled into a 14-day SMS + email follow-up sequence. Reduced lead response time from 4 hours to under 90 seconds.",
    results: "90-second avg response time • 35% increase in booked appointments • Zero manual lead assignment",
  },
  {
    title: "Multi-Channel Client Onboarding System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tools: ["n8n", "GoHighLevel", "Slack", "Google Calendar"],
    description: "Designed a self-hosted n8n workflow that automates the entire client onboarding process for a consulting firm. When a new client signs a proposal, the system automatically creates their CRM profile, sends a welcome email sequence, generates a shared Google Drive folder, books the kickoff call, and notifies the team in Slack — all within 60 seconds of contract signing.",
    results: "60-second onboarding • 12 hours/week saved • 100% consistent client experience",
  },
  {
    title: "E-Commerce Review & Feedback Automation",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    tools: ["Make (Integromat)", "Shopify", "GoHighLevel", "Twilio"],
    description: "Created an automated review collection system for an Australian e-commerce brand. After a customer receives their order, the system waits 5 days, then sends a personalized SMS asking for a review. Happy customers get directed to leave a Google review; unhappy ones get routed to a private feedback form that alerts the support team in real-time.",
    results: "3x more Google reviews • 68% review response rate • Negative feedback caught before going public",
  },
  {
    title: "Appointment Booking & No-Show Prevention System",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    tools: ["GoHighLevel", "Zapier", "Calendly", "Twilio"],
    description: "Built a smart booking system for a UK-based coaching business. Prospects book through Calendly, which triggers a GHL workflow: instant confirmation SMS, a 24-hour reminder, a 1-hour reminder, and a 'running late?' check-in 5 minutes after the appointment time. No-shows get automatically rebooked with a one-click reschedule link.",
    results: "72% reduction in no-shows • Automated rebooking recovered 40% of missed appointments",
  },
  {
    title: "Cross-Platform Data Sync & Reporting Dashboard",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    tools: ["n8n", "Airtable", "Google Sheets", "Slack"],
    description: "Engineered a self-hosted n8n data sync pipeline for a marketing agency managing 12+ client accounts. The system pulls campaign data from multiple ad platforms every 6 hours, normalizes it in Airtable, generates automated weekly performance reports in Google Sheets, and posts a summary digest in the team's Slack channel every Monday morning.",
    results: "Eliminated 8 hours of manual reporting per week • Real-time data across 12 client accounts",
  },
];

function ProjectCard({ project, defaultOpen = false }: { project: Project; defaultOpen?: boolean }) {
  const [expanded, setExpanded] = useState(defaultOpen);

  return (
    <SpotlightCard>
      <Card className="overflow-hidden border-border/70 card-lift">
        <div className="relative aspect-video">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            className="w-full h-full"
            fallbackClassName="w-full h-full aspect-video"
          />
          <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sage-500/90 text-white backdrop-blur-sm">
            <CheckCircle2 size={12} />
            Completed
          </div>
        </div>

        <button
          type="button"
          className="w-full p-5 flex items-center justify-between text-left cursor-pointer hover:bg-sand/30 dark:hover:bg-white/5 transition-colors"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={`${project.title} — ${expanded ? "collapse" : "expand"} details`}
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            {/* Tool logo row */}
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-sage-100 dark:bg-sage-500/10 text-sage-600 dark:text-sage-500 border border-sage-500/20"
                >
                  {toolIcons[tool] && (
                    <Image
                      src={toolIcons[tool]}
                      alt=""
                      width={14}
                      height={14}
                      unoptimized
                      className="w-3.5 h-3.5"
                    />
                  )}
                  {tool}
                </span>
              ))}
            </div>
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
                <div className="glass-panel p-4 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">About this project</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Results</p>
                    <div className="flex flex-wrap gap-2">
                      {project.results.split(" • ").map((result) => (
                        <span
                          key={result}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
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
    <section
      id="work"
      ref={ref}
      className="py-20 md:py-28 bg-background"
      role="region"
      aria-label="Featured projects"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow number="03" label="FEATURED PROJECTS" />
          <MaskReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Work
            </h2>
          </MaskReveal>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Real automation systems I&apos;ve built for real businesses.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} defaultOpen={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
