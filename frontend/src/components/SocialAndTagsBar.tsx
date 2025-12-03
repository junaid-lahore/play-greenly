



import React from 'react';
import { Link } from 'react-router-dom';

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.98-2.08z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface Props {
  categories: string[];
}

export const SocialAndTagsBar = ({ categories }: Props) => {
  const displayCategories = Array.isArray(categories) ? categories : [];

  return (
    <div className="py-4 border-b border-t border-gray-200/80">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-64">
        {/* Social Icons */}
        <div className="flex items-center space-x-5 shrink-0">
          <a
            href="https://x.com/play_greenly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X"
            className="text-gray-400 text-sm font-normal hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://instagram.com/play_greenly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-gray-400 text-sm font-normal hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300"
          >
            <InstagramIcon />
          </a>
        </div>

        {/* Tags */}
        <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-full px-2 py-1 space-x-3 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {displayCategories.map((category) => (
              <Link
                key={category}
                to={`/blog/category/${category
                  .toLowerCase()
                  .replace(/ /g, '-')}`}
                className="flex items-center space-x-2.5 px-3 py-1 text-gray-700 hover:text-brand-green transition-colors whitespace-nowrap group"
              >
                <span className="w-2.5 h-2.5 bg-brand-teal/40 rounded-full group-hover:bg-brand-green transition-colors duration-300"></span>
                <span className="text-sm font-medium text-gray-500 group-hover:text-brand-green-dark transition-colors duration-300">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
