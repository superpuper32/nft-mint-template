import { MintSection } from "@/components/sections/MintSection";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MintSection />
    </main>
  );
}
