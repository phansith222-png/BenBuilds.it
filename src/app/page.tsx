import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Marquee } from "@/components/ui/Marquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MARQUEE_ITEMS, CTA_MARQUEE_ITEMS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main>
        <HeroSection />
        <Marquee items={MARQUEE_ITEMS} dark />
        <AboutSection />
        <LanguagesSection />
        <ProjectsSection />
        <Marquee items={CTA_MARQUEE_ITEMS} dark={false} />
        <RoadmapSection />
        <ContactSection />
      </main>
    </>
  );
}
