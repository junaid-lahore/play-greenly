"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingBadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  delay?: number;
}

export default function FloatingBadge({
  icon,
  text,
  className = "",
  delay = 0,
}: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay },
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={`absolute bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 border border-gray-200 ${className}`}
    >
      <div className="text-brand-teal">{icon}</div>
      <span className="text-sm font-semibold text-brand-black">{text}</span>
    </motion.div>
  );
}
