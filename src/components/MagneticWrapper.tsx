"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticWrapper({
  children,
  className = "",
  strength = 0.3,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    // Clamp to max 8px offset
    x.set(Math.max(-8, Math.min(8, deltaX)));
    y.set(Math.max(-8, Math.min(8, deltaY)));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
