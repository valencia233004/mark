"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GitBranch, Zap, FileText, CalendarCheck, ChevronDown, CheckCircle2 } from "lucide-react";
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

const serviceDetails: Record<string, {
  detailedDescription: string;
  image: string;
  includes: string[];
}> = {
  "CRM & Pipeline Setup": {
    detailedDescription:
      "I build custom CRM pipelines in GoHighLevel that give you full visibility into every lead and deal. From initial contact to closed-won, every stage is defined, automated, and tracked — so you always know where your revenue stands.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    includes: [
      "Custom pipeline stages tailored to your sales process",
      "Automated lead scoring and assignment rules",
      "Real-time dashboard with deal values and conversion rates",
      "Integration with your existing tools (email, calendar, forms)",
    ],
  },
  "Workflow Automation": {
    detailedDescription:
      "I design and build multi-step automation workflows using n8n, Zapier, and Make that connect your tools and eliminate repetitive tasks. Every workflow is tested, documented, and built to scale with your business.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop",
    includes: [
      "Custom trigger-based workflows across platforms",
      "Error handling and failure notifications",
      "Self-hosted n8n setups for unlimited workflows",
      "Comprehensive workflow documentation",
    ],
  },
  "Funnel & Landing Page Builds": {
    detailedDescription:
      "I create high-converting landing pages and funnels in GoHighLevel that capture leads and feed them directly into your automated follow-up system. Every page is mobile-optimized and connected to your CRM.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    includes: [
      "Mobile-responsive opt-in pages",
      "A/B testing setup for headlines and CTAs",
      "Form submissions auto-synced to your CRM pipeline",
      "Thank-you page with next-step automation triggers",
    ],
  },
  "Appointment Booking Automation": {
    detailedDescription:
      "I set up smart booking systems that handle confirmation, reminders, and no-show follow-ups automatically. Integrated with Calendly and GoHighLevel to keep your calendar full and your no-show rate low.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&h=300&fit=crop",
    includes: [
      "Automated confirmation SMS + email on booking",
      "Smart reminder sequences (24hr, 1hr, 5min)",
      "No-show detection with automatic rebooking links",
      "Calendar sync across platforms",
    ],
  },
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

function ServiceCard({ service, index, isInView }: {
  service: typeof services[number];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;
  const number = String(index + 1).padStart(2, "0");
  const tools = serviceTools[service.title] || [];
  const details = serviceDetails[service.title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: 0.15 + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

            {/* Learn more button */}
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors cursor-pointer"
              aria-expanded={expanded}
              aria-label={`${service.title} — ${expanded ? "collapse" : "expand"} details`}
            >
              <span>{expanded ? "Show less" : "Learn more"}</span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex items-center"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.div>
            </button>
          </CardHeader>

          {/* Expandable detail panel */}
          <AnimatePresence initial={false}>
            {expanded && details && (
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
                  className="px-6 pb-6 border-t border-border/50 pt-4 space-y-4"
                >
                  {/* Service image */}
                  <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "5/3" }}>
                    <Image
                      src={details.image}
                      alt={`${service.title} illustration`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  {/* Detailed description */}
                  <div className="glass-panel p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {details.detailedDescription}
                    </p>
                  </div>

                  {/* Includes list */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2">
                      {details.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tool logos in expanded view */}
                  {tools.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Tools used
                      </p>
                      <div className="flex items-center gap-3">
                        {tools.map((tool) => (
                          <div key={tool.name} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-sage-100 dark:bg-sage-500/10 text-sage-600 dark:text-sage-500 border border-sage-500/20">
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              width={14}
                              height={14}
                              unoptimized
                              className="w-3.5 h-3.5"
                            />
                            {tool.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </SpotlightCard>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
