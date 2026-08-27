"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import MagneticWrapper from "@/components/MagneticWrapper";
import MaskReveal from "@/components/MaskReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact" className="py-20 md:py-28 bg-sand/40 dark:bg-warm-brown/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
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
                  <Input id="contact-name" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange}
                    className="invalid:[&:not(:placeholder-shown)]:border-red-400" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <Input id="contact-email" name="email" type="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange}
                    className="invalid:[&:not(:placeholder-shown)]:border-red-400" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <Textarea id="contact-message" name="message" placeholder="Tell me about the workflow or system you need help with…" required value={formData.message} onChange={handleChange}
                    className="invalid:[&:not(:placeholder-shown)]:border-red-400" />
                </div>
                <MagneticWrapper className="inline-block">
                  <Button type="submit" size="lg" className="w-full sm:w-auto btn-ripple" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending…</>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" />Send message</>
                    )}
                  </Button>
                </MagneticWrapper>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
