import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPlayGreenly: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Packaging'.png"
              alt="Play Greenly Product Packaging"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-brand-green mb-6">
              Redefining Golf with a Lighter Footprint
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At PlayGreenly, we're rethinking golf for a new generation of players
              who care about their impact. Our balls are made from biodegradable
              PVA and tested to dissolve naturally in water within ~10 days.
              Whether it's backyard practice or lakeside shots, our goal is
              simple — leave no trace. Backed by lab-tested performance, no
              heavy metals, and safety tests for aquatic life, PlayGreenly helps
              you swing freely, with purpose.
            </p>
            <Button
              variant="outline"
              className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white group text-base px-6 py-3"
            >
              Learn More About Our Mission
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlayGreenly;
