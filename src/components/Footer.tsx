"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, ArrowUp } from "lucide-react";

/* ── Brand SVG icons for realistic social links ── */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
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
