import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Enthusiast Golfer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "These biodegradable balls are a game-changer! They perform just like premium balls, and I feel great knowing I'm not leaving plastic on the course.",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    title: "Weekend Player",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I was skeptical about the performance, but they fly straight and true. Plus, the peace of mind is priceless. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Course Owner",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "We've started using these for our driving range. Our members love the eco-friendly initiative, and it reduces our environmental impact significantly.",
    rating: 5,
  },
  {
    name: "Jessica Davis",
    title: "Beginner Golfer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "As someone new to golf, it's great to find a product that aligns with my values. They make the game even more enjoyable.",
    rating: 5,
  },
  {
    name: "David Martinez",
    title: "Golf Coach",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "I recommend these to all my students. It's a great way to teach the next generation of golfers about sustainability.",
    rating: 5,
  },
    {
    name: "Emily Rodriguez",
    title: " Avid Golfer",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    text: "Finally, a guilt-free way to practice my swing near the water hazards. These balls dissolve as promised. Fantastic innovation!",
    rating: 5,
  },
  {
    name: "Chris Thompson",
    title: "Casual Player",
    avatar: "https://randomuser.me/api/portraits/men/81.jpg",
    text: "Great feel off the club, and the environmental benefit is a huge plus. I've already bought my second batch.",
    rating: 5,
  },
  {
    name: "Laura White",
    title: "Eco-conscious Consumer",
    avatar: "https://randomuser.me/api/portraits/women/88.jpg",
    text: "I bought these as a gift for my dad, and he was thrilled. A perfect product for anyone who loves golf and nature.",
    rating: 5,
  },
  {
    name: "James Green",
    title: "Long-time Golfer",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "Played a full round with these and couldn't tell the difference in performance. The fact that they're biodegradable is just brilliant.",
    rating: 5,
  },
  {
    name: "Patricia Hill",
    title: "Tournament Organizer",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    text: "We're considering these for our charity tournament next year. A great way to promote sustainability in the sport.",
    rating: 5,
  }
];

const TestimonialCard = ({ name, title, avatar, text, rating }: (typeof testimonials)[0]) => (
  <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center mx-4 flex-shrink-0 w-80 h-96">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} fill="currentColor" className="w-5 h-5" />
      ))}
    </div>
    <p className="text-gray-600 mb-6">{text}</p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

export const Testimonial: React.FC = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative bg-brand-light-bg py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-teal font-bold tracking-widest text-sm">TESTIMONIAL</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            What Our Customers Are Saying
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real reviews from golfers who love our eco-friendly products.
          </p>
        </div>

        <div className="relative w-full overflow-hidden" data-testid="testimonial-slider">
          <div className="flex animate-scroll hover:pause">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          <style jsx>{`
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
            .hover\\:pause:hover {
              animation-play-state: paused;
            }
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
      
      {/* Floating golf ball */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-24 opacity-20">
        <img 
          src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/white-golf-ball.png" 
          alt="Floating golf ball"
          className="w-80 h-80"
        />
      </div>
    </section>
  );
};

export default Testimonial;
