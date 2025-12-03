export interface Author {
  name: string;
  image: string;
  bio: string;
}

export const authors: Author[] = [
  {
    name: "Alex Johnson",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: "Passionate about making golf more sustainable, one swing at a time.",
  },
  {
    name: "Samantha Woods",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: "Environmental scientist specializing in waste management and plastic pollution research.",
  },
  {
    name: "Hafiz Waqas",
    image: "", // Placeholder for image
    bio: "Placeholder bio for Hafiz Waqas.",
  },
  {
    name: "Muhammad Harris",
    image: "", // Placeholder for image
    bio: "Placeholder bio for Muhammad Harris.",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  path: string;
  slug: string;
  date: string;
  author: {
    name: string;
    imageUrl?: string;
  };
  categories: string[];
  featuredImage?: {
    src: string;
    alt: string;
  };
  relatedPosts?: string[];
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "tee-off-with-a-biodegradable-golf-ball",
    title: "Tee Off with a Biodegradable Golf Ball for a Greener Game",
    excerpt: "Discover Ecobioball's dissolvable golf balls. High-performance, eco friendly golf balls that are safe for marine life. Play your part in sustainable golf today.",
    path: "/blog-tee-off-with-a-biodegradable-golf-ball",
    slug: "tee-off-with-a-biodegradable-golf-ball",
    date: "2025-11-12T10:00:00Z",
    readTime: "7 min",
    featuredImage: {
      src: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/1.png",
      alt: "A biodegradable golf ball resting on a tee with a serene water background.",
    },
    author: {
      name: "Neha Dogra",
    },
    categories: ["Sustainability", "Eco-Friendly Golf", "Product Guides"],
    meta: {
      title: "Ecobioball: The Biodegradable Golf Ball for Eco-Golfers",
      description: "Discover Ecobioball's dissolvable golf balls. High-performance, eco friendly golf balls that are safe for marine life. Play your part in sustainable golf today.",
    },
  },
  {
    id: "biodegradable-golf-balls-eco-friendly-practice",
    title: "Biodegradable Golf Balls: The Eco-Friendly Practice Solution for Water Hazards",
    excerpt: "Learn how to switch to biodegradable golf balls. Our simple guide shows you how to protect marine life while enjoying your game on the water.",
    path: "/blog-biodegradable-golf-balls-eco-friendly-practice",
    slug: "biodegradable-golf-balls-eco-friendly-practice",
    date: "2025-10-30T10:00:00Z",
    readTime: "5 min",
    featuredImage: {
      src: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Feature%20image%20-%20Biodegradable%20Golf%20Balls-%20blog13.png",
      alt: "A golf ball dissolving in water, surrounded by fish.",
    },
    author: {
      name: "Neha Dogra",
    },
    categories: ["Sustainability", "Eco-Friendly Golf", "Product Guides"],
    meta: {
      title: "Biodegradable Golf Balls: An Eco-Friendly Swing Guide",
      description: "Learn how to switch to biodegradable golf balls. Our simple guide shows you how to protect marine life while enjoying your game on the water.",
      keywords: ["biodegradable golf ball", "dissolvable golf balls", "eco friendly golf balls"],
    },
  },
  {
    id: "BlogSportsFloorMarkingTape",
    title: "Your Guide to Sports Floor Marking Tape",
    excerpt: "A comprehensive guide to using sports floor marking tape for courts, gyms, and practice areas.",
    path: "/blog-sports-floor-marking-tape",
    slug: "sports-floor-marking-tape",
    date: "2025-10-27T10:00:00Z",
    readTime: "4 min",
    featuredImage: {
      src: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Feature%20image-blog12.png",
      alt: "Colorful rolls of sports floor marking tape in a warehouse",
    },
    author: {
      name: "Neha Dogra",
    },
    categories: ["Sports", "DIY", "Facilities"],
  },
  {
    id: "10",
    title: "Is Golf Hurting Nature? Discover How Eco-Friendly Gear Can Make a Difference",
    excerpt: "Golf's environmental impact is bigger than you think, from massive water consumption to plastic pollution. Discover how eco-friendly gear and sustainable practices can protect our planet without sacrificing the game you love.",
    publishedDate: "2025-10-27",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/1. Feature Image (H1 _ Intro section)-blog10.jpg",
    readTime: "6 min",
    slug: "is-golf-hurting-nature",
    path: "/blog-is-golf-hurting-nature",
    categories: ["Sustainability", "Eco-Friendly Golf"],
    author: {
      name: "Alex Johnson",
      image: "",
      bio: "Environmental journalist and avid golfer passionate about sustainable sports."
    }
  },
  {
    id: "1",
    title: "What Are Biodegradable Golf Balls Made Of? (And Why It Matters)",
    excerpt: "Transform your golf game with eco-friendly balls made from 95% PVA that safely dissolve in water. Learn why sustainable golfers are switching to biodegradable alternatives that protect our courses and waterways.",
    publishedDate: "2025-08-06",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/1st+blog+2nd+image+play+greenly.png",
    readTime: "5 min",
    slug: "biodegradable-golf-balls-materials",
    path: "/blog-biodegradable-golf-balls-materials",
    categories: ["Sustainability", "Product Guides"],
    author: {
      name: "Dr. Hafiz Waqas",
      image: "",
      bio: "Expert in sustainable materials and eco-friendly product development."
    }
  },
  {
    id: "2",
    title: "Biodegradable Golf Balls vs Conventional What Really Performs Better?",
    excerpt: "Discover the real performance differences between eco-friendly biodegradable golf balls and conventional rubber-core balls. Find out which is better for your game and the planet.",
    publishedDate: "2025-08-25",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Biodegradable vs Conventional Golf Balls.png",
    readTime: "7 min",
    slug: "biodegradable-vs-conventional-golf-balls",
    path: "/blog-biodegradable-vs-conventional",
    categories: ["Performance", "Comparison", "Sustainability"],
    author: {
      name: "Muhammad Harris",
      image: "",
      bio: "Passionate about sustainable golf solutions and environmental innovation."
    }
  },
  {
    id: "3",
    title: "From Tee to Sea: The Timeline for Biodegradable Golf Balls to Dissolve",
    excerpt: "Discover how long biodegradable golf balls take to dissolve in water and why it matters for eco-conscious golfers. From 2 weeks to complete breakdown, learn the science behind guilt-free golf.",
    publishedDate: "2025-09-03",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/1-golfer-hitting-shot-on-beach-playgreenly.png",
    readTime: "8 min",
    slug: "from-tee-to-sea-timeline",
    path: "/blog-from-tee-to-sea",
    categories: ["Sustainability", "Environmental Impact", "Eco-Friendly Products"],
    author: {
      name: "Dr. Hafiz Waqas",
      image: "",
      bio: "Expert in sustainable materials and eco-friendly product development."
    }
  },
  {
    id: "4",
    title: "Are Eco Golf Balls Safe for Fish and Oceans?",
    excerpt: "Discover the complete truth about eco golf balls and marine safety. Learn how biodegradable golf balls protect fish, oceans, and waterways while delivering guilt-free performance.",
    publishedDate: "2025-09-07",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/4-biodegradable-golf-ball-dissolving-underwater-coral-reef-eco-friendly.png",
    readTime: "6 min",
    slug: "are-eco-golf-balls-safe-for-fish-and-oceans",
    path: "/blog-are-eco-golf-balls-safe-for-fish-and-oceans",
    categories: ["Marine Safety", "Environmental Impact", "Eco-Friendly Products"],
    author: {
      name: "Muhammad Harris",
      image: "",
      bio: "Passionate about sustainable golf solutions and environmental innovation."
    }
  },
  {
    id: "5",
    title: "PlayGreenly vs Other Eco Golf Balls Which One Should You Choose?",
    excerpt: "Not all eco golf balls are equal. Compare PlayGreenly's safe, dissolvable, guilt-free design against other eco options. Discover why transparency, safety testing, and proven performance matter.",
    publishedDate: "2025-09-11",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/1-playgreenly-vs-other-eco-golf-balls-comparison.png",
    readTime: "10 min",
    slug: "playgreenly-vs-other-eco-golf-balls-which-one-should-you-choose",
    path: "/blog-play-greenly-vs-other-eco-golf-balls",
    categories: ["Product Comparison", "Eco-Friendly Products", "Golf Ball Reviews"],
    author: {
      name: "Muhammad Harris",
      image: "",
      bio: "Passionate about sustainable golf solutions and environmental innovation."
    }
  },
  {
    id: "8",
    title: "7 Ways Golf Courses Can Go Green (Without Losing Players)",
    excerpt: "Discover 7 practical ways for golf courses to adopt sustainable practices without sacrificing player experience. Learn about smart irrigation, native vegetation, and more.",
    publishedDate: "2025-10-06",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/8-eco-golf-future-sunset-cta.jpg",
    readTime: "9 min",
    slug: "7-ways-golf-courses-can-go-green",
    path: "/blog7ways-golf-courses-can-go-green",
    categories: ["Sustainability", "Golf Course Management", "Eco-Friendly"],
    author: {
      name: "Neha Dogra",
      image: "",
      bio: "Content writer passionate about sustainable practices and environmental awareness."
    }
  },
  {
    id: "9",
    title: "What’s the Biggest Issue in Sustainability (And Why Most People Miss It)?",
    excerpt: "The real challenges in sustainability often hide in plain sight. This article explores the hidden problems in sports and recreation, from microplastics to energy consumption, and why they matter more than you think.",
    publishedDate: "2025-10-08",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/1-The_Biggest_Issue_in_sustainability-%20(2).png",
    readTime: "8 min",
    slug: "biggest-issue-in-sustainability",
    path: "/blog-biggest-issue-in-sustainability",
    categories: ["Sustainability", "Environmental Awareness", "Hidden Impacts"],
    author: {
      name: "Neha Dogra",
      image: "",
      bio: "Content writer passionate about sustainable practices and environmental awareness."
    }
  },
  {
    id: "11",
    title: "Can You Hit Golf Balls Into Lakes? (And What Happens Next)",
    excerpt: "Explore the environmental impact of hitting golf balls into lakes and learn why choosing biodegradable options is a win for both your game and nature.",
    publishedDate: "2025-10-12",
    imageUrl: "https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Feature%20Image-09.png",
    readTime: "6 min",
    slug: "can-you-hit-golf-balls-into-lakes",
    path: "/blog-can-you-hit-golf-balls-into-lakes",
    categories: ["Sustainability", "Responsible Golf"],
    author: {
      name: "Alex Johnson",
      image: "",
      bio: "Environmental writer and golf enthusiast."
    }
  }
];
