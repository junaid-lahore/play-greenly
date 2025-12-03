import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Footer } from "components/Footer";
import { Helmet } from "react-helmet";
import Meta from "components/Meta";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-white text-brand-black">
      <Meta
        title="About Play Greenly | Our Mission for Sustainable Golf"
        description="Learn about Play Greenly's mission to revolutionize the golf industry with sustainable, high-performance equipment. Join us in our commitment to preserving the planet, one game at a time."
      />
      <div className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-white text-brand-black">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div
            className="text-2xl font-title font-bold text-brand-black"
            aria-label="Play Greenly Logo"
          >
            <Link to="/">Play Greenly</Link>
          </div>
          <nav aria-label="Main Navigation">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 rounded px-2 py-1">Home</Link>
              </li>
              <li>
                <span className="text-brand-teal text-sm font-normal cursor-default" aria-current="page">About</span>
              </li>
              <li>
                <Link to="/contact-us" className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 rounded px-2 py-1">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 rounded px-2 py-1">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black">
                About Play Greenly
              </h1>
              <p className="mt-4 text-lg text-brand-black/80">
                Revolutionizing Golf, Respecting Our Planet.
              </p>
            </div>

            <Card className="mb-8 bg-white shadow-lg border-gray-200/80 rounded-2xl">
              <CardHeader>
                <h3 className="text-h3 font-semibold text-brand-green">Our Mission</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  At Play Greenly, our mission is to merge the love for golf with a deep commitment to environmental stewardship. We believe that the future of the sport lies in sustainability, and we are dedicated to providing products and solutions that enhance the game while protecting our natural playgrounds. We aim to inspire a community of golfers who are as passionate about the planet as they are about their performance.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-white shadow-lg border-gray-200/80 rounded-2xl">
              <CardHeader>
                <h3 className="text-h3 font-semibold text-brand-green">Our Values</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-h4 font-semibold text-brand-black">Sustainability First</h4>
                  <p className="text-gray-700">
                    Every decision we make, from product design to packaging, is guided by its environmental impact.
                  </p>
                </div>
                <div>
                  <h4 className="text-h4 font-semibold text-brand-black">Innovation in Performance</h4>
                  <p className="text-gray-700">
                    We constantly research and develop new technologies to create high-performing, eco-friendly golf products.
                  </p>
                </div>
                <div>
                  <h4 className="text-h4 font-semibold text-brand-black">Community & Education</h4>
                  <p className="text-gray-700">
                    We are committed to building a global community of eco-conscious golfers and promoting sustainable practices on and off the course.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-white shadow-lg border-gray-200/80 rounded-2xl">
              <CardHeader>
                <h3 className="text-h3 font-semibold text-brand-green">Our Promise</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-h4 font-semibold text-brand-black">A Promise of Quality</h4>
                  <p className="text-gray-700">
                    We are committed to delivering eco-friendly products that meet the highest standards of performance and durability. Sustainability does not mean sacrificing quality.
                  </p>
                </div>
                <div>
                  <h4 className="text-h4 font-semibold text-brand-black">A Promise to the Environment</h4>
                  <p className="text-gray-700">
                    We pledge to prioritize the planet in every step of our process, from responsibly sourced materials to 100% recyclable or compostable packaging.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            <div className="text-center">
              <h2 className="text-h2 font-bold text-brand-black mb-4">Join Us on the Green Journey</h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Whether you're a seasoned pro or just starting, you can make a difference. Choose Play Greenly and be a part of the movement to make golf a more sustainable sport for generations to come.
              </p>
              <Button
                onClick={() => navigate("/")}
                className="bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Explore Our Products
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
