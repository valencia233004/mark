"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard";
import MaskReveal from "@/components/MaskReveal";
import SectionEyebrow from "@/components/SectionEyebrow";

const testimonials = [
  {
    id: "testimonial-1",
    quote: "John Mark completely transformed how we handle leads. Before working with him, we were manually following up with every inquiry — now our GHL pipeline does it automatically. We've cut our response time from hours to under 2 minutes. Absolute game-changer.",
    name: "Sarah Mitchell",
    role: "Founder, BrightPath Consulting",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote: "We had workflows scattered across three different platforms with no real connection between them. John Mark built us a unified n8n system that syncs everything — CRM updates, Slack notifications, calendar bookings — all running on autopilot. Saved us easily 15+ hours a week.",
    name: "David Chen",
    role: "Operations Manager, ScaleUp Agency",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote: "I was skeptical about automation — thought it would feel impersonal. But John Mark designed our follow-up sequences so well that clients actually think we have a dedicated team reaching out. Our booking rate went up 40% in the first month.",
    name: "Emma Rodriguez",
    role: "CEO, Luxe Real Estate Group",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 md:py-28 bg-sand/40 dark:bg-warm-brown/50"
      role="region"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow number="04" label="CLIENT FEEDBACK" />
          <MaskReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Testimonials
            </h2>
          </MaskReveal>
          <p className="mt-3 text-muted-foreground max-w-xl">What clients say about working with me.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              <SpotlightCard>
                <Card className="border-border/70 bg-card card-lift h-full relative overflow-hidden">
                  {/* Decorative quote mark */}
                  <span
                    className="absolute top-4 right-6 font-[family-name:var(--font-display)] text-8xl font-bold text-amber-500/[0.05] select-none pointer-events-none leading-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <CardContent className="p-6 sm:p-8 relative z-10">
                    <StarRating count={t.rating} />

                    <blockquote className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-500/30 flex-shrink-0">
                        <Image
                          src={t.photo}
                          alt={t.name}
                          width={48}
                          height={48}
                          unoptimized
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-display)] font-semibold text-foreground text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
