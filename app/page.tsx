import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toogle";
import { HeroSection } from "./(component)/HeroSection";
import { SkillSection } from "./(component)/(skills)/SkillSection";
import { ExperienceSection } from "./(component)/ExperienceSection";
import { PortfolioSection } from "./(component)/(portfolio)/PortfolioSection";
import ExampleContactForm from "./(component)/ExampleContactForm";
import ExampleCommentForm from "./(component)/ExampleCommentForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillSection />
      <PortfolioSection />
      <ExampleContactForm/>
      <ExampleCommentForm/>
    </div>
  );
}
