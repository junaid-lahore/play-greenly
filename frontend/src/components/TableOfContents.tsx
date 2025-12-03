
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Props {
  headings: { text: string; id: string }[];
}

export const TableOfContents = ({ headings }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-24">
      <div className="rounded-lg border border-brand-gray/20 shadow-sm bg-white overflow-hidden">
        <button
          className="w-full flex justify-between items-center p-4 bg-black text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-lg font-bold font-title">Jump To</h2>
          {isOpen ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {isOpen && (
          <div className="max-h-[400px] overflow-y-auto bg-brand-green">
            <ul className="p-4 space-y-2">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className="flex items-start space-x-2 text-white text-xs font-light hover:text-white/80 transition-colors leading-relaxed"
                  >
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0"></span>
                    <span className="text-xs font-light">{heading.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
