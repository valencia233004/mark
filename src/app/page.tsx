"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Mail, Menu, X } from "lucide-react";

const services = [
  { title: "Lead routing & CRM hygiene", text: "Every form, call, and referral lands in the right pipeline with an owner, a stage, and a next action." },
  { title: "Follow-up that respects timing", text: "SMS and email sequences that branch around replies, bookings, missed calls, and real human context." },
  { title: "Booking systems that hold", text: "Calendar logic, confirmations, reminders, and recovery paths that protect the appointment after the click." },
  { title: "Reporting you can actually use", text: "A clean handoff from tools to weekly visibility: source, speed-to-lead, stage movement, and outcome." },
];

const work = [
  { tag: "REAL ESTATE", title: "From missed inquiry to owned opportunity", result: "Faster first response", body: "A lead form now creates the contact, assigns an agent, starts a reply window, and alerts the team only when a human decision is needed.", tools: "GoHighLevel · Zapier · Google Sheets" },
  { tag: "SERVICE BUSINESS", title: "A booking path with a recovery path", result: "Fewer empty slots", body: "Confirmation, reminder, reschedule, and no-show branches are mapped as one system instead of four disconnected automations.", tools: "GoHighLevel · Calendly · Twilio" },
  { tag: "E-COMMERCE", title: "Post-purchase feedback on cue", result: "More useful reviews", body: "Order events trigger a timed check-in, route unhappy replies privately, and invite happy customers to share their experience.", tools: "Shopify · Make · Twilio" },
];

