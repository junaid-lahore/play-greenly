



import React from "react";

export interface BlogPost {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  date: string;
  author: string;
  path: string;
  categories: string[];
  isTopRated: boolean;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "biodegradable-golf-balls-materials",
    title:
      "What Are Biodegradable Golf Balls Made Of? (And Why It Matters)",
    shortTitle: "What Are Eco Golf Balls Made Of?",
    description:
      "Discover what biodegradable golf balls are made of and how they dissolve in water. A safe, eco-friendly alternative to plastic for your next round.",
    date: "August 7, 2025",
    author: "Dr. Hafiz Waqas",
    path: "/Blog?slug=what-are-biodegradable-golf-balls-made-of",
    categories: ["Sustainability", "Eco-Friendly Products"],
    isTopRated: true,
    slug: "what-are-biodegradable-golf-balls-made-of",
  },
  {
    id: "biodegradable-vs-conventional-golf-balls",
    title: "Biodegradable Golf Balls vs Conventional What Really Performs Better?",
    shortTitle: "Biodegradable vs Conventional Golf Balls",
    description:
      "Discover the real performance differences between eco-friendly biodegradable golf balls and conventional rubber-core balls. Find out which is better for your game and the planet.",
    date: "August 25, 2025",
    author: "Muhammad Harris",
    path: "/BlogBiodegradableVsConventional",
    categories: ["Performance", "Comparison", "Sustainability"],
    isTopRated: false,
    slug: "biodegradable-vs-conventional-golf-balls",
  },
  {
    id: "from-tee-to-sea-timeline",
    title: "From Tee to Sea: The Timeline for Biodegradable Golf Balls to Dissolve",
    shortTitle: "Timeline for Biodegradable Golf Balls to Dissolve",
    description:
      "Discover how long biodegradable golf balls take to dissolve in water and why it matters for eco-conscious golfers. From 2 weeks to complete breakdown, learn the science behind guilt-free golf.",
    date: "September 3, 2025",
    author: "Dr. Hafiz Waqas",
    path: "/blog-from-tee-to-sea",
    categories: ["Sustainability", "Environmental Impact", "Eco-Friendly Products"],
    isTopRated: false,
    slug: "from-tee-to-sea-timeline",
  },
  {
    id: "eco-friendly-golf-accessories",
    title: "Top 5 Eco-Friendly Golf Accessories for the Green Golfer",
    shortTitle: "Eco-Friendly Golf Accessories",
    description:
      "From tees to towels, here are the top eco-friendly golf accessories that every green golfer needs in their bag.",
    date: "July 25, 2025",
    author: "John Smith",
    path: "/Blog?slug=eco-friendly-golf-accessories",
    categories: ["Eco-Friendly Products", "Gear"],
    isTopRated: false,
    slug: "eco-friendly-golf-accessories",
  },
];
