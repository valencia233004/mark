"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, Mail, Phone, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: ExternalLink },
  { label: "GitHub", href: "https://github.com", icon: Code2 },
  { label: "Email", href: "mailto:valenciajmark23@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:09512245171", icon: Phone },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.footer
      ref={ref}
      className="bg-warm-brown dark:bg-[#0F0D0B] relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="contentinfo"
    >
      {/* Gradient top border */}
      <div
        className="h-[1px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(194, 112, 62, 0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Column 1 — Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream">
              John Mark
            </h3>
            <p className="mt-3 text-sm text-warm-gray-light leading-relaxed max-w-xs">
              Automation systems that save your business hours every week.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-gray-light/70 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-gray-light hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-gray-light/70 mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-warm-gray-light hover:text-amber-500 hover:bg-white/10 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <small className="text-sm text-warm-gray-light/70">
            &copy; {year} John Mark Valencia. All rights reserved.
          </small>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-sm text-warm-gray-light hover:text-amber-500 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
