import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const EcoProductsSection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand-teal uppercase tracking-widest">
              Eco-Conscious Products
            </h2>
            <h1 className="text-5xl font-bold text-brand-green my-4 font-title">
              Play Smart,
              <br />
              Live Greenly
            </h1>
            <p className="text-lg text-brand-black/80 mb-8 max-w-lg">
              Experience our range of eco-friendly, biodegradable sports gear, starting with our innovative golf balls and durable court marking tape. Choose sustainability for your game.
            </p>
            <a
              href="https://www.amazon.com/dp/B0D74R8FHZ?ref=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&ref_=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&social_share=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&previewDoh=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-brand-teal text-white font-semibold rounded-lg shadow-lg hover:bg-brand-green transition-all duration-300 transform hover:scale-105"
              >
                Shop on Amazon
              </Button>
            </a>
          </motion.div>

          {/* Right Column: Video Content */}
          <motion.div
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Video */}
            <motion.div 
              className="relative w-full max-w-md h-auto rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <video
                src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Golf%20Ball%20Biodegrading%20In%20Water%20Timelapse.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Video Blocks */}
            <motion.div
              className="absolute top-10 -left-16 w-32 h-20 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
               <video
                src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Golf%20Ball%20Biodegrading%20In%20Water%20Timelapse.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-12 -right-20 w-40 h-28 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
              animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
               <video
                src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Golf%20Ball%20Product%20Image%202.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
             <motion.div
              className="absolute top-1/2 -translate-y-1/2 -right-12 w-28 h-40 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
               <video
                src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Tape%20Bag%20Product%20Image.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcoProductsSection;
