"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

const toolLogos = [
  { name: "GoHighLevel", url: "https://cdn.simpleicons.org/gohighlevel/2A2522" },
  { name: "n8n", url: "https://cdn.simpleicons.org/n8n/2A2522" },
  { name: "Zapier", url: "https://cdn.simpleicons.org/zapier/2A2522" },
  { name: "Make", url: "https://cdn.simpleicons.org/make/2A2522" },
];

const textSkills = ["CRM Setup", "Workflow Automation"];

function LogoItem({
  logo,
  ariaHidden = false,
}: {
  logo: (typeof toolLogos)[number];
  ariaHidden?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="flex items-center gap-3 px-8"
      aria-hidden={ariaHidden || undefined}
    >
      {/* (#11 — fallback to text if CDN 404s) */}
      {hasError ? (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-sand text-xs font-bold text-warm-gray">
          {logo.name.charAt(0)}
        </span>
      ) : (
        <Image
          src={logo.url}
          alt={`${logo.name} logo`}
          width={28}
          height={28}
          unoptimized
          className="h-7 w-auto opacity-70 transition-opacity group-hover:opacity-100"
          onError={() => setHasError(true)}
        />
      )}
      <span className="text-sm font-medium text-warm-gray whitespace-nowrap">
        {logo.name}
      </span>
    </div>
  );
}

function LogoMarquee() {
  // (#10 — quadrupled for seamless loop at wide viewports)
  const repeated = [...toolLogos, ...toolLogos, ...toolLogos, ...toolLogos];

  return (
    <div
      className="mt-8 relative overflow-hidden"
      aria-label="Tools I use"
      role="region"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      <div className="group flex w-max animate-marquee hover:[animation-play-state:paused]">
        {repeated.map((logo, i) => (
          <LogoItem
            key={`${logo.name}-${i}`}
            logo={logo}
            ariaHidden={i >= toolLogos.length}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-warm-charcoal tracking-tight">
          About
        </h2>

        <div className="mt-6 space-y-4 text-base sm:text-lg text-warm-gray leading-relaxed">
          <p>
            A lead that never gets a follow-up text. A booking that falls
            through because no reminder went out. A customer who slips out of
            the pipeline because nobody moved them to the next stage — that&apos;s
            where businesses quietly lose money, and it&apos;s what I fix.
          </p>
          <p>
            Based in the Philippines, I work with businesses in the US, UK, and
            Australia, turning manual, error-prone processes into systems that
            run on their own.
          </p>
        </div>

        {/* Logo marquee */}
        <LogoMarquee />

        {/* (#12 — cursor-default on non-interactive tags) */}
        <div className="mt-5 flex flex-wrap gap-3" role="list" aria-label="Additional skills">
          {textSkills.map((skill) => (
            <span
              key={skill}
              role="listitem"
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-sage-100 text-sage-600 border border-sage-500/20 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
