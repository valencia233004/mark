"use client";

import { useRef, useCallback } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={ref}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
