// components/FaqSection.tsx
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What makes PlayGreenly golf balls different from regular golf balls?",
    answer:
      "PlayGreenly golf balls are made from water-soluble, non-toxic materials that naturally dissolve in about 10 days. Unlike traditional golf balls that can take centuries to break down, ours are designed for guilt-free play near lakes, rivers, and oceans.",
  },
  {
    question: "Are PlayGreenly golf balls safe for the environment?",
    answer:
      "Yes. They are crafted from PVA and natural plasticizers that fully dissolve without leaving harmful residues. Lab tests confirm they contain no heavy metals or toxins, making them safe for marine life and the environment.",
  },
  {
    question: "How long does it take for a PlayGreenly golf ball to dissolve?",
    answer:
      "In typical conditions, the ball dissolves about 90% within 7 days and completely in 10–14 days, depending on water temperature and movement.",
  },
  {
    question: "Can I use PlayGreenly golf balls for regular games?",
    answer:
      "They’re made for casual and recreational play. You’ll get a realistic feel and strong performance for short-distance shots — perfect for eco-friendly practice or fun near water.",
  },
  {
    question: "Do PlayGreenly golf balls float or sink?",
    answer:
      "They are designed to sink in water and dissolve naturally, ensuring they leave no trace behind or float on the surface.",
  },
  {
    question: "Where can I buy PlayGreenly golf balls?",
    answer:
      "You can order directly from our Amazon store, with fast delivery and verified product authenticity.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-brand-light-bg py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <div>
            <Image
              src="https://static.databutton.com/public/ff0abc89-d548-478d-8f46-7347ee4c49a2/Packaging(FAQs).png"
              alt="Play Greenly eco-friendly golf balls box"
              className="w-full h-auto object-cover"
              width={600}
              height={600}
              loading="lazy"
            />
          </div>

          {/* RIGHT FAQ CONTENT */}
          <div>
            <div className="text-left mb-8">
              <span className="text-brand-teal font-bold text-sm tracking-widest">
                FAQS
              </span>

              <h2 className="text-h2 font-bold text-brand-green mt-2">
                Frequently Asked Questions
              </h2>

              <p className="text-body text-brand-black mt-4 max-w-xl">
                Have questions? We’ve got answers. Explore our FAQ to learn
                everything you need to know about our eco-friendly products.
              </p>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="border-b"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-body text-brand-black/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>
        </div>
      </div>
    </section>
  );
}
