import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GMMessage from "@/components/GMMessage";
import Vision from "@/components/Vision";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <GMMessage />
        <Vision />
        <Values />
        <Services />
        <Projects />
        <WhyUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
