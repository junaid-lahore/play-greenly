import React from "react";
import { Button } from "@/components/ui/button";

const BiodegradableBallSection = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center pr-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
            The Future of Golf is Green
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            Our biodegradable golf balls are engineered for performance and designed to protect the planet. Made from water-soluble, non-toxic materials, they dissolve completely in water, leaving no trace behind. Now you can enjoy the game you love without harming the environment.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 self-start">
            Learn More
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/ball.png"
            alt="Biodegradable Golf Ball"
            className="w-3/4 animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default BiodegradableBallSection;

const styles = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
