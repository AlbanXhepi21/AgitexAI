"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/ui/Reveal";

const PUBLIC_EMAIL = "albanxhepi@agitexai.com";

const projectTypes = [
  "AI agents or RAG",
  "Data pipelines & MLOps",
  "Cloud-native backend",
  "Something else",
];

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().optional(),
  message: z.string().min(10, "Please add a bit more detail (min 10 characters)"),
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
      setSubmitError(
        "Form not configured. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env"
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const subject = `Contact: ${data.name}`;
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          botcheck: "",
          name: data.name,
          email: data.email,
          projectType: data.projectType ?? "",
          message: data.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!json.success) {
        setSubmitError(
          json.message ||
            `Something went wrong. Please try again or email ${PUBLIC_EMAIL}.`
        );
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError(`Network error. Please try again or email ${PUBLIC_EMAIL}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-28 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <SectionHeader
            label="Get in touch"
            title="Start a conversation"
            subtitle="We reply within 24 hours on business days."
          />
        </Reveal>

        {submitted ? (
          <div className="mt-12 max-w-xl mx-auto rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-8 py-10 text-center">
            <p className="text-[var(--text-primary)] font-semibold text-lg">
              Thank you! We&apos;ll get back to you soon.
            </p>
            <p className="text-[var(--text-secondary)] mt-3 text-sm">
              You can also write to{" "}
              <a
                className="text-[var(--accent-bright)] hover:underline"
                href={`mailto:${PUBLIC_EMAIL}`}
              >
                {PUBLIC_EMAIL}
              </a>
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div>
                  <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-1.5">
                    Your name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--navy)] text-[var(--text-primary)] text-sm outline-none transition focus:border-[var(--accent-dim)] focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--navy)] text-[var(--text-primary)] text-sm outline-none transition focus:border-[var(--accent-dim)] focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                    placeholder="jane@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-1.5">
                    What do you need?
                  </label>
                  <select
                    {...register("projectType")}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--navy)] text-[var(--text-primary)] text-sm outline-none transition focus:border-[var(--accent-dim)] focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full min-h-[120px] px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--navy)] text-[var(--text-primary)] text-sm outline-none transition resize-y focus:border-[var(--accent-dim)] focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                    placeholder="What are you building? What's the timeline?"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                {submitError && (
                  <p className="text-red-300 text-sm bg-red-950/40 px-4 py-3 rounded-lg border border-red-900/50">
                    {submitError}
                  </p>
                )}
                <Button type="submit" variant="primary" size="md" disabled={isSubmitting} className="w-fit mt-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2 inline" />
                      Sending…
                    </>
                  ) : (
                    "Send message →"
                  )}
                </Button>
              </form>
            </Reveal>
            <Reveal>
              <div className="flex flex-col gap-7 pt-2 lg:pt-8">
                <div>
                  <h4 className="font-display font-semibold text-[15px] text-[var(--text-primary)] mb-1">
                    Email
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <a
                      href={`mailto:${PUBLIC_EMAIL}`}
                      className="text-[var(--accent-bright)] hover:underline"
                    >
                      {PUBLIC_EMAIL}
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[15px] text-[var(--text-primary)] mb-1">
                    Based in
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Tirana, Albania
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[15px] text-[var(--text-primary)] mb-1">
                    Serving
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    US &amp; EU markets
                    <br />
                    Flexible timezone collaboration
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[15px] text-[var(--text-primary)] mb-1">
                    Response time
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Within 24 hours on business days
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 pt-4 border-t border-[var(--border)]">
                  <a
                    href={`mailto:${PUBLIC_EMAIL}`}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-bright)] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email us
                  </a>
                  <a
                    href="tel:+355688829375"
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-bright)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +355 68 88 29 375
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
