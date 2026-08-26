"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder — wire up to a form handler (Formspree, Resend, etc.) later
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact" className="py-20 md:py-28 bg-sand/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — contact info */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-warm-charcoal tracking-tight">
              Get in touch
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed max-w-md">
              Have a workflow that needs fixing or a system you want to build?
              Let&apos;s talk about it.
            </p>

            <div className="mt-8 space-y-4">
              {/* (#29 — aria-labels on email/phone links) */}
              <a
                href="mailto:valenciajmark23@gmail.com"
                aria-label="Send email to valenciajmark23@gmail.com"
                className="flex items-center gap-3 text-warm-charcoal hover:text-amber-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-sm sm:text-base">
                  valenciajmark23@gmail.com
                </span>
              </a>

              <a
                href="tel:09512245171"
                aria-label="Call 0951 224 5171"
                className="flex items-center gap-3 text-warm-charcoal hover:text-amber-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-sm sm:text-base">0951 224 5171</span>
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-xl border border-sage-500/30 bg-sage-100/50">
                <CheckCircle2 className="w-12 h-12 text-sage-500 mb-4" />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-warm-charcoal">
                  Message received!
                </h3>
                <p className="mt-2 text-warm-gray">
                  I&apos;ll get back to you soon.
                </p>
                {/* (#27 — reset button to send another message) */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 text-sm font-medium text-amber-600 hover:text-amber-700 underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-warm-charcoal mb-1.5"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="invalid:[&:not(:placeholder-shown)]:border-red-400 invalid:[&:not(:placeholder-shown)]:ring-red-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-warm-charcoal mb-1.5"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="invalid:[&:not(:placeholder-shown)]:border-red-400 invalid:[&:not(:placeholder-shown)]:ring-red-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-warm-charcoal mb-1.5"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about the workflow or system you need help with…"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="invalid:[&:not(:placeholder-shown)]:border-red-400 invalid:[&:not(:placeholder-shown)]:ring-red-400"
                  />
                </div>

                {/* (#28 — loading/disabled state on submit) */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
