"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PhoneMockup() {
  return (
    <div className="relative w-[260px] h-[520px] bg-black rounded-[40px] shadow-2xl overflow-hidden border-4 border-gray-800">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>

      {/* Screen Image */}
      <motion.img
        src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/mobile-video.png"
        alt="PlayGreenly Mobile Display"
        className="w-full h-full object-cover"
        initial={{ opacity: 0.6, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Side shadow effects */}
      <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none"></div>

      {/* Bottom Reflection */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
}
