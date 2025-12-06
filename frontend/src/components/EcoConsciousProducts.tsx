import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PhoneMockup from "components/PhoneMockup";
import FloatingBadge from "components/FloatingBadge";
import { Leaf, Droplets, Fish, Award, CheckCircle } from "lucide-react";

const EcoConsciousProducts: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-brand-green mb-4">
              Eco-Conscious Products
            </h2>
            <h3 className="text-2xl font-semibold text-brand-black mb-6">
              Play Smart, Live Greenly
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our products are designed for the eco-conscious athlete who
              refuses to compromise on performance. From biodegradable golf
              balls to sustainable court tapes, we're committed to reducing
              environmental impact without sacrificing quality.
            </p>
            <a
              href="https://www.amazon.com/dp/B0D74R8FHZ?ref=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&ref_=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&social_share=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&previewDoh=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-brand-teal text-white hover:bg-brand-green transition-colors duration-300 rounded-full px-8 py-6 text-base font-semibold"
              >
                Shop on Amazon
              </Button>
            </a>
          </motion.div>

          {/* Right Column: Video in Phone Mockup */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <PhoneMockup />
            {/* Floating Badges */}
            <FloatingBadge
              icon={<Droplets size={20} />}
              text="Water-Dissolvable"
              className="top-16 -left-24"
              delay={0.2}
            />
            <FloatingBadge
              icon={<Fish size={20} />}
              text="Tested for Fish Safety"
              className="top-1/2 -right-28"
              delay={0.4}
            />
            <FloatingBadge
              icon={<Award size={20} />}
              text="Made for Recreation"
              className="bottom-24 -left-20"
              delay={0.6}
            />
            <FloatingBadge
              icon={<Leaf size={20} />}
              text="Made from PVA"
              className="bottom-8 -right-16"
              delay={0.8}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcoConsciousProducts;
