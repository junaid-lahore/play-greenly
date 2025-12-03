import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/4-eco-golf-ball-half-dissolved-underwater.png",
  "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Product%20Image%202.jpg",
  "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/IMG_2027.png",
];

const radius = 200;
const angleStep = 360 / images.length;


const ImageSlider3D: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the component is visible
        triggerOnce: false, // Re-trigger every time it enters/leaves the viewport
    });

    return (
        <div ref={ref} className="relative w-full h-96 flex items-center justify-center">
            <div className="relative w-96 h-96" style={{ perspective: 1200 }}>
                {/* Revolving Images */}
                <motion.div
                    className="absolute w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: inView ? 360 : 0 }}
                    transition={{
                        duration: inView ? 25 : 0,
                        ease: "linear",
                        repeat: inView ? Infinity : 0,
                        repeatType: "loop",
                    }}
                    initial={{ rotateY: 0 }}
                >
                    {images.map((src, i) => {
                        const angle = i * angleStep;
                        return (
                            <motion.div
                                key={i}
                                className="absolute w-48 h-64 top-1/2 left-1/2 -mt-32 -ml-24"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    zIndex: Math.cos(angle * (Math.PI / 180)) > 0 ? 3 : 1,
                                }}
                            >
                                <img
                                  src={src}
                                  alt={`carousel-image-${i}`}
                                  className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}

export default ImageSlider3D;
