

import React, { useState } from "react";
import { toast } from "sonner";
import brain from "brain";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet";

// Added Mail and Phone icons for better visual representation
import { Mail, Phone, MapPin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await brain.send_message({ 
        name: formData.name, 
        email: formData.email, 
        message: formData.message 
      });
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-white text-brand-black">
      <Helmet>
        <title>Contact Us - Play Greenly | Get in Touch</title>
        <meta name="description" content="Contact Play Greenly for questions about our eco-friendly sports equipment. Reach out via email, social media, or our contact form for support and inquiries." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-white text-brand-black">
        <header className="page-container py-6 flex justify-between items-center text-white bg-brand-green rounded-2xl px-6 shadow-sm">
          <div className="text-2xl font-title font-bold text-white" aria-label="Play Greenly Logo">
            <Link to="/">Play Greenly</Link>
          </div>
          <nav aria-label="Main Navigation">
            <ul className="flex space-x-8">
              <li><Link to="/" className="text-white/90 hover:text-white transition-colors font-body font-medium">Home</Link></li>
              <li><Link to="/about-us" className="text-white/90 hover:text-white transition-colors font-body font-medium">About</Link></li>
              <li><span className="text-white font-bold font-body font-medium cursor-default" aria-current="page">Contact</span></li>
              <li><Link to="/blog" className="text-white/90 hover:text-white transition-colors font-body font-medium">Blog</Link></li>
            </ul>
          </nav>
        </header>

        <main className="page-container py-16 sm:py-20 lg:py-24 text-brand-black">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-display font-bold text-brand-black tracking-tight font-title">
                Contact Our Team
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-brand-black/80 max-w-3xl mx-auto font-body">
                Have a question or a project in mind? We are here to help you turn
                your ideas into reality.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Information Section */}
              <div className="lg:col-span-2 space-y-8">
                <InfoCard
                  icon={<Mail className="w-6 h-6 text-brand-green" />}
                  title="Email Us"
                  content="Our support team will get back to you within 24 hours."
                  link="mailto:info@playgreenly.com"
                  linkText="info@playgreenly.com"
                />
                <InfoCard
                  icon={<Twitter className="w-6 h-6 text-brand-green" />}
                  title="Follow on X"
                  content="Stay up-to-date with our latest news and announcements."
                  link="https://x.com/play_greenly"
                  linkText="@play_greenly"
                />
                <InfoCard
                  icon={<Instagram className="w-6 h-6 text-brand-green" />}
                  title="Follow on Instagram"
                  content="See our latest product shots and behind the scenes."
                  link="https://instagram.com/play_greenly"
                  linkText="@play_greenly"
                />
              </div>

              {/* Contact Form Section */}
              <div className="lg:col-span-3 bg-white border border-gray-200/80 rounded-2xl shadow-lg p-8">
                <h2 className="text-h2 font-bold text-brand-black mb-6 font-title">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-brand-black font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="John Doe"
                      required
                      className="mt-2 bg-white border-gray-300 text-brand-black placeholder:text-gray-500 focus:ring-brand-teal focus:border-brand-teal"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brand-black font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="you@example.com"
                      required
                      className="mt-2 bg-white border-gray-300 text-brand-black placeholder:text-gray-500 focus:ring-brand-teal focus:border-brand-teal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-brand-black font-medium"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="How can we help you today?"
                      required
                      className="mt-2 bg-white border-gray-300 text-brand-black placeholder:text-gray-500 focus:ring-brand-teal focus:border-brand-teal"
                      rows={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-base font-bold py-3 px-6 bg-brand-teal hover:bg-brand-green text-white rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-teal/50"
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// Reusable component for the information cards
const InfoCard = ({
  icon,
  title,
  content,
  link,
  linkText,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
  linkText: string;
}) => (
  <div className="bg-white border border-gray-200/80 rounded-2xl p-6 flex space-x-4 items-start hover:shadow-xl transition-shadow duration-300">
    <div className="flex-shrink-0 bg-brand-green/10 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-brand-black font-title">{title}</h3>
      <p className="text-brand-black/80 mt-1 mb-2 font-body">{content}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-normal text-brand-green hover:text-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal hover:bg-clip-text transition-all duration-300"
      >
        {linkText}
      </a>
    </div>
  </div>
);
