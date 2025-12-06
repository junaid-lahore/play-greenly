import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ImageSlider3D from "components/ImageSlider3D";
import {
  Recycle,
  Waves,
  Fish,
  ShieldOff,
} from "lucide-react";

const OurValuesSection: React.FC = () => {
  return (
    <section className="bg-brand-light-bg py-24 sm:py-32">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-green font-bold tracking-widest text-sm uppercase">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6 leading-tight">
              Committed to Sustainability and Fun
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong>Eco-Friendly Products:</strong> Made from biodegradable materials that are safe for the planet, leaving no trace behind.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong>Safe for All Ages:</strong> Non-toxic and perfect for worry-free family fun, whether at the beach or in your backyard.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              <strong>Durable for Casual Use:</strong> Built for reliable performance and lasting enjoyment for players of all levels.
            </p>
            <Link
              to="/about-us"
              className="inline-block px-8 py-3 bg-brand-teal text-white font-semibold rounded-lg shadow-md hover:bg-brand-green transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
          
          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <ImageSlider3D />
          </motion.div>
        </div>
        
        {/* Benefits Section */}
        <div className="mt-24">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            aria-describedby="benefits-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              {
                icon: <Recycle className="h-10 w-10 text-brand-teal" />,
                title: "Eco-Friendly Materials",
                text: "Our balls are made from non-toxic, biodegradable components.",
              },
              {
                icon: <Waves className="h-10 w-10 text-brand-teal" />,
                title: "Water Soluble",
                text: "Dissolves completely in water, leaving no trace behind.",
              },
              {
                icon: <Fish className="h-10 w-10 text-brand-teal" />,
                title: "Marine Life Safe",
                text: "Poses no threat to fish or other aquatic ecosystems.",
              },
              {
                icon: <ShieldOff className="h-10 w-10 text-brand-teal" />,
                title: "Zero Microplastics",
                text: "Prevents long-term pollution from plastic waste.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-white border-2 border-gray-200 rounded-lg transition-all duration-300 group hover:border-brand-teal hover:shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2 font-title">
                  {benefit.title}
                </h3>
                <p className="text-sm text-brand-black/80 font-body">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
