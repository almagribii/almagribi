import {
  SiReact,
  SiSpringboot,
  SiDocker,
  SiPostgresql,
  SiTailwindcss,
  SiAndroid,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiVercel,
  SiGithub,
  SiJest,
} from "react-icons/si";
import React from "react";

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  level: number; // Persentase (0-100)
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React / Next.js",
        icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
        level: 50,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
        level: 45,
      },
      {
        name: "JavaScript",
        icon: <SiFigma className="w-5 h-5 text-[#F7DF1E]" />,
        level: 60,
      },
      {
        name: "HTML & CSS",
        icon: <SiTailwindcss className="w-5 h-5 text-[#E34F26]" />,
        level: 75,
      },
    ],
  },
  {
    title: "Backend & Mobile",
    skills: [
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="w-5 h-5 text-[#6DB33F]" />,
        level: 40,
      },
      {
        name: "Java / Kotlin",
        icon: <SiAndroid className="w-5 h-5 text-[#007396]" />,
        level: 60,
      },
      {
        name: "Node.js (Express)",
        icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" />,
        level: 40,
      },
      {
        name: "Android Native",
        icon: <SiAndroid className="w-5 h-5 text-[#3DDC84]" />,
        level: 70,
      },
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" />,
        level: 85,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-5 h-5 text-[#47A248]" />,
        level: 70,
      },
      {
        name: "Docker",
        icon: <SiDocker className="w-5 h-5 text-[#2496ED]" />,
        level: 75,
      },
      {
        name: "Vercel / Hosting",
        icon: <SiVercel className="w-5 h-5 text-[#000000] dark:text-white" />,
        level: 90,
      },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      {
        name: "Figma",
        icon: <SiFigma className="w-5 h-5 text-[#F24E1E]" />,
        level: 78,
      },
      {
        name: "Git & Github",
        icon: <SiGithub className="w-5 h-5 text-foreground" />,
        level: 92,
      },
      {
        name: "Testing (Jest)",
        icon: <SiJest className="w-5 h-5 text-[#C21325]" />,
        level: 65,
      },
    ],
  },
];
