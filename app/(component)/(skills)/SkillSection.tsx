"use client";

import React, { useState, useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiFigma,
  SiDocker,
  SiNodedotjs,
  SiOpenjdk,
} from "react-icons/si";
import type { LogoItem } from "@/components/LogoLoop";
import { stackIcons } from "../(portfolio)/PortfolioData";
import { skillData, SkillItem, SkillCategory } from "./SkillData";
import LogoLoop from "@/components/LogoLoop";

type TabIconMap = {
  [key: string]: React.ReactNode;
};

const tabIcons: TabIconMap = {
  "Frontend Development": <SiReact className="w-5 h-5" />,
  "Backend & Mobile": <SiSpringboot className="w-5 h-5" />,
  "Database & DevOps": <SiDocker className="w-5 h-5" />,
  "Design & Tools": <SiFigma className="w-5 h-5" />,
};

const AnimatedProgressBar: React.FC<{ level: number }> = ({ level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(0);
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full bg-card-foreground/10 rounded-full h-3 relative overflow-hidden shadow-inner">
      <div
        style={{ width: `${width}%` }}
        className="h-full rounded-full transition-all duration-1500 ease-out 
                   bg-linear-to-r from-primary/70 to-primary shadow-lg shadow-primary/50"
      ></div>
      <span className="absolute right-0 top-0 bottom-0 pr-3 flex items-center text-xs font-extrabold text-foreground/80 dark:text-card-foreground">
        {level}%
      </span>
    </div>
  );
};

interface TabButtonProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const SkillTabButton: React.FC<TabButtonProps> = ({
  label,
  icon,
  active,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`
            flex-1 
            flex 
            items-center 
            justify-center 
            flex-col 
            sm:flex-row 
            space-y-1 
            sm:space-y-0 
            sm:space-x-2 
            py-3 
            px-1 
            sm:px-4 
            rounded-xl 
            text-xs 
            sm:text-sm 
            font-semibold 
            transition-all 
            duration-300 
            relative 
            z-10 
            ${
              active
                ? "bg-card text-primary shadow-xl border-2 border-primary/50"
                : "text-card-foreground/60 hover:text-card-foreground/90"
            }
        `}
  >
    <span className="w-5 h-5">{icon}</span>
    <span className="text-xs sm:text-sm text-center">{label}</span>
  </button>
);

const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => (
  <div
    className="flex flex-col items-start space-y-3 bg-card/50 p-4 rounded-xl border border-border/70 shadow-md 
              transition-all duration-300 transform hover:scale-[1.02] hover:shadow-primary/50"
  >
    <div className="flex items-center space-x-3">
      <div className="shrink-0 p-2 rounded-lg bg-primary/10">{skill.icon}</div>
      <p className="text-base font-bold text-foreground">{skill.name}</p>
    </div>

    <div className="w-full pt-2">
      <AnimatedProgressBar level={skill.level} />
    </div>
  </div>
);

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    skillData[0].title
  );

  const activeSkills =
    skillData.find((cat) => cat.title === activeCategory)?.skills || [];

  // LOGIKA PEMETAAN: Mengkonversi TechStackType[] menjadi LogoItem[]
  const mappedLogos: LogoItem[] = stackIcons.map((item) => {
    return {
      node: item.icon,
      title: item.name,
      ariaLabel: item.name,
    } as LogoItem;
  });

  return (
    <section className="py-20 md:py-32 bg-background relative" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING SECTION */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Technical Proficiency
          </h2>
          <p className="text-md text-foreground/70 max-w-2xl mx-auto">
            My expertise spans the entire development lifecycle, structured for
            easy viewing.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto p-2 bg-card/50 rounded-xl shadow-inner border border-border/70">
          <div className="flex justify-between items-center space-x-2">
            {skillData.map((category) => (
              <SkillTabButton
                key={category.title}
                label={category.title}
                icon={tabIcons[category.title]}
                active={activeCategory === category.title}
                onClick={() => setActiveCategory(category.title)}
              />
            ))}
          </div>
        </div>

        <div
          className="mt-12 min-h-[300px] p-6 sm:p-10 bg-card rounded-2xl shadow-2xl border border-primary/10"
          data-aos="fade-in"
          data-aos-duration="500"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 border-b border-primary/20 pb-3">
            {activeCategory}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSkills.map((skill: SkillItem, skillIndex: number) => (
              <SkillCard key={skillIndex} skill={skill} />
            ))}
          </div>
        </div>

        {/* LogoLoop menggunakan data yang sudah di-map */}
        <div className="mt-16">
          <LogoLoop
            logos={mappedLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};
