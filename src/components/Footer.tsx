"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.footer
      ref={ref}
      className="bg-warm-brown dark:bg-[#0F0D0B] border-t border-white/5"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <small className="text-sm text-warm-gray-light">&copy; {year} John Mark Valencia</small>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-warm-gray-light hover:text-amber-500 transition-colors cursor-pointer"
        >
          Back to top &uarr;
        </button>
      </div>
    </motion.footer>
  );
}
