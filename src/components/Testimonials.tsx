"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquareQuote } from "lucide-react";
import MaskReveal from "@/components/MaskReveal";

const testimonials = [
  { id: "testimonial-1", quote: "Placeholder — client testimonial coming soon.", name: "Client Name", business: "Business Name" },
  { id: "testimonial-2", quote: "Placeholder — client testimonial coming soon.", name: "Client Name", business: "Business Name" },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-28 bg-sand/40 dark:bg-warm-brown/50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <MaskReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Testimonials
            </h2>
          </MaskReveal>
          <p className="mt-3 text-muted-foreground max-w-xl">What clients say about working with me.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              <Card className="border-border/70 bg-card card-lift">
                <CardContent className="p-6 sm:p-8">
                  <MessageSquareQuote className="w-8 h-8 text-amber-500/40 mb-4" />
                  <blockquote className="text-base sm:text-lg italic text-muted-foreground leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 pt-4 border-t border-border/50">
                    <p className="font-[family-name:var(--font-display)] font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.business}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
