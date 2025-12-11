import { Navbar } from "@/components/navbar";
import { HeroSection } from "./(component)/HeroSection";
import { SkillSection } from "./(component)/(skills)/SkillSection";
import { ExperienceSection } from "./(component)/ExperienceSection";
import { PortfolioSection } from "./(component)/(portfolio)/PortfolioSection";
import ContactPage from "./(component)/(contact)/ContactSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillSection />
      <PortfolioSection />
      <ContactPage/>
    </div>
  );
}
