import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "utils/blogData";

interface Props {
  posts: BlogPost[];
}

export const OtherBlogPosts = ({ posts }: Props) => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;

    // Set up the autoplay timer
    const interval = setInterval(() => {
      scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api, scrollNext]);

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Other Blog Posts</h3>
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.id}>
              <div className="p-1">
                <Card className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-white border-l-4 border-brand-green/20 hover:border-brand-green">
                  <CardContent className="flex flex-col flex-grow p-6">
                    <h4 className="text-base font-semibold text-gray-900 mb-2 flex-grow leading-snug">
                      <Link
                        to={post.path}
                        className="hover:text-brand-teal transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h4>
                    <div className="text-sm text-gray-500 mt-auto">
                      <span>{post.readTime} read</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
