"use client";

import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating?: number;
  avatar?: string;
}

interface Props {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      {/* Rating */}
      {testimonial.rating && (
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>
      )}

      {/* Message */}
      <p className="text-brand-black/80 text-base leading-relaxed mb-6">
        “{testimonial.text}”
      </p>

      {/* Footer: User Info */}
      <div className="flex items-center mt-auto pt-4">
        {testimonial.avatar && (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          />
        )}

        <div>
          <h4 className="text-brand-black font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
