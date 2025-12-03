import React from "react";
import { motion } from "framer-motion";

const FloatingBadge: React.FC<{
  icon: React.ReactNode;
  text: string;
  className?: string;
  delay?: number;
}> = ({ icon, text, className, delay = 0 }) => {
  return (
    <motion.div
      className={`absolute flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.8 + delay, ease: "easeOut" }}
      whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
    >
      <span className="text-brand-teal">{icon}</span>
      <span className="text-sm font-semibold text-brand-black">{text}</span>
    </motion.div>
  );
};

export default FloatingBadge;
