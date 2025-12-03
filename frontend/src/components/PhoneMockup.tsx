import React from "react";
import { motion } from "framer-motion";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const FloatingBadge: React.FC<BadgeProps> = ({ icon, text, className }) => {
  return (
    <motion.div
      className={`absolute flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <span className="text-brand-teal">{icon}</span>
      <span className="text-sm font-semibold text-brand-black">{text}</span>
    </motion.div>
  );
};

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[600px] bg-gray-100 border-2 border-gray-200 rounded-[40px] shadow-2xl p-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-100 rounded-b-xl"></div>
      <div className="w-full h-full bg-black rounded-[30px] overflow-hidden">
        <video
          src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Golf%20Ball%20Biodegrading%20In%20Water%20Timelapse.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      </div>
    </div>
  );
};

export default PhoneMockup;
