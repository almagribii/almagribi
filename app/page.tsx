import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toogle";
import { HeroSection } from "./(component)/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <HeroSection/>
    </div>
  );
}
