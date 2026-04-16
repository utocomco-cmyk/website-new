import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { StatsBar } from "@/components/sections/StatsBar";
import { CategorySection } from "@/components/sections/CategorySection";
import { ApplicationSection } from "@/components/sections/ApplicationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <StatsBar />
      <CategorySection />
      <ApplicationSection />
      <Footer />
    </main>
  );
}
