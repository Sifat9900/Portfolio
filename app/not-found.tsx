import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="wrap flex flex-col items-center gap-5 py-32 text-center">
        <span className="eyebrow">404</span>
        <h1 className="m-0 font-display text-5xl font-extrabold tracking-[-0.03em]">This page doesn’t exist</h1>
        <p className="m-0 text-lg text-muted">The project may have moved. Try the full list instead.</p>
        <Link href="/projects" className="press inline-flex h-12 items-center rounded-full bg-ink px-6 font-semibold text-white no-underline hover:text-white">
          See all projects
        </Link>
      </main>
    </div>
  );
}
