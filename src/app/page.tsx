import Slam from "@/components/Slam";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Slam />
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-[var(--sumi)] focus:px-4 focus:py-2 focus:text-[var(--paper)]"
      >
        Skip to content
      </a>

      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <div className="grain" />
    </>
  );
}
