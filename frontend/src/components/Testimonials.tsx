import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "utils/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { useIntersectionObserver } from "utils/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  variant?: "single" | "multi";
}

export const Testimonials = ({ variant = "multi" }: TestimonialsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isVisible = useIntersectionObserver(carouselRef, {
    threshold: 0.1,
  });

  const scrollNext = useCallback(() => {
    if (api && !isHovering && isVisible) {
      api.scrollNext();
    }
  }, [api, isHovering, isVisible]);

  useEffect(() => {
    if (typeof window === "undefined" || !api) {
      return;
    }

    const interval = setInterval(scrollNext, 5000);
    return () => clearInterval(interval);
  }, [api, scrollNext]);

  const isMulti = variant === "multi";

  return (
    <section className="py-20 bg-brand-light-bg">
      <div
        ref={carouselRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ willChange: "transform" }}
        className="container mx-auto"
      >
        <h2 className="text-h2 font-bold text-brand-green mb-12 text-center font-title">
          What Our Golfers Say
        </h2>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className={isMulti ? "-ml-4" : ""}>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className={cn("pl-4", {
                  "md:basis-1/2": isMulti,
                })}
              >
                <div className="p-1 h-full">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-brand-green/80 text-white hover:bg-brand-green" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-brand-green/80 text-white hover:bg-brand-green" />
        </Carousel>

        {/* Amazon Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.amazon.com/dp/B0D74R8FHZ?ref=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&ref_=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&social_share=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&previewDoh=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-green hover:text-brand-teal transition-colors duration-300 text-sm font-medium"
            aria-label="Read all customer reviews on Amazon (opens in new tab)"
          >
            Read all reviews on Amazon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
