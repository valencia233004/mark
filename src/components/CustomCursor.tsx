"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 25 });
  const interactiveSelector = "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

  useEffect(() => {
    const match = window.matchMedia("(pointer: fine)");
    setIsPointerFine(match.matches);
    const handler = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    match.addEventListener("change", handler);
    return () => match.removeEventListener("change", handler);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    },
    [cursorX, cursorY]
  );

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    document.documentElement.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        setIsHovering(true);
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [isPointerFine, onMouseMove, onMouseLeave]);

  if (!isPointerFine) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-500 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          borderColor: isHovering ? "rgba(122, 139, 111, 0.3)" : "rgba(194, 112, 62, 0.3)",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
        }}
        aria-hidden="true"
      />
    </>
  );
}
