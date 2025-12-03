
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProTipCTAProps {
  title: string;
  text: string;
  buttonLabel?: string;
  buttonUrl?: string;
}

export function ProTipCTA({
  title,
  text,
  buttonLabel,
  buttonUrl,
}: ProTipCTAProps) {
  const showButton = buttonLabel; // Show button if label exists
  const isLink = buttonUrl && buttonUrl !== "#"; // Check if it's a real link

  return (
    // Main container using the brand's green/teal gradient
    <div className="my-12 rounded-3xl bg-gradient-to-br from-brand-green to-brand-teal p-6 md:p-8 text-center shadow-lg">
      {/* Heading with white text for contrast, explicitly centered */}
      <h2 className="font-bold text-2xl md:text-3xl text-white mb-3 text-center">
        {title}
      </h2>

      {/* Paragraph Text with off-white text, explicitly centered */}
      <p className="max-w-2xl mx-auto text-base text-white/90 leading-relaxed mb-6 text-center">
        {text}
      </p>

      {/* CTA Button styled with brand accent colors */}
      {showButton &&
        (isLink ? (
          <Button
            asChild
            className="bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full px-6 py-3 text-sm transition-transform transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <a
              href={buttonUrl}
              aria-label={buttonLabel}
              className="flex items-center justify-center gap-2"
            >
              <div className="bg-white/20 rounded-full p-1">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span>{buttonLabel}</span>
            </a>
          </Button>
        ) : (
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold rounded-full px-6 py-3 text-sm shadow-xl cursor-default">
            <div className="bg-white/20 rounded-full p-1">
              <ArrowRight className="h-4 w-4" />
            </div>
            <span>{buttonLabel}</span>
          </div>
        ))}
    </div>
  );
}
