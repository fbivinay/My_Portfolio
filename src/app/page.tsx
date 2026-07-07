import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
