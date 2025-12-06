"use client";

import { motion } from "framer-motion";
import { Hand, ShoppingCart, Users } from "lucide-react";

const steps = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-brand-green" />,
    title: "Purchase on Amazon",
    description:
      "Start by purchasing our eco-friendly products from our official Amazon store.",
  },
  {
    icon: <Hand className="w-8 h-8 text-brand-green" />,
    title: "Receive Your Gear",
    description:
      "Your order will be delivered promptly, ready for your next game.",
  },
  {
    icon: <Users className="w-8 h-8 text-brand-green" />,
    title: "Enjoy a Greener Game",
    description:
      "Play with confidence, knowing you're using products that are safe for the planet.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold text-brand-teal uppercase tracking-widest">
                How It Works
              </span>

              <h2 className="text-4xl font-bold text-brand-green my-4 font-title">
                A Simple Path to Sustainable Play
              </h2>

              <p className="text-lg text-brand-black/80 max-w-lg">
                Joining the green movement is easy. Follow these simple steps to
                start playing with our eco-friendly gear.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Section%205.png"
                alt="Group of golfers on a course"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/howitworks2.png"
                alt="Golfer holding a club"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-6 bg-gray-50 rounded-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  <div className="flex-shrink-0 mr-6">{step.icon}</div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-brand-black font-title">
                      {step.title}
                    </h3>
                    <p className="text-brand-black/70">{step.description}</p>
                  </div>

                  <div className="text-4xl font-bold text-gray-200 ml-4">
                    0{index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
