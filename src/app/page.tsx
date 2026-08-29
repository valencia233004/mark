import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionDivider variant="wave" fillClassName="fill-background" />
        <About />
        <SectionDivider variant="angle" fillClassName="fill-[var(--color-warm-brown)]" className="opacity-5 dark:opacity-50" />
        <Stats />
        <SectionDivider variant="curve" fillClassName="fill-sand/40 dark:fill-[#0F0D0B]" />
        <Services />
        <SectionDivider variant="wave" fillClassName="fill-background" />
        <Process />
        <SectionDivider variant="angle" fillClassName="fill-background" />
        <Work />
        <SectionDivider variant="curve" fillClassName="fill-sand/40 dark:fill-[#0F0D0B]" />
        <Testimonials />
        <SectionDivider variant="wave" fillClassName="fill-background" />
        <Certifications />
        <SectionDivider variant="angle" fillClassName="fill-sand/40 dark:fill-[#0F0D0B]" />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
