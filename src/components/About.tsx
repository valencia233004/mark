"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import MaskReveal from "@/components/MaskReveal";
import SectionEyebrow from "@/components/SectionEyebrow";

const toolLogos = [
  { name: "GoHighLevel", url: "https://cdn.simpleicons.org/gohighlevel", brandColor: "rgba(56,178,73,0.05)" },
  { name: "n8n", url: "https://cdn.simpleicons.org/n8n", brandColor: "rgba(234,79,52,0.05)" },
  { name: "Zapier", url: "https://cdn.simpleicons.org/zapier/FF4F00", brandColor: "rgba(255,78,23,0.05)" },
  { name: "Make", url: "https://cdn.simpleicons.org/make", brandColor: "rgba(108,52,219,0.05)" },
  { name: "Google Sheets", url: "https://cdn.simpleicons.org/googlesheets", brandColor: "rgba(52,168,83,0.05)" },
  { name: "Slack", url: "https://cdn.simpleicons.org/slack", brandColor: "rgba(74,21,75,0.05)" },
  { name: "Calendly", url: "https://cdn.simpleicons.org/calendly", brandColor: "rgba(0,107,255,0.05)" },
  { name: "Airtable", url: "https://cdn.simpleicons.org/airtable", brandColor: "rgba(24,119,242,0.05)" },
];

const textSkills = ["CRM Setup", "Workflow Automation"];

function LogoItem({ logo, ariaHidden = false }: { logo: (typeof toolLogos)[number]; ariaHidden?: boolean }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/50 transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-border cursor-default"
      style={{ backgroundColor: logo.brandColor }}
      aria-hidden={ariaHidden || undefined}
    >
      {hasError ? (
        <span className="inline-flex items-center justify-center w-9 h-9 rounded bg-sand dark:bg-muted text-xs font-bold text-muted-foreground">
          {logo.name.charAt(0)}
        </span>
      ) : (
        <Image
          src={logo.url}
          alt={`${logo.name} logo`}
          width={36}
          height={36}
          unoptimized
          className="h-9 w-9 opacity-90 transition-opacity duration-200 hover:opacity-100"
          onError={() => setHasError(true)}
        />
      )}
      <span className="text-sm font-semibold text-foreground whitespace-nowrap">
        {logo.name}
      </span>
    </div>
  );
}

function LogoMarquee() {
  const repeated = [...toolLogos, ...toolLogos, ...toolLogos, ...toolLogos];

  return (
    <div className="mt-8 relative overflow-hidden" aria-label="Tools I use" role="region">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="group flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
        {repeated.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} logo={logo} ariaHidden={i >= toolLogos.length} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        <SectionEyebrow number="01" label="ABOUT ME" />
        <MaskReveal>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            About
          </h2>
        </MaskReveal>

        <div className="mt-6 space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            A lead that never gets a follow-up text. A booking that falls through because no reminder went out.
            A customer who slips out of the pipeline because nobody moved them to the next stage — that&apos;s
            where businesses quietly lose money, and it&apos;s what I fix.
          </p>
          <p>
            Based in the Philippines, I work with businesses in the US, UK, and Australia, turning manual,
            error-prone processes into systems that run on their own.
          </p>
        </div>

        <LogoMarquee />

        <div className="mt-5 flex flex-wrap gap-3" role="list" aria-label="Additional skills">
          {textSkills.map((skill) => (
            <span key={skill} role="listitem"
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-sage-100 dark:bg-sage-500/10 text-sage-600 dark:text-sage-500 border border-sage-500/20 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
