import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Toaster } from "sonner";
import { OtherBlogPosts } from "components/OtherBlogPosts";
import { Testimonials } from "components/Testimonials";
import { TableOfContents, Heading } from "components/TableOfContents";
import { Footer } from "components/Footer";
import { BlogHeader } from "components/BlogHeader";
import { BlogHero } from "components/BlogHero";
import { blogPosts, BlogPost } from "utils/blogData";
import { SocialAndTagsBar } from "components/SocialAndTagsBar";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  currentPostId: string;
  date: string;
  author: string;
  categories: string[];
  canonicalUrl?: string;
}

export const BlogLayout = ({
  children,
  title,
  description,
  currentPostId,
  date,
  author,
  categories,
  canonicalUrl,
}: Props) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPostId)
    .slice(0, 3); // Fetch 3 posts for the carousel

  useEffect(() => {
    const timer = setTimeout(() => {
      const mainContent = document.querySelector(".blog-content");
      if (mainContent) {
        const headingElements = mainContent.querySelectorAll("h2, h3");
        const extractedHeadings: Heading[] = Array.from(headingElements).map(
          (el, index) => {
            const text = el.textContent || "";
            const baseId = text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            const id = el.id || `${baseId}-${index}-${Date.now()}`;
            el.id = id;
            return {
              id,
              text,
              level: parseInt(el.tagName.substring(1), 10),
            };
          },
        );
        setHeadings(extractedHeadings);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{`${title} | Play Greenly`}</title>
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Helmet>
      <div className="flex flex-col min-h-screen font-sans bg-white">
        <div className="bg-gradient-to-b from-[#F0FFF4] to-[#E6F4EA] relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <BlogHeader />
            <BlogHero title={title} date={date} author={author} />
          </div>
          {/* Simplified water wave effect */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[50px] md:h-[80px]"
            >
              <path
                d="M0,96 C240,128,480,32,720,64 C960,96,1200,80,1440,96 L1440,121 L0,121 Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Blog Navigation */}
            <div className="py-4 border-b border-gray-200/80">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-brand-green hover:text-brand-teal transition-colors duration-300 font-medium"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Blog
              </Link>
            </div>
            <SocialAndTagsBar categories={categories} />
          </div>
        </div>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-x-6">
            {/* Main Content (Order 1 on mobile, 2 on desktop) */}
            <div className="lg:col-span-6 order-1 lg:order-2 bg-gray-50/80 p-4 sm:p-6 rounded-lg blog-content shadow-sm">
              {children}
            </div>

            {/* Table of Contents (Left Sidebar - Order 2 on mobile, 1 on desktop) */}
            <aside className="lg:col-span-2 lg:order-1 order-2 mt-12 lg:mt-0">
              <div className="sticky top-28">
                <TableOfContents headings={headings} />
              </div>
            </aside>

            {/* Other Posts (Right Sidebar - Order 3) */}
            <aside className="lg:col-span-2 lg:order-3 order-3 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-12">
                <Testimonials variant="single" />
                <OtherBlogPosts posts={relatedPosts} />
              </div>
            </aside>
          </div>
        </main>
        <Toaster />
      </div>
      <Footer />
    </>
  );
};

export default BlogLayout;
