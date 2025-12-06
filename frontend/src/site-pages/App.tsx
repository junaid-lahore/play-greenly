import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Recycle,
  Waves,
  Fish,
  ShieldOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { BulkOrderForm } from "components/BulkOrderForm";
import { NewsletterSubscription } from "components/NewsletterSubscription";
import ProductFeatureSection from "components/ProductFeatureSection";
import PlayGreenlyDifference from "components/PlayGreenlyDifference";
import NewsletterSignup from "components/NewsletterSignup";
import EcoConsciousProducts from "components/EcoConsciousProducts";
import OurValuesSection from "components/OurValuesSection";
import { Testimonials } from "components/Testimonials";
import FeaturedBlogPosts from "components/FeaturedBlogPosts";
import Faq from "components/Faq";
import Newsletter from "components/Newsletter";
import ProductSection from "components/ProductSection";
import FaqSection from "components/FaqSection";
import HowItWorks from "components/HowItWorks";
import Meta from "components/Meta";

const faqData = [
  {
    question: "How long do PlayGreenly golf balls take to dissolve?",
    answer:
      "PlayGreenly golf balls typically dissolve completely within 2 weeks when submerged in water. The dissolution begins immediately upon contact with water, with the outer shell starting to break down within minutes. The exact timeframe depends on water temperature and conditions, but you can be confident they won't linger in the environment like traditional plastic balls.",
  },
  {
    question: "Are they safe for marine life and fish?",
    answer:
      "Absolutely! Our balls are made from 95% PVA (Polyvinyl Alcohol) and 5% natural plasticizer, both completely non-toxic to marine life. When they dissolve, they leave only harmless, water-soluble particles that pose no threat to fish, aquatic plants, or water quality.",
  },
  {
    question: "Do they perform like regular golf balls?",
    answer:
      "Yes! PlayGreenly balls are engineered to deliver comparable flight distance, accuracy, and feel to traditional golf balls during play. They maintain their structural integrity on the course.",
  },
  {
    question: "What makes PlayGreenly different from other eco golf balls?",
    answer:
      "Our premium PVA-based formula ensures complete dissolution without leaving microplastics. Many 'eco-friendly' alternatives still contain plastic components. We offer the perfect balance of performance and environmental safety.",
  },
  {
    question: "How do I place a bulk order?",
    answer:
      "Simply fill out our bulk order form, and our team will contact you within 24 hours with pricing and availability. We offer competitive bulk pricing for golf courses, corporate events, and tournaments.",
  },
];

