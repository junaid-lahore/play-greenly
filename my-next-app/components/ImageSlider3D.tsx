"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/slider1.png",
  "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/slider2.png",
  "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/slider3.png"
];

export default function ImageSlider3D() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center">
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-72 h-72"
      >
        <Image
          src={images[index]}
          alt="Eco product"
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  );
}
