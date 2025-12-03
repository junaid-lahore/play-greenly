

import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { BlogPost } from "utils/blogPosts";

interface Props {
  relatedPosts: BlogPost[];
}

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://x.com/play_greenly" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/playgreenly" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/play-greenly" },
];

export const InterlinkingBar = ({ relatedPosts }: Props) => {
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="my-6 py-4 border-t border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Related Links */}
      <div className="text-sm text-center md:text-left">
        <span className="text-gray-600 font-medium mr-2">Read more:</span>
        {relatedPosts.map((post, index) => (
          <React.Fragment key={post.id}>
            <Link
              to={post.path}
              className="text-brand-green hover:underline font-semibold"
            >
              {post.shortTitle}
            </Link>
            {index < relatedPosts.length - 1 && (
              <span className="mx-2 text-gray-400">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Social Icons */}
      <div className="flex items-center gap-3">
        {socialLinks.map(({ name, icon: Icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${name}`}
            className="text-gray-500 text-sm font-normal hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
};
