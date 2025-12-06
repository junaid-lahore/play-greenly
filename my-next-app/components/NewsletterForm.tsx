"use client";

import { useState } from "react";
import { toast } from "sonner";
// import brain from "brain";

export default function NewsletterForm() {
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
        email,
        source: "Footer",
      });

      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to subscribe. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email address"
        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
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
