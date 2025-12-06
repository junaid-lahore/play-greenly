// app/page.tsx (SERVER COMPONENT – DO NOT ADD "use client")
import Link from "next/link";
import EcoConsciousProducts from "@/components/EcoConsciousProducts";
import ProductFeatureSection from "@/components/ProductFeatureSection";
import HowItWorks from "@/components/HowItWorks";
import OurValuesSection from "@/components/OurValuesSection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import BulkOrderForm from "@/components/BulkOrderForm";
import Footer from "@/components/Footer";

// ✔ Next.js Metadata (replaces Meta + Helmet)
export const metadata = {
  title: "Play Greenly | Eco-Friendly Golf Equipment",
  description:
    "Discover a new era of sustainable golf with Play Greenly. Our eco-friendly golf balls and equipment are designed for performance and the planet.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="container mx-auto px-4 py-8">

        {/* Navigation */}
        <header className="flex justify-between items-center py-6">
          <div
            className="text-2xl font-title font-bold text-brand-black"
            aria-label="Play Greenly Logo"
          >
            Play Greenly
          </div>

          <nav aria-label="Main Navigation">
            <ul className="flex space-x-8">
              <li>
                <span
                  className="text-brand-teal text-sm font-normal cursor-default"
                  aria-current="page"
                >
                  Home
                </span>
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 rounded px-2 py-1"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 rounded px-2 py-1"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 rounded px-2 py-1"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Sections */}
        <EcoConsciousProducts />

        <section className="py-16 bg-brand-light-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-h2 font-bold text-brand-green mb-4 font-title">
                Discover Our Eco-Friendly Products
              </h2>
              <p className="text-lead text-brand-black font-body max-w-2xl mx-auto">
                Leading the charge in sustainable sports gear, our first
                products combine innovative design with environmental
                responsibility.
              </p>
            </div>

            {/* Product animation grid (client component) */}
            {/* You will create this next */}
            <ProductFeatureSection />
          </div>
        </section>

        <HowItWorks />
        <OurValuesSection />

        <div className="my-16">
          <Testimonials variant="multi" />
        </div>

        <FaqSection />

        {/* Bulk Order Form */}
        <section className="py-16 bg-white rounded-lg shadow-sm my-12">
          <div className="text-center mb-14">
            <h2 className="text-h2 font-bold text-brand-green mb-4 font-title">
              Request Bulk Order
            </h2>
            <p className="text-brand-black max-w-2xl mx-auto font-body">
              Interested in placing a bulk order? Fill the form below and our
              team will get back to you within 24 hours.
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
}
