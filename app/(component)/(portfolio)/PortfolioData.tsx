import { FiBell } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiBootstrap,
  SiFirebase,
  SiVercel,
  SiAndroid,
  SiOpenjdk,
  SiSpringboot,
  SiGradle,
  SiJetpackcompose,
  SiKotlin,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiJest,
  SiTestinglibrary,
  SiSqlite,
  SiNextdotjs,
  SiChakraui,
  SiSupabase,
  SiOpenai,
  SiGooglegemini
} from "react-icons/si";
import React from "react";

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  demoUrl: string;
  sourceUrl: string;
  techStacks: string[];
}

export type TechStackType = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

export const projects: PortfolioItem[] = [
  {
    id: 1,
    title: "Digital Invitation",
    description:
      "A responsive web application for creating and sending personalized digital wedding or event invitations.",
    imageSrc: "/projects/1.webp",
    demoUrl: "https://almagribii.github.io/Ece-Rusly/",
    sourceUrl: "https://github.com/almagribii/Ece-Rusly",
    techStacks: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "MasjidQu",
    description:
      "A community management platform designed for mosques, facilitating event announcements and daily schedule notifications.",
    imageSrc: "/projects/2.webp",
    demoUrl: "#",
    sourceUrl: "https://github.com/almagribii/masjid_unida",
    techStacks: ["Gradle", "Kotlin", "Spring Boot", "MySQL"],
  },
  {
    id: 3,
    title: "Health Center",
    description:
      "A web portal for a health center, enabling patients to securely record, store, and manage their medical notes and appointments.",
    imageSrc: "/projects/3.webp",
    demoUrl: "#",
    sourceUrl: "https://github.com/almagribii/dmc_demo_compose",
    techStacks: [
      "Kotlin",
      "Gradle",
      "Jetpack Compose",
      "Spring Boot",
      "Docker",
    ],
  },
  {
    id: 4,
    title: "QuizLab Api",
    description:
      "A robust RESTful API built for managing quizzes, questions, and user attempts, facilitating automated testing platforms.",
    imageSrc: "/projects/4.webp",
    demoUrl: "#",
    sourceUrl: "https://github.com/almagribii/QuizLab",
    techStacks: ["Java", "Spring Boot", "Docker"],
  },
  {
    id: 5,
    title: "MaqraDars",
    description:
      "An educational platform designed for students to access and manage study materials, assignments, and lesson schedules for Maqra.",
    imageSrc: "/projects/5.webp",
    demoUrl: "#",
    sourceUrl: "https://github.com/almagribii/MaqraDars",
    techStacks: [
      "Kotlin",
      "Gradle",
      "Jetpack Compose",
      "Spring Boot",
      "SqLite",
    ],
  },
  {
    id: 6,
    title: "Seranah Unida Gontor",
    description:
      "A comprehensive application for managing correspondence and archiving official documents for University",
    imageSrc: "/projects/6.webp",
    demoUrl: "https://seranah.unida.gontor.ac.id",
    sourceUrl: "",
    techStacks: ["ReactJS", "Tailwind CSS", "Vite"],
  },
  {
    id: 7,
    title: "Nutrisys",
    description:
      "A nutrition tracking system that allows users to monitor calorie intake, manage diet plans, and view nutritional facts.",
    imageSrc: "/projects/7.webp",
    demoUrl: "https://nutrisys.my.id",
    sourceUrl: "#",
    techStacks: [
      "Next JS",
      "Tailwind CSS",
      "Chakra",
      "Supabase",
      "Open AI",
      "Gemini",
    ],
  },
  {
    id: 8,
    title: "Web Portfolio",
    description:
      "The personal portfolio website you are currently viewing, showcasing projects, skills, and professional experience.",
    imageSrc: "/projects/8.webp",
    demoUrl: "https://almagribi.my.id",
    sourceUrl: "",
    techStacks: ["Next JS", "Tailwind CSS", "Supabase"],
  },
];
export const certificates: PortfolioItem[] = [
  {
    id: 201,
    title: "",
    description: "",
    imageSrc: "/certificates/Pasted image (2).png",
    demoUrl: "#",
    sourceUrl: "#",
    techStacks: [],
  },
  {
    id: 202,
    title: "",
    description: "",
    imageSrc: "/certificates/Pasted image.png",
    demoUrl: "#",
    sourceUrl: "#",
    techStacks: [],
  },
  {
    id: 203,
    title: "",
    description: "",
    imageSrc: "/certificates/Pasted image (3).png",
    demoUrl: "#",
    sourceUrl: "#",
    techStacks: [],
  },
];

