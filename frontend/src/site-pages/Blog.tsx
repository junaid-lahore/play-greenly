import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useSearchParams, Navigate } from 'react-router-dom';
import { BlogCard } from "components/BlogCard";
import { BlogNav } from "components/BlogNav";
import { Footer } from 'components/Footer';
import { blogPosts as allBlogPosts, BlogPost } from "utils/blogData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import brain from 'brain';
import { toast } from 'sonner';
import { AnalyticsProvider } from 'components/AnalyticsProvider';
import BlogLayout from "components/BlogLayout";
import { ProTipCTA } from "components/ProTipCTA";
import InfoBox from "components/InfoBox";

export default function Blog() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  
  // Handle old query parameter URLs by redirecting to new clean URLs
  if (slug) {
    const redirectMap: { [key: string]: string } = {
      'biodegradable-golf-balls-materials': '/blog-biodegradable-golf-balls-materials',
      'biodegradable-vs-conventional-golf-balls': '/blog-biodegradable-vs-conventional'
    };
    
    const redirectPath = redirectMap[slug];
    if (redirectPath) {
      return <Navigate to={redirectPath} replace />;
    }
    
    // If slug doesn't match known redirects, still redirect to blog listing
    return <Navigate to="/blog" replace />;
  }
  
  // Otherwise render the blog listing page
  return <BlogListingPage />;
}

// Original blog listing page component
function BlogListingPage() {
  const [sortOrder, setSortOrder] = useState("newest");
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const sortedPosts = useMemo(() => {
    const allPosts = [...allBlogPosts];
    allPosts.sort((a, b) => {
      const dateA = new Date(a.date || a.publishedDate).getTime();
      const dateB = new Date(b.date || b.publishedDate).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    return allPosts;
  }, [sortOrder]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmittingNewsletter(true);

    try {
      const response = await brain.subscribe_to_newsletter({ 
        email: newsletterEmail,
        source: "Blog Page"
      });
      const result = await response.json();
      
      toast.success('Thank you for subscribing to our newsletter!');
      setNewsletterEmail(''); // Clear the form
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmittingNewsletter(false);
    }
  }

  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-white">
        <Helmet>
          <title>Play Greenly Blog | Sustainable Sports News & Eco-Tips</title>
          <meta name="description" content="Explore articles on sustainable sports, eco-friendly athletic products, biodegradable materials, and the latest from Play Greenly." />
        </Helmet>
        
        {/* Header */}
        <header className="page-container py-6 flex justify-between items-center text-white bg-brand-green rounded-2xl px-6 shadow-sm">
          <div className="text-2xl font-title font-bold text-white" aria-label="Play Greenly Logo">
            <Link to="/">Play Greenly</Link>
          </div>
          <nav aria-label="Main Navigation">
            <ul className="flex space-x-8">
              <li><Link to="/" className="text-white/90 hover:text-white transition-colors font-body font-medium">Home</Link></li>
              <li><Link to="/about-us" className="text-white/90 hover:text-white transition-colors font-body font-medium">About</Link></li>
              <li><Link to="/contact-us" className="text-white/90 hover:text-white transition-colors font-body font-medium">Contact</Link></li>
              <li><Link to="/blog" className="text-white font-bold transition-colors font-body medium" aria-current="page">Blog</Link></li>
            </ul>
          </nav>
        </header>

        <div className="page-container py-8">
          {/* Navigation placeholder with back to home link */}
          
          {/* Blog Header */}
          <section className="py-12 text-center" aria-labelledby="blog-title">
            <h1 id="blog-title" className="text-display font-bold text-brand-black mb-6 font-title tracking-tight">
              Our <span className="text-brand-green">Blog</span>
            </h1>
            <p className="text-lead text-brand-black max-w-2xl mx-auto font-body mb-10">
              Insights, stories, and updates about sustainable sports practices, our eco-friendly products like biodegradable golf balls and court marking tape, and our mission to make sports more environmentally responsible.
            </p>
          </section>
          
          {/* Latest Articles */}
          <section className="py-12" aria-labelledby="latest-articles-heading">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
              <h2 id="latest-articles-heading" className="text-h2 font-bold text-brand-black font-title mb-4 sm:mb-0">
                All Articles
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-brand-black font-body">Sort by:</span>
                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger className="w-[180px] rounded-full bg-white border-brand-gray/50 focus:ring-brand-teal/50 font-body">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="font-body">
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            {sortedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {sortedPosts.map((post: BlogPost) => (
                  <div key={post.id} className="transform transition-all duration-300 hover:scale-105">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-brand-black font-body py-10">No articles to display.</p>
            )}
            
            {/* Pagination Removed */}
          </section>
          
          {/* Newsletter Signup */}
          <section className="py-16 my-12 bg-white rounded-xl shadow-sm" aria-labelledby="newsletter-heading">
            <div className="max-w-3xl mx-auto text-center px-4">
              <span className="inline-block px-4 py-1.5 bg-brand-gray text-brand-green rounded-full text-sm font-semibold font-body mb-4 tracking-wide">
                Stay Updated
              </span>
              <h2 id="newsletter-heading" className="text-h2 font-bold text-brand-black mb-4 font-title">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lead text-brand-black mb-8 font-body">
                Get the latest articles, sustainable sports tips, information about our new biodegradable products, and exclusive offers delivered straight to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
                <label htmlFor="email-input" className="sr-only">Your email address</label>
                <input
                  id="email-input"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-brand-gray/50 font-body focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                  required
                  disabled={isSubmittingNewsletter}
                  aria-describedby="email-terms"
                />
                <button
                  type="submit"
                  disabled={isSubmittingNewsletter}
                  className="px-7 py-3.5 bg-brand-teal text-white font-semibold rounded-md shadow-md hover:bg-brand-green transition-colors font-body whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              <p className="text-sm text-brand-black/60 mt-4 font-body" id="email-terms">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </AnalyticsProvider>
  );
}
