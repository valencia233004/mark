"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GitBranch, Zap, FileText, CalendarCheck } from "lucide-react";

const services = [
  {
    icon: GitBranch,
    title: "CRM & Pipeline Setup",
    description:
      "Organize your leads and customers into a clear pipeline that shows exactly where every deal stands.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Automatic follow-ups, tagging, and notifications so no lead waits longer than it should.",
  },
  {
    icon: FileText,
    title: "Funnel & Landing Page Builds",
    description:
      "Opt-in pages and forms that feed directly into your automated system.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking Automation",
    description:
      "Calendars connected to confirmation and reminder workflows.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-28 bg-sand/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-warm-charcoal tracking-tight">
            Services
          </h2>
          <p className="mt-3 text-warm-gray max-w-xl">
            Systems designed to keep your business running without constant
            manual effort.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {/* (#14 — removed hover:shadow-md to avoid false interactive cues) */}
                {/* (#16 — CardDescription moved into CardHeader for tighter grouping) */}
                <Card className="h-full transition-shadow duration-300 border-border/70 cursor-default">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
