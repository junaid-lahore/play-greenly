"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Please select quantity"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function BulkOrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form Visual Submit:", data);

      toast.success("Your inquiry has been recorded (UI only). Backend will be added later.");
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* NAME */}
        <div>
          <label className="block font-semibold">Name *</label>
          <input
            {...register("name")}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* EMAIL */}
        <div>
          <label className="block font-semibold">Email *</label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="your@email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* COMPANY */}
        <div>
          <label className="block font-semibold">Company (Optional)</label>
          <input
            {...register("company")}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Your company"
          />
        </div>

        {/* PRODUCT */}
        <div>
          <label className="block font-semibold">Product *</label>
          <select {...register("product")} className="w-full px-4 py-2 border rounded-md">
            <option value="">Select product</option>
            <option value="Golf Balls">Golf Balls</option>
            <option value="Court Tape">Court Tape</option>
          </select>
          {errors.product && <p className="text-red-500 text-sm">{errors.product.message}</p>}
        </div>

        {/* QUANTITY */}
        <div>
          <label className="block font-semibold">Quantity *</label>
          <select {...register("quantity")} className="w-full px-4 py-2 border rounded-md">
            <option value="">Select range</option>
            <option value="100-500">100–500</option>
            <option value="501-1000">501–1000</option>
            <option value="1001-5000">1001–5000</option>
            <option value="5001+">5001+</option>
          </select>
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block font-semibold">Message *</label>
          <textarea
            rows={4}
            {...register("message")}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Describe your bulk order need"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-brand-teal text-white rounded-md"
        >
          {isSubmitting ? "Submitting..." : "Submit Bulk Order Inquiry"}
        </button>
      </form>
    </div>
  );
}
