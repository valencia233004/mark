import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
