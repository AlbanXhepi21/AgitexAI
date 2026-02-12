"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";

const projectTypes = [
  "AI/ML Project",
  "Data Pipelines & Analytics",
  "MLOps & Model Deployment",
  "Backend & APIs",
  "DevOps & Cloud",
  "Full-Stack Development",
  "Other",
];

const budgetRanges = [
  "< $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please describe your project (min 10 characters)"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitError("Form not configured. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const subject = `Contact: ${[data.firstName, data.lastName].filter(Boolean).join(" ") || "Inquiry"}`;
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          botcheck: "",
          ...data,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!json.success) {
        setSubmitError(json.message || "Something went wrong. Please try again or email albanxhepi@agitexai.com.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please try again or email albanxhepi@agitexai.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 text-white"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-deep-blue) 0%, var(--primary-deep-blue-dark) 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Let's Build Something Amazing"
            subtitle="Ready to transform your business? Let's connect."
            light
            centered
          />

          {submitted ? (
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-2xl text-center">
              <p className="text-gray-900 font-semibold text-lg">
                Thank you! We&apos;ll get back to you soon.
              </p>
              <p className="text-gray-600 mt-2">
                In the meantime, feel free to reach out at albanxhepi@agitexai.com
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-12 bg-white rounded-2xl p-8 shadow-2xl text-gray-900"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    {...register("firstName")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-deep-blue)] focus:ring-2 focus:ring-[var(--primary-deep-blue)]/20 outline-none transition"
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-deep-blue)] focus:ring-2 focus:ring-[var(--primary-deep-blue)]/20 outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-deep-blue)] focus:ring-2 focus:ring-[var(--primary-deep-blue)]/20 outline-none transition"
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-deep-blue)] focus:ring-2 focus:ring-[var(--primary-deep-blue)]/20 outline-none transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    {...register("company")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-deep-blue)] focus:ring-2 focus:ring-[var(--primary-deep-blue)]/20 outline-none transition"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    {...register("projectType")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-deep-blue)] focus:ring-2 focus:ring-[var(--primary-deep-blue)]/20 outline-none transition bg-white"
                  >
                    <option value="">Select...</option>
                    {projectTypes.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-deep-blue)] focus:ring-2 focus:ring-[var(--primary-deep-blue)]/20 outline-none transition bg-white"
                  >
                    <option value="">Select...</option>
                    {budgetRanges.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message / Project Description *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-deep-blue)] focus:ring-2 focus:ring-[var(--primary-deep-blue)]/20 outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitError && (
                <p className="mt-4 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
                  {submitError}
                </p>
              )}
              <div className="mt-8">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2 inline" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-12 text-center text-white/90">
            <p className="font-medium mb-4">Prefer to talk directly?</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:albanxhepi@agitexai.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                albanxhepi@agitexai.com
              </a>
              <a
                href="tel:+355688829375"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                +355 68 88 29 375
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
