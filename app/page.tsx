import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/home/About";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { Services } from "@/components/home/Services";

export default function HomePage() {
  return (
    <>
      <Navbar onHome />
      <main>
        <Hero />
        <ProjectsSection />
        <Services />
        <Process />
        <About />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
