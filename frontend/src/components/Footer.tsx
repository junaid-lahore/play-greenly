


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import brain from "brain";
import { Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-green to-brand-teal text-white pt-20 pb-8 relative overflow-hidden">
      {/* Subtle leaf pattern background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/3 rounded-full blur-2xl"></div>
        {/* Subtle wave pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M20,100 Q60,60 100,100 T180,100" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M20,120 Q60,80 100,120 T180,120" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Company Info & Logo */}
          <div className="space-y-6">
            <div className="font-title text-3xl font-bold text-white">
              Play Greenly
            </div>
            <p className="font-body text-white/90 leading-relaxed">
              Revolutionizing sports with sustainable, eco-friendly products like
              our biodegradable golf balls and court marking tape, that reduce
              environmental impact.
            </p>
            <div className="flex space-x-6 pt-2">
              <a
                href="https://x.com/play_greenly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="text-white/70 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/play_greenly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-white/70 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-xl text-white font-title tracking-wide border-b border-white/20 pb-3">
              Quick Links
            </h3>
            <ul className="space-y-4 font-body">
              <li className="flex items-center space-x-3">
                <span className="text-white/50 text-sm">🌿</span>
                <Link 
                  to="/about-us" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-white/50 text-sm">🌿</span>
                <Link 
                  to="/contact-us" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-white/50 text-sm">🌿</span>
                <Link 
                  to="/blog" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-white/50 text-sm">🌿</span>
                <Link 
                  to="/privacy-policy" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4 font-title border-b border-white/20 pb-3">
              Stay Connected
            </h3>
            <p className="text-white/90 mb-6 font-body leading-relaxed">
              Join our community for eco-friendly innovations, sustainability tips, and exclusive offers.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Minimalist divider with subtle leaf motif */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-brand-green to-brand-teal px-6 text-white/70 text-sm font-medium flex items-center space-x-2">
              <span>Sustainable Sports</span>
              <span className="text-white/40">•</span>
              <span>Greener Future</span>
            </span>
          </div>
        </div>

        {/* Clean bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/80 space-y-4 sm:space-y-0">
          <p className="flex items-center space-x-2">
            <span>&copy; {currentYear} Play Greenly. All rights reserved.</span>
          </p>
          <p className="font-medium text-white/90 italic flex items-center space-x-2">
            <span>A commitment to a greener game</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Newsletter form component
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await brain.subscribe_to_newsletter({
        email: email,
        source: "Footer",
      });
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Your email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal"
        disabled={isSubmitting}
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2.5 bg-brand-teal text-white font-semibold rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-green focus:ring-white"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}

export default Footer;
