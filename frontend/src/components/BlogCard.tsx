import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "utils/blogData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardBaseStyle = "rounded-xl overflow-hidden shadow-lg h-full flex flex-col bg-white";
  const featuredCardStyle = cardBaseStyle;
  const regularCardStyle = `${cardBaseStyle} group`;
  const dateValue = post.date || post.publishedDate;
  const formattedDate = dateValue 
    ? new Date(dateValue).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Invalid Date";

  const isNewestPost = post.slug === "blog-biodegradable-golf-balls-materials";
  const isMarinePost = post.slug === "are-eco-golf-balls-safe-for-fish-and-oceans";

  const altText = isNewestPost
    ? "Cross-section of eco golf ball showing 95% PVA and 5% plasticizer"
    : isMarinePost
    ? "Vibrant coral reef scene with tropical fish showcasing marine life protected by biodegradable golf balls"
    : post.featuredImage?.alt || post.title;

  const imageUrl = post.featuredImage?.src || post.imageUrl;

  return (
    <article className={`${cardBaseStyle} group`}>
      <Link to={post.path} className="block focus:outline-none focus:ring-2 focus:ring-brand-teal/50 rounded-xl h-full flex flex-col" aria-label={`Read the full article: ${post.title}`}>
        <div className="aspect-[4/3] overflow-hidden relative rounded-t-xl">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2" role="list" aria-label="Article categories">
            {post.categories.slice(0, 1).map((category) => (
              <span
                key={category}
                className="inline-block px-2 py-1 bg-white/90 text-brand-green rounded-full text-xs font-medium font-body"
                role="listitem"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        {/* Content area with p-4 and flex-grow */}
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-brand-black mb-2 font-title leading-snug group-hover:text-brand-green transition-colors">
            {post.title}
          </h3>
          <p className="text-brand-black/80 mb-4 text-sm line-clamp-2 font-body leading-relaxed flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="text-xs text-brand-black/70 font-body">
              <span>{formattedDate}</span>
              {post.readTime && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} read</span>
                </>
              )}
            </div>
            <div
              className="text-sm font-medium text-brand-teal group-hover:text-brand-green transition-colors font-body"
              aria-label={`Read article about ${post.title}`}
            >
              Read
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
