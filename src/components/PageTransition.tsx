"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("intro-played");
    if (!hasPlayed) {
      setShowIntro(true);
      const timer = setTimeout(() => {
        setShowIntro(false);
        setIntroComplete(true);
        sessionStorage.setItem("intro-played", "true");
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      setIntroComplete(true);
    }
  }, []);

  return (
    <>
      {/* Intro overlay */}
      <AnimatePresence>
        {showIntro && (
          <>
            {/* Top half */}
            <motion.div
              className="fixed inset-x-0 top-0 h-1/2 bg-[#1A1714] z-[9999] flex items-end justify-center"
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            {/* Bottom half */}
            <motion.div
              className="fixed inset-x-0 bottom-0 h-1/2 bg-[#1A1714] z-[9999]"
              initial={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            {/* Center text */}
            <motion.div
              className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-amber-500">
                John Mark
              </h1>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
