"use client";

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve";
  className?: string;
  fillClassName?: string;
}

export default function SectionDivider({
  variant = "wave",
  className = "",
  fillClassName = "fill-background",
}: SectionDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${className}`} aria-hidden="true">
      {variant === "wave" && (
        <svg
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          className={`block w-full h-[40px] md:h-[50px] ${fillClassName}`}
        >
          <path d="M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30 L1200,50 L0,50 Z" />
        </svg>
      )}
      {variant === "angle" && (
        <svg
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          className={`block w-full h-[40px] md:h-[50px] ${fillClassName}`}
        >
          <path d="M0,50 L0,20 L600,50 L1200,20 L1200,50 Z" />
        </svg>
      )}
      {variant === "curve" && (
        <svg
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          className={`block w-full h-[40px] md:h-[50px] ${fillClassName}`}
        >
          <path d="M0,50 C0,50 0,0 600,0 C1200,0 1200,50 1200,50 Z" />
        </svg>
      )}
    </div>
  );
}
