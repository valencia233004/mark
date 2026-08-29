"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { animate, stagger } from "animejs";

interface WorkflowGraphicProps {
  className?: string;
}

export default function WorkflowGraphic({ className = "" }: WorkflowGraphicProps) {
  const svgRef = useRef<SVGSVGElement>(null);

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

  useEffect(() => {
    if (!svgRef.current) return;

    const svgLines = svgRef.current.querySelectorAll(".wf-line");
    const svgNodes = svgRef.current.querySelectorAll(".wf-node");
    const svgPulses = svgRef.current.querySelectorAll(".wf-pulse");

    // Animate lines drawing in with stroke-dashoffset
    svgLines.forEach((line) => {
      const length = (line as SVGLineElement).getTotalLength?.() || 200;
      (line as SVGLineElement).style.strokeDasharray = `${length}`;
      (line as SVGLineElement).style.strokeDashoffset = `${length}`;
    });

    // Animate lines drawing in — strokeDashoffset already set above
    animate(svgLines, {
      strokeDashoffset: 0,
      ease: "inOut(2)",
      duration: 1200,
      delay: stagger(100, { start: 600 }),
    });

    // Animate nodes scaling in
    animate(svgNodes, {
      scale: [0, 1],
      opacity: [0, 1],
      ease: "out(3)",
      duration: 800,
      delay: stagger(80, { start: 400 }),
    });

    // Start pulses after nodes are in
    animate(svgPulses, {
      scale: [1, 2],
      opacity: [0.3, 0],
      ease: "out(2)",
      duration: 2000,
      delay: stagger(500, { start: 1800 }),
      loop: true,
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 260 210"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Lines */}
      {lines.map(([from, to], i) => (
        <line
          key={`line-${i}`}
          className="wf-line"
          x1={nodes[from].cx}
          y1={nodes[from].cy}
          x2={nodes[to].cx}
          y2={nodes[to].cy}
          stroke="#C2703E"
          strokeWidth="1.5"
          strokeOpacity="0.25"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <circle
          key={`node-${i}`}
          className="wf-node"
          cx={node.cx}
          cy={node.cy}
          r={i === 0 || i === 3 ? 6 : 4}
          fill={i === 0 || i === 3 ? "#C2703E" : "#7A8B6F"}
          fillOpacity={i === 0 || i === 3 ? 0.5 : 0.35}
          style={{ opacity: 0, transformOrigin: `${node.cx}px ${node.cy}px` }}
        />
      ))}

      {/* Pulsing accents on key nodes */}
      {[0, 3].map((idx) => (
        <circle
          key={`pulse-${idx}`}
          className="wf-pulse"
          cx={nodes[idx].cx}
          cy={nodes[idx].cy}
          r={6}
          fill="none"
          stroke="#C2703E"
          strokeWidth="1"
          strokeOpacity="0.3"
          style={{ transformOrigin: `${nodes[idx].cx}px ${nodes[idx].cy}px` }}
        />
      ))}
    </svg>
  );
}
