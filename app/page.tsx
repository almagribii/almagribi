"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  Easing,
  Variants,
} from "framer-motion";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "./(component)/HeroSection";
import { SkillSection } from "./(component)/(skills)/SkillSection";
import { ExperienceSection } from "./(component)/ExperienceSection";
import { PortfolioSection } from "./(component)/(portfolio)/PortfolioSection";
import ContactPage from "./(component)/(contact)/ContactSection";

interface AnimatedSectionProps {
  children: React.ReactNode;
  x?: number;
  delay?: number;
}

const AnimatedSection = ({
  children,
  x = 0,
  delay = 0.2,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 50, x: x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: "easeOut" as Easing,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroSection />
      </motion.div>

      <AnimatedSection delay={0.1}>
        <ExperienceSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <SkillSection />
      </AnimatedSection>

      <AnimatedSection delay={0.1} x={-100}>
        <PortfolioSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <ContactPage />
      </AnimatedSection>
    </div>
  );
}
