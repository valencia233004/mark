"use client";

import { useRef, useEffect, useState } from "react";

interface MaskRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function MaskReveal({ children, className = "", delay = 0 }: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`mask-reveal ${revealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
