"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import MagneticWrapper from "@/components/MagneticWrapper";
import MaskReveal from "@/components/MaskReveal";
import SectionEyebrow from "@/components/SectionEyebrow";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        break;
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email.";
        break;
      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.trim().length < 10) return "Message must be at least 10 characters.";
        break;
    }
    return undefined;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xyzexample", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});
  };

  return (
    <SectionWrapper id="contact" className="py-20 md:py-28 bg-sand/40 dark:bg-warm-brown/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <SectionEyebrow number="06" label="LET'S CONNECT" />
            <MaskReveal>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Get in touch
              </h2>
            </MaskReveal>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Have a workflow that needs fixing or a system you want to build? Let&apos;s talk about it.
            </p>

            <div className="mt-8 space-y-4">
              <a href="mailto:valenciajmark23@gmail.com" aria-label="Send email to valenciajmark23@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-100 dark:group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <span className="text-sm sm:text-base">valenciajmark23@gmail.com</span>
              </a>
              <a href="tel:09512245171" aria-label="Call 0951 224 5171"
                className="flex items-center gap-3 text-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-100 dark:group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <span className="text-sm sm:text-base">0951 224 5171</span>
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-xl border border-sage-500/30 bg-sage-100/50 dark:bg-sage-500/10">
                <CheckCircle2 className="w-12 h-12 text-sage-500 mb-4" />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">Message received!</h3>
                <p className="mt-2 text-muted-foreground">I&apos;ll get back to you soon.</p>
                <button type="button" onClick={handleReset}
                  className="mt-4 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 underline underline-offset-4 transition-colors cursor-pointer">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "border-red-400 focus:border-red-400" : ""}
                    aria-invalid={!!(errors.name && touched.name)}
                    aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "border-red-400 focus:border-red-400" : ""}
                    aria-invalid={!!(errors.email && touched.email)}
                    aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about the workflow or system you need help with…"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.message && touched.message ? "border-red-400 focus:border-red-400" : ""}
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                  />
                  {errors.message && touched.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-sm text-red-600 dark:text-red-400">
                    {submitError}
                  </div>
                )}

                <MagneticWrapper className="inline-block">
                  <Button type="submit" size="lg" className="w-full sm:w-auto btn-ripple" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending…</>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" />Send message</>
                    )}
                  </Button>
                </MagneticWrapper>

                <p className="text-xs text-muted-foreground/60 mt-3 italic">
                  Powered by automation — just like the systems I build for you.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
