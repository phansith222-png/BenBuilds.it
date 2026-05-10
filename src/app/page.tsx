import { HeroSection } from "@/components/sections/HeroSection";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { AboutSection } from "@/components/sections/AboutSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeroSection />
      <QuoteBanner />
      <AboutSection />
      <LanguagesSection />
      <RoadmapSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
