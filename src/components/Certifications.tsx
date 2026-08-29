"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import ImageWithFallback from "@/components/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import MaskReveal from "@/components/MaskReveal";
import SectionEyebrow from "@/components/SectionEyebrow";

const certifications = [
  { title: "GoHighLevel Certified Admin", image: "/images/certificate-1.jpg" },
  { title: "n8n Workflow Automation", image: "/images/certificate-2.jpg" },
  { title: "Zapier Automation Certification", image: "/images/certificate-3.jpg" },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 md:py-28 bg-background"
      role="region"
      aria-label="Certifications and credentials"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow number="05" label="CREDENTIALS" />
          <MaskReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Certifications
            </h2>
          </MaskReveal>
          <p className="mt-3 text-muted-foreground max-w-xl">Credentials I&apos;ve earned.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              <TiltCard maxTilt={4}>
                <Card className="overflow-hidden border-border/70 card-lift">
                  <div className="relative aspect-[4/3]">
                    <ImageWithFallback
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      fill
                      className="w-full h-full"
                      fallbackClassName="w-full h-full aspect-[4/3]"
                    />
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sage-500/90 text-white backdrop-blur-sm">
                      <CheckCircle2 size={12} />
                      Completed
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-foreground">{cert.title}</h3>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
