
import React from "react";

interface Props {
  title: string;
  date: string;
  author: string;
}

export const BlogHero = ({ title, date, author }: Props) => {
  // Split title for two-line display
  const formatTitle = (title: string) => {
    if (title.includes("What Really Performs Better?")) {
      return {
        firstLine: title.replace(" What Really Performs Better?", ""),
        secondLine: "What Really Performs Better?"
      };
    }
    if (title.includes("(And Why It Matters)")) {
      return {
        firstLine: title.replace(" (And Why It Matters)", ""),
        secondLine: "(And Why It Matters)"
      };
    }
    if (title.includes("From Tee to Sea: The Timeline for Biodegradable Golf Balls to Dissolve")) {
      return {
        firstLine: "From Tee to Sea",
        secondLine: "The Timeline for Biodegradable Golf Balls to Dissolve"
      };
    }
    if (title.includes("PlayGreenly vs Other Eco Golf Balls Which One Should You Choose?")) {
      return {
        firstLine: "PlayGreenly vs Other Eco Golf Balls",
        secondLine: "Which One Should You Choose?"
      };
    }
    if (title.includes("Here's the Truth")) {
      return {
        firstLine: title.replace(" Here's the Truth", "").replace("\nHere's the Truth", ""),
        secondLine: "Here's the Truth"
      };
    }
    return { firstLine: title, secondLine: null };
  };
  
  const { firstLine, secondLine } = formatTitle(title);
  
  return (
    <div className="text-center pt-20 pb-20 md:pb-28 px-6">
      <h1 className="font-bold font-title text-brand-black leading-relaxed">
        {secondLine ? (
          <>
            {/* Primary line - H1 at 32px */}
            <div className="text-[32px] mb-3 max-w-4xl mx-auto tracking-tight leading-[1.3]">
              {firstLine}
            </div>
            {/* Secondary line - complementary sizing */}
            <div className="text-[24px] text-brand-green font-medium tracking-wide leading-[1.4]">
              {secondLine}
            </div>
          </>
        ) : (
          <span className="text-[32px] leading-[1.3] max-w-4xl mx-auto block">{title}</span>
        )}
      </h1>
      {/* Premium spacing and refined typography */}
      <p className="mt-8 text-lg text-brand-black/70 tracking-wide font-medium">
        <span>{date}</span> <span className="text-brand-green/60 mx-2">•</span> <span>{author}</span>
      </p>
    </div>
  );
};
