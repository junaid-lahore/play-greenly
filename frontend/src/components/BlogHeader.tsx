
import React from "react";
import { Link } from "react-router-dom";

export const BlogHeader = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <div
        className="text-2xl font-title font-bold text-brand-black"
        aria-label="Play Greenly Logo"
      >
        <Link to="/">Play Greenly</Link>
      </div>
      <nav aria-label="Main Navigation">
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 rounded px-2 py-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 rounded px-2 py-1"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 rounded px-2 py-1"
            >
              Contact
            </Link>
          </li>
          <li>
            <span className="text-brand-teal text-sm font-normal cursor-default" aria-current="page">
              Blog
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
