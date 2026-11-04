import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";

export const metadata: Metadata = {
  title: "All projects",
  description: "Live websites, mobile apps and SaaS products designed by Mohammed Sifat.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-mist">
      <span id="top" />
      <Navbar active="projects" />
      <main>
        <section className="pt-20 pb-10">
          <div className="wrap flex flex-col items-center gap-[18px] text-center">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
              <Link href="/" className="text-muted no-underline hover:text-accent">Home</Link>
              <span aria-hidden>›</span>
              <span className="font-semibold text-ink">All projects</span>
            </nav>
            <h1 className="m-0 font-display text-[68px] leading-[1.05] font-extrabold tracking-[-0.045em] text-[#1A1A1F] max-md:text-[42px]">All Projects</h1>
            <p className="m-0 max-w-[620px] text-lg leading-[1.6] text-muted">
              A selection from 50+ projects: live websites, mobile apps and SaaS products for teams in the UK, UAE, France and Bangladesh.
            </p>
          </div>
        </section>
        <ProjectsBrowser />
      </main>
      <Footer tone="white" />
    </div>
  );
}
