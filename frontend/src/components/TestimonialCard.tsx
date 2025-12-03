import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "utils/testimonials";
import { Star } from "lucide-react";

interface Props {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <Card className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden h-56">
      <CardContent className="p-6 text-center flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600 italic mb-4 text-sm">"{testimonial.quote}"</p>
        </div>
        <p className="font-semibold text-gray-800 text-sm mt-auto">
          - {testimonial.name}
        </p>
      </CardContent>
    </Card>
  );
};