export const stackIcons: TechStackType[] = [
  {
    id: 301,
    name: "HTML",
    icon: <SiHtml5 className="w-full h-full text-[#E34F26]" />,
  },
  {
    id: 302,
    name: "CSS",
    icon: <SiCss3 className="w-full h-full text-[#1572B6]" />,
  },
  {
    id: 303,
    name: "JavaScript",
    icon: <SiJavascript className="w-full h-full text-[#F7DF1E]" />,
  },
  {
    id: 304,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-full h-full text-[#06B6D4]" />,
  },
  {
    id: 305,
    name: "ReactJS",
    icon: <SiReact className="w-full h-full text-[#61DAFB]" />,
  },
  {
    id: 306,
    name: "Vite",
    icon: <SiVite className="w-full h-full text-[#646CFF]" />,
  },
  {
    id: 307,
    name: "Node JS",
    icon: <SiNodedotjs className="w-full h-full text-[#339933]" />,
  },
  {
    id: 308,
    name: "Bootstrap",
    icon: <SiBootstrap className="w-full h-full text-[#7952B3]" />,
  },
  {
    id: 309,
    name: "Firebase",
    icon: <SiFirebase className="w-full h-full text-[#FFCA28]" />,
  },
  {
    id: 311,
    name: "Vercel",
    icon: <SiVercel className="w-full h-full " />,
  },
  {
    id: 312,
    name: "SweetAlert2",
    icon: <FiBell className="w-full h-full text-primary" />,
  },
  {
    id: 313,
    name: "Android",
    icon: <SiAndroid className="w-full h-full text-[#3DDC84]" />,
  },
  {
    id: 314,
    name: "Java",
    icon: <SiOpenjdk className="w-full h-full text-[#007396]" />,
  },
  {
    id: 315,
    name: "Kotlin",
    icon: <SiKotlin className="w-full h-full text-[#7F52FF]" />,
  },
  {
    id: 316,
    name: "Jetpack Compose",
    icon: <SiJetpackcompose className="w-full h-full text-[#4285F4]" />,
  },
  {
    id: 317,
    name: "Spring Boot",
    icon: <SiSpringboot className="w-full h-full text-[#6DB33F]" />,
  },
  {
    id: 318,
    name: "Gradle",
    icon: <SiGradle className="w-full h-full text-[#02303A]" />,
  },
  {
    id: 319,
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-full h-full text-[#4169E1]" />,
  },
  {
    id: 320,
    name: "MySQL",
    icon: <SiMysql className="w-full h-full text-[#4479A5]" />,
  },
  {
    id: 321,
    name: "MongoDB",
    icon: <SiMongodb className="w-full h-full text-[#47A248]" />,
  },
  {
    id: 322,
    name: "Docker",
    icon: <SiDocker className="w-full h-full text-[#2496ED]" />,
  },
  {
    id: 323,
    name: "Kubernetes",
    icon: <SiKubernetes className="w-full h-full text-[#326CE5]" />,
  },

  {
    id: 324,
    name: "Google Cloud",
    icon: <SiGooglecloud className="w-full h-full text-[#4285F4]" />,
  },
  {
    id: 325,
    name: "Jest",
    icon: <SiJest className="w-full h-full text-[#C21325]" />,
  },
  {
    id: 326,
    name: "Testing Library",
    icon: <SiTestinglibrary className="w-full h-full text-[#E33332]" />,
  },
  {
    id: 327,
    name: "SqLite",
    icon: <SiSqlite className="w-full h-full text-[#4285F4]" />,
  },
  {
    id: 328,
    name: "Next JS",
    icon: <SiNextdotjs className="w-full h-full" />,
  },
  {
    id: 329,
    name: "Chakra",
    icon: <SiChakraui className="w-full h-full text-[#0d3820]" />,
  },
  {
    id: 330,
    name: "Supabase",
    icon: <SiSupabase className="w-full h-full text-[#fff9i9]" />,
  },
  {
    id: 331,
    name: "Gemini",
    icon: <SiGooglegemini className="w-full h-full text-[#4285F4]" />,
  },
 
];