const App: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PlayGreenly",
    url: "https://www.playgreenly.com",
    logo: "https://www.playgreenly.com/logo.png",
    description: "Eco-friendly golf products built for sustainability-focused golfers.",
    sameAs: [
      "https://www.instagram.com/playgreenly",
      "https://twitter.com/playgreenly",
    ],
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Biodegradable Golf Balls",
    image:
      "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Golf%20Ball%20Product%20Image.jpg",
    description:
      "Eco-friendly golf balls that dissolve naturally in water — perfect for sustainable golf experiences.",
    brand: {
      "@type": "Brand",
      name: "PlayGreenly",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.playgreenly.com",
      priceCurrency: "USD",
      price: "19.99",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Meta
        title="Play Greenly | Eco-Friendly Golf Equipment"
        description="Discover a new era of sustainable golf with Play Greenly. Our eco-friendly golf balls and equipment are designed for performance and the planet. Shop now and make every swing count."
      />
      <div className="page-container py-8">
        {/* Navigation */}
        <header className="flex justify-between items-center py-6 text-white bg-brand-green rounded-2xl px-6 shadow-sm">
          <div
            className="text-2xl font-title font-bold text-white"
            aria-label="Play Greenly Logo"
          >
            Play Greenly
          </div>
          <nav aria-label="Main Navigation">
            <ul className="flex space-x-8">
              <li>
                <span
                  className="text-white text-sm font-normal cursor-default"
                  aria-current="page"
                >
                  Home
                </span>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-sm font-normal text-white/90 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 rounded px-2 py-1"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-sm font-normal text-white/90 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 rounded px-2 py-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm font-normal text-white/90 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 rounded px-2 py-1"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <EcoConsciousProducts />

        {/* Our First Products Section */}
        <section className="py-16 bg-brand-light-bg">
          <div className="page-container">
            <div className="text-center mb-14">
              <h2 className="text-h2 font-bold text-brand-green mb-4 font-title">
                Discover Our Eco-Friendly Products
              </h2>
              <p className="text-lead text-brand-black max-w-2xl mx-auto font-body">
                Leading the charge in sustainable sports gear, our first
                products combine innovative design with environmental
                responsibility.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                {
                  id: 1,
                  name: "Biodegradable Golf Balls",
                  description:
                    "Our golf balls are designed to fully biodegrade, leaving no trace behind. Perfect your swing while protecting the course and environment.",
                  imageUrls: [
                    "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Golf%20Ball%20Product%20Image.jpg",
                    "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Golf%20Ball%20Product%20Image%202.jpg",
                  ],
                  altText: "Biodegradable golf balls",
                  ctaText: "Buy on Amazon",
                  ctaLink:
                    "https://www.amazon.com/dp/B0D74R8FHZ?ref=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&ref_=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&social_share=cm_sw_r_cp_ud_dp_5BEKQ1GE886TT5Y89K0Z&previewDoh=1",
                  isExternal: true,
                  isLaunchingSoon: false,
                },
                {
                  id: 2,
                  name: "Biodegradable Court Marking Tape",
                  description:
                    "Durable and eco-friendly, our court marking tape provides clear, reliable lines for various sports and breaks down naturally after use. Ideal for temporary or permanent courts.",
                  imageUrl:
                    "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Tape%20Bag%20Product%20Image.jpg",
                  altText: "Roll of biodegradable court marking tape",
                  ctaText: "Launching Soon!",
                  ctaLink: null,
                  isExternal: false,
                  isLaunchingSoon: true,
                },
              ].map((product) => {
                return (
                  <motion.div
                    key={product.id}
                    className="relative group flex flex-col"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col flex-grow"
                      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 128, 128, 0.25)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-72">
                        <div className="relative w-full h-full">
                          {product.imageUrls && product.imageUrls.length > 0 ? (
                            <motion.img
                              src={product.imageUrls[0]}
                              alt={`${product.altText} - image 1`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              width="500"
                              height="288"
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                            />
                          ) : product.imageUrl ? (
                            <motion.img
                              src={product.imageUrl}
                              alt={product.altText}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              width="500"
                              height="288"
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <p className="text-gray-500">Image Coming Soon</p>
                            </div>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-lg font-semibold">View Product</p>
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="p-8 space-y-4 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-brand-black font-title">
                          {product.name}
                        </h3>
                        <p className="font-body text-gray-600 leading-relaxed flex-grow">
                          {product.description}
                        </p>

                        <div className="pt-4">
                          {product.isLaunchingSoon ? (
                            <p className="text-xl font-bold text-brand-green">
                              {product.ctaText}
                            </p>
                          ) : product.isExternal && product.ctaLink ? (
                            <a
                              href={product.ctaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-8 py-3 bg-brand-teal text-white font-semibold rounded-lg shadow-md hover:bg-brand-green transition-all duration-300 transform hover:scale-105"
                            >
                              {product.ctaText}
                            </a>
                          ) : product.ctaLink ? (
                            <Link
                              to={product.ctaLink}
                              className="inline-block px-8 py-3 bg-brand-teal text-white font-semibold rounded-lg shadow-md hover:bg-brand-green transition-all duration-300 transform hover:scale-105"
                            >
                              {product.ctaText}
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <ProductFeatureSection />
        <HowItWorks />

        <OurValuesSection />
        
        <div className="my-16">
          <Testimonials variant="multi" />
        </div>

        {/* FAQ Section */}
        <FaqSection />

        {/* Bulk Order Inquiry Form Section */}
        <section className="py-16 bg-white rounded-lg shadow-sm my-12">
          <div className="text-center mb-14">
            <h2 className="text-h2 font-bold text-brand-green mb-4 font-title">
              Request Bulk Order
            </h2>
            <p className="text-brand-black max-w-2xl mx-auto font-body">
              Interested in placing a bulk order for your organization, sports
              club, or event? We offer our biodegradable golf balls, court
              marking tape, and other upcoming products in bulk. Fill out the
              form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BulkOrderForm />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default App;
