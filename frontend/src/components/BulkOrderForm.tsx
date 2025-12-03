import React, { useState } from "react";
import brain from "brain"; 
import { BulkOrderRequest } from "./brain/data-contracts"; // Updated import path
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  product: z.string().min(1, { message: "Please select a product" }), // Added product field
  quantity: z.string().min(1, { message: "Please specify an approximate quantity" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export interface BulkOrderFormProps {
  onSuccess?: () => void;
}

export function BulkOrderForm({ onSuccess }: BulkOrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      product: "", // Added product field
      quantity: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // We need to import brain and the correct types
    // import brain from "brain";
    // import { BulkOrderRequest } from "types"; // Assuming this type will be generated

    try {
      // The brain client methods are generated from the API names.
      // If the API is named bulk_order_api and the endpoint function is submit_bulk_order,
      // the client method would likely be brain.submit_bulk_order or similar.
      const payload: BulkOrderRequest = data; // Use the imported type
      const response = await brain.submit_bulk_order(payload); 
      
      if (response.ok) {
        toast.success("Your inquiry has been submitted successfully!");
        reset();
        if (onSuccess) {
          onSuccess();
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.detail || "There was a problem submitting your inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was a problem submitting your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-gray/50 p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" aria-describedby="form-description">
        <div className="sr-only" id="form-description">Bulk order inquiry form for Play Greenly eco-friendly sports products, including biodegradable golf balls and court marking tape. All fields marked with an asterisk are required.</div>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-black mb-1.5 font-body">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-brand-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50 font-body`}
              placeholder="Your full name"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 font-body" id="name-error">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-black mb-1.5 font-body">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-brand-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50 font-body`}
              placeholder="Your email address"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 font-body" id="email-error">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-brand-black mb-1.5 font-body">
              Company/Organization (Optional)
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className="w-full px-4 py-2 border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50 font-body"
              placeholder="Your company name"
              disabled={isSubmitting}
              aria-required="false"
            />
          </div>

          <div>
            <label htmlFor="product" className="block text-sm font-semibold text-brand-black mb-1.5 font-body">
              Product Interested In <span className="text-red-500">*</span>
            </label>
            <select
              id="product"
              {...register("product")}
              className={`w-full px-4 py-2 border ${errors.product ? 'border-red-500' : 'border-brand-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50 font-body appearance-none bg-white`}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.product ? "true" : "false"}
              aria-describedby={errors.product ? "product-error" : undefined}
            >
              <option value="">Select a product</option>
              <option value="Golf Balls">Golf Balls</option>
              <option value="Court Tape">Court Tape</option>
            </select>
            {errors.product && (
              <p className="mt-1 text-sm text-red-500 font-body" id="product-error">{errors.product.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="quantity" className="block text-sm font-semibold text-brand-black mb-1.5 font-body">
              Estimated Quantity <span className="text-red-500">*</span>
            </label>
            <select
              id="quantity"
              {...register("quantity")}
              className={`w-full px-4 py-2 border ${errors.quantity ? 'border-red-500' : 'border-brand-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50 font-body appearance-none bg-white`}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.quantity ? "true" : "false"}
              aria-describedby={errors.quantity ? "quantity-error" : undefined}
            >
              <option value="">Select quantity range</option>
              <option value="100-500">100-500 units</option>
              <option value="501-1000">501-1,000 units</option>
              <option value="1001-5000">1,001-5,000 units</option>
              <option value="5001+">5,001+ units</option>
            </select>
            {errors.quantity && (
              <p className="mt-1 text-sm text-red-500 font-body" id="quantity-error">{errors.quantity.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-black mb-1.5 font-body">
              Additional Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-brand-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50 font-body`}
              placeholder="Tell us about your specific requirements and questions"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500 font-body" id="message-error">{errors.message.message}</p>
            )}
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-7 py-3.5 bg-brand-teal text-white font-semibold rounded-md shadow-lg hover:bg-brand-green transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-body flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 tracking-wide"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Bulk Order Inquiry'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
