import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toogle";
import { HeroSection } from "./(component)/HeroSection";
import { SkillSection } from "./(component)/(skills)/SkillSection";
import { ExperienceSection } from "./(component)/ExperienceSection";
import { PortfolioSection } from "./(component)/(portfolio)/PortfolioSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillSection />
      <PortfolioSection />
    </div>
  );
}
