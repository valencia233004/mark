"use client";

interface SectionEyebrowProps {
  number: string;
  label: string;
}

export default function SectionEyebrow({ number, label }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-[1px] bg-amber-500/30" aria-hidden="true" />
      <span className="uppercase text-xs font-medium tracking-[0.2em] text-amber-500/70 whitespace-nowrap">
        // {number}&nbsp;&nbsp;{label}
      </span>
    </div>
  );
}
