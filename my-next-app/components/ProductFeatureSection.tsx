"use client";

import React from "react";
import { motion } from "framer-motion";

// Reusable small feature card
const FeatureCallout: React.FC<{
  title: string;
  description: string;
  side: "left" | "right";
}> = ({ title, description, side }) => (
  <div
    className={`flex flex-col ${
      side === "left" ? "items-end text-right" : "items-start text-left"
    }`}
  >
    <h3 className="font-bold text-lg text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>

    <div className="w-24 h-px bg-green-500 mt-2 relative">
      <div
        className={`absolute -top-1 w-2 h-2 rounded-full bg-green-500 ${
          side === "left" ? "-right-px" : "-left-px"
        }`}
      ></div>
    </div>
  </div>
);

const ProductFeatureSection: React.FC = () => {
  const leftFeatures = [
    {
      title: "Eco-Dissolvable Core",
      description:
        "Breaks down naturally in water within 2 weeks — safe for marine life.",
    },
    {
      title: "Non-Toxic Materials",
      description:
        "Made from 95% PVA + 5% natural plasticizer, leaving no harmful residue.",
    },
    {
      title: "Backyard & Lakeside Safe",
      description:
        "Practice anywhere — ponds, gardens, or beaches — without cleanup worries.",
    },
  ];

  const rightFeatures = [
    {
      title: "Soft Contact Feel",
      description:
        "Smooth impact design gives a natural swing without harsh bounce.",
    },
    {
      title: "Zero Plastic Waste",
      description:
        "Unlike conventional balls, it won’t sit in soil or water for decades.",
    },
    {
      title: "Guilt-Free Practice",
      description:
        "Perfect for casual golfers who want fun play without hurting the planet.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Play Smart, Live Greenly
        </h2>

        <p className="mt-2 text-lg text-gray-600">
          Discover how our biodegradable golf balls protect nature while keeping
          your swing effortless.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-16">
          {/* LEFT SIDE FEATURES */}
          <div className="space-y-12">
            {leftFeatures.map((feature, idx) => (
              <FeatureCallout key={idx} {...feature} side="left" />
            ))}
          </div>

          {/* CENTER FLOATING IMAGE */}
          <motion.div
            className="flex justify-center items-center"
            animate={{ y: ["-10px", "10px"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <img
              src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/ball.png"
              alt="PlayGreenly Biodegradable Golf Ball"
              className="max-w-xs drop-shadow-lg"
              loading="lazy"
              width="320"
              height="320"
            />
          </motion.div>

          {/* RIGHT SIDE FEATURES */}
          <div className="space-y-12">
            {rightFeatures.map((feature, idx) => (
              <FeatureCallout key={idx} {...feature} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureSection;
