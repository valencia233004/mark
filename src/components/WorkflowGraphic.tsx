"use client";

import { motion } from "framer-motion";

interface WorkflowGraphicProps {
  className?: string;
}

export default function WorkflowGraphic({ className = "" }: WorkflowGraphicProps) {
  const nodes = [
    { cx: 40, cy: 30 },
    { cx: 120, cy: 60 },
    { cx: 80, cy: 130 },
    { cx: 170, cy: 110 },
    { cx: 200, cy: 40 },
    { cx: 150, cy: 170 },
    { cx: 50, cy: 180 },
    { cx: 220, cy: 150 },
  ];

  const lines = [
    [0, 1],
    [1, 2],
    [1, 4],
    [2, 3],
    [3, 4],
    [2, 6],
    [3, 5],
    [5, 7],
    [4, 7],
  ];

  return (
    <svg
      viewBox="0 0 260 210"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Lines */}
      {lines.map(([from, to], i) => (
        <motion.line
          key={`line-${i}`}
          x1={nodes[from].cx}
          y1={nodes[from].cy}
          x2={nodes[to].cx}
          y2={nodes[to].cy}
          stroke="#C2703E"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8 + i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.cx}
          cy={node.cy}
          r={i === 0 || i === 3 ? 6 : 4}
          fill={i === 0 || i === 3 ? "#C2703E" : "#7A8B6F"}
          fillOpacity={i === 0 || i === 3 ? 0.5 : 0.35}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6 + i * 0.08,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Pulsing accents on key nodes */}
      {[0, 3].map((idx) => (
        <motion.circle
          key={`pulse-${idx}`}
          cx={nodes[idx].cx}
          cy={nodes[idx].cy}
          r={6}
          fill="none"
          stroke="#C2703E"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            delay: 1.5 + idx * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