function WorkflowMap() {
  return (
    <div className="relative border border-[#8eaaa0] bg-[#e7f0ec] p-4 sm:p-6 shadow-[10px_10px_0_#c5d7d0]" aria-label="Lead workflow map">
      <div className="mb-5 flex items-center justify-between"><span className="eyebrow">A working example</span><span className="mono text-[10px] text-[#61716d]">FLOW_014 / LIVE</span></div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        <div className="border border-[#8eaaa0] bg-[#f7faf7] p-3"><span className="mono text-[10px] text-[#61716d]">TRIGGER</span><strong className="mt-2 block text-sm sm:text-base text-[#154b66]">New lead form</strong><p className="mt-1 text-xs text-[#61716d]">source + consent</p></div>
        <div className="signal-line h-px w-7 sm:w-12" />
        <div className="border border-[#8eaaa0] bg-[#f7faf7] p-3"><span className="mono text-[10px] text-[#61716d]">ACTION</span><strong className="mt-2 block text-sm sm:text-base text-[#154b66]">Create + assign</strong><p className="mt-1 text-xs text-[#61716d]">owner + stage</p></div>
      </div>
      <div className="mx-auto my-3 h-7 w-px bg-[#f26b3a]" />
      <div className="border border-[#f26b3a] bg-[#fff8f3] p-3"><div className="flex items-center justify-between"><span className="mono text-[10px] text-[#f26b3a]">BRANCH</span><span className="rounded-full bg-[#f9c5b1] px-2 py-1 text-[10px] font-semibold text-[#154b66]">IF / THEN</span></div><strong className="mt-2 block text-sm sm:text-base text-[#154b66]">Reply window opens</strong><p className="mt-1 text-xs text-[#61716d]">reply → stop sequence · no reply → next touch</p></div>
      <div className="mt-5 flex items-center justify-between border-t border-[#b4c8c0] pt-4"><span className="mono text-[10px] text-[#61716d]">VISIBLE TO CLIENT</span><span className="flex items-center gap-1 text-xs font-semibold text-[#154b66]"><Check size={14} className="text-[#f26b3a]" /> next action</span></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openWork, setOpenWork] = useState(0);
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#cbd9d3]/80 bg-[#f3f6f2]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3 text-[#154b66]"><span className="grid h-8 w-8 place-items-center bg-[#154b66] text-sm font-bold text-[#f3f6f2]">JM</span><span className="font-semibold tracking-tight">John Mark<span className="text-[#f26b3a]">.</span></span></a>
          <div className="hidden items-center gap-8 md:flex"><a href="#systems" className="text-sm text-[#61716d] hover:text-[#154b66]">Systems</a><a href="#work" className="text-sm text-[#61716d] hover:text-[#154b66]">Selected work</a><a href="#contact" className="rounded-sm bg-[#154b66] px-4 py-2.5 text-sm font-semibold text-[#f3f6f2] transition hover:bg-[#f26b3a]">Start a conversation <ArrowUpRight className="ml-1 inline" size={15} /></a></div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="border-t border-[#cbd9d3] bg-[#f3f6f2] p-5 md:hidden"><div className="flex flex-col gap-4"><a href="#systems" onClick={() => setMenuOpen(false)}>Systems</a><a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#contact" onClick={() => setMenuOpen(false)} className="font-semibold text-[#f26b3a]">Start a conversation →</a></div></div>}
      </header>

      <main id="top">
        <section className="grid-paper border-b border-[#cbd9d3] px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
          <div className="mx-auto grid max-w-6xl items-end gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div className="hero-enter"><p className="eyebrow">Revenue operations / Philippines → worldwide</p><h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.055em] text-[#154b66] sm:text-7xl">The work after the lead clicks <span className="text-[#f26b3a]">matters.</span></h1><p className="hero-enter hero-enter-delay mt-7 max-w-xl text-lg leading-relaxed text-[#61716d]">I build the CRM logic, follow-up paths, and booking systems that keep good opportunities moving—without adding another tab to babysit.</p><div className="hero-enter hero-enter-delay-2 mt-9 flex flex-wrap items-center gap-5"><a href="#contact" className="bg-[#f26b3a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#154b66]">Tell me where it breaks <ArrowUpRight className="ml-1 inline" size={16} /></a><a href="#work" className="text-sm font-semibold text-[#154b66] underline decoration-[#f26b3a] decoration-2 underline-offset-8">See the systems</a></div></div>
            <div className="hero-enter hero-enter-delay-2"><WorkflowMap /></div>
          </div>
        </section>

        <section id="systems" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-32"><div><p className="eyebrow">What I fix</p><h2 className="mt-4 max-w-sm text-4xl font-semibold leading-tight tracking-[-.04em] text-[#154b66]">Your tools are fine. The handoffs are not.</h2><p className="mt-5 max-w-sm leading-relaxed text-[#61716d]">A useful automation is not a magic trick. It is a clear agreement between a trigger, a decision, and the next human action.</p></div><div className="divide-y divide-[#cbd9d3] border-y border-[#cbd9d3]">{services.map((service) => <article key={service.title} className="hover-lift grid gap-3 py-6 sm:grid-cols-[.8fr_1.2fr] sm:gap-10"><h3 className="text-lg font-semibold text-[#154b66]">{service.title}</h3><p className="text-sm leading-relaxed text-[#61716d]">{service.text}</p></article>)}</div></section>

        <section id="work" className="bg-[#154b66] px-5 py-24 text-[#f3f6f2] sm:px-8 sm:py-32"><div className="mx-auto max-w-6xl"><div className="flex flex-col justify-between gap-5 border-b border-[#6f91a0] pb-10 sm:flex-row sm:items-end"><div><p className="eyebrow text-[#f9a487]">Selected systems</p><h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">Built around the moment money gets lost.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#bcd0d0]">Not “projects.” Small operating systems with a clear before, after, and owner.</p></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{work.map((item, index) => <article key={item.title} className="hover-lift border border-[#6f91a0] bg-[#1c5976] p-6"><div className="flex items-center justify-between"><span className="mono text-[10px] text-[#f9a487]">{item.tag}</span><span className="mono text-[10px] text-[#bcd0d0]">0{index + 1}</span></div><h3 className="mt-12 text-2xl font-semibold leading-tight">{item.title}</h3><p className="mt-5 text-sm leading-relaxed text-[#cfe0dc]">{item.body}</p><button onClick={() => setOpenWork(openWork === index ? -1 : index)} className="mt-6 flex w-full items-center justify-between border-t border-[#6f91a0] pt-4 text-left text-sm font-semibold text-[#f3f6f2]">{item.result}<ChevronDown size={17} className={`transition-transform ${openWork === index ? "rotate-180" : ""}`} /></button>{openWork === index && <p className="mt-4 border-l-2 border-[#f26b3a] pl-3 text-xs leading-relaxed text-[#cfe0dc]">Stack: {item.tools}</p>}</article>)}</div></div></section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_.85fr] lg:items-center"><div><p className="eyebrow">A measured process</p><h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight tracking-[-.04em] text-[#154b66] sm:text-5xl">Map the leak. Build the path. Make it boring.</h2><p className="mt-6 max-w-lg leading-relaxed text-[#61716d]">We start with the real journey—not a blank automation canvas. Then we document what should happen when the ideal path changes.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Audit the current handoff", "Define the decision points", "Build and test the branches", "Document the new normal"].map((step, i) => <div key={step} className="flex gap-3 border-t border-[#cbd9d3] pt-4"><span className="mono text-xs text-[#f26b3a]">0{i + 1}</span><span className="text-sm font-semibold text-[#154b66]">{step}</span></div>)}</div></div><div className="border-l-4 border-[#f26b3a] bg-[#e7f0ec] p-7 sm:p-10"><p className="mono text-xs text-[#61716d]">THE PROMISE</p><p className="mt-5 text-2xl font-semibold leading-snug text-[#154b66]">“You should be able to explain what happens to a lead when you are not in the room.”</p></div></section>

        <section id="contact" className="border-t border-[#cbd9d3] bg-[#fff8f3] px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_.8fr]"><div><p className="eyebrow">Start with the messy bit</p><h2 className="mt-4 max-w-xl text-5xl font-semibold leading-[.98] tracking-[-.05em] text-[#154b66]">Where does the handoff go quiet?</h2><p className="mt-6 max-w-md leading-relaxed text-[#61716d]">Send the rough version. A form, a screenshot, a voice note in words. I will come back with the first place I would look.</p><a href="mailto:valenciajmark23@gmail.com" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#154b66] underline decoration-[#f26b3a] decoration-2 underline-offset-8"><Mail size={17} /> valenciajmark23@gmail.com</a></div><form action="https://formspree.io/f/xpwzgkjo" method="POST" className="grid gap-5"><label className="grid gap-2 text-sm font-semibold text-[#154b66]">Name<input name="name" required placeholder="Your name" className="border border-[#cbd9d3] bg-white px-4 py-3 font-normal outline-none focus:border-[#f26b3a]" /></label><label className="grid gap-2 text-sm font-semibold text-[#154b66]">Email<input name="email" type="email" required placeholder="you@example.com" className="border border-[#cbd9d3] bg-white px-4 py-3 font-normal outline-none focus:border-[#f26b3a]" /></label><label className="grid gap-2 text-sm font-semibold text-[#154b66]">The situation<textarea name="message" required rows={5} placeholder="What is happening now, and what should happen instead?" className="resize-y border border-[#cbd9d3] bg-white px-4 py-3 font-normal outline-none focus:border-[#f26b3a]" /></label><button className="justify-self-start bg-[#154b66] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f26b3a]" type="submit">Send the context <ArrowUpRight className="ml-1 inline" size={16} /></button></form></div></section>
      </main>
      <footer className="flex flex-col justify-between gap-4 bg-[#17211f] px-5 py-8 text-[#bcd0d0] sm:flex-row sm:px-8"><p className="text-sm">John Mark<span className="text-[#f26b3a]">.</span> Automation & CRM systems.</p><p className="mono text-[10px]">Built for the follow-through</p></footer>
    </div>
  );
}
