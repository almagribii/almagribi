import React from "react";
import {
  FiBriefcase,
  FiBookOpen,
  FiCode, 
  FiCpu, 
  FiUsers, 
  FiSpeaker, 
  FiDollarSign, 
  FiAward, 
} from "react-icons/fi";interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
}

const experiences = [
  {
    icon: <FiCpu className="w-5 h-5" />,
    title: "Software & Network Engineer",
    subtitle: "PPTIK Unida Gontor",
    duration: "2024 - Present",
    description:
      "Responsible for designing, deploying, and maintaining highly available internal network infrastructure. Also involved in front-end software development using Node.js and React",
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    title: "Teaching Assistant",
    subtitle: "Advanced Technology University (Algorithm & Data Structure)",
    duration: "2025 - Present",
    description:
      "Provided one-on-one and group tutoring for Algorithm and Data Structure courses. Developed practical materials to help students grasp complex computational concepts.",
  },
  {
    icon: <FiSpeaker className="w-5 h-5" />,
    title: "Amoled/Android Community Instructor",
    subtitle: "Amoled Study Club",
    duration: "2025 - Present",
    description:
      "Led frequent workshops on mobile optimization, custom kernel compilation, and best practices for developing apps optimized for high-refresh-rate AMOLED displays.",
  },
  {
    icon: <FiDollarSign className="w-5 h-5" />,
    title: "Freelance Web Developer",
    subtitle: "Independent",
    duration: "2024 - Present",
    description:
      "Delivering bespoke full-stack solutions, specializing in fast-loading marketing sites and e-commerce platforms using Next.js, and managing direct client communication and project scope.",
  },
];

const educations = [
  {
    icon: <FiBookOpen className="w-5 h-5" />,
    title: "Bachelor Of Informatics Engineering",
    subtitle: "Universitas Darussalam Gontor (UNIDA Gontor)",
    duration: "2024 - Present", 
    description:
      "Intensive studies in Software Engineering, Data Structures, and Computer Networks. Actively participated in programming competitions and developed innovative campus management solutions.",
  },
  {
    icon: <FiBookOpen className="w-5 h-5" />,
    title: "Religious and General Studies ",
    subtitle: "Darussalam Gontor Modern Islamic Boarding School",
    duration: "2018 - 2024",
    description:
      "Completed comprehensive high-level education focusing on leadership, public speaking, Arabic & English proficiency, alongside traditional Islamic and general knowledge curriculum.",
  },
];
// 2. Komponen Item Timeline (Diperbarui untuk Responsif)
const TimelineItem = ({
  icon,
  title,
  subtitle,
  duration,
  description,
}: TimelineItemProps) => (
  <div className="flex relative pb-10 last:pb-0">
    {" "}
    {/* Menambah pb-10 agar jarak vertikal lebih lega */}
    {/* Garis Vertikal */}
    <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
      <div className="h-full w-0.5 bg-border pointer-events-none last:hidden"></div>
    </div>
    {/* Lingkaran Titik (Icon) */}
    <div className="shrink-0 w-8 h-8 rounded-full bg-primary inline-flex items-center justify-center text-primary-foreground relative z-10 shadow-lg border-2 border-primary/50">
      {icon}
    </div>
    {/* Konten */}
    <div className="grow pl-4 md:pl-6 pt-0.5">
      {" "}
      {/* Mengurangi padding di HP (pl-4) */}
      <div className="flex flex-col mb-1">
        {" "}
        {/* Selalu flex-col (tumpuk) di HP */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground">
          {" "}
          {/* Menggunakan text-lg di HP */}
          {title}
        </h3>
        {/* Durasi diletakkan di bawah judul dan di atas subtitle */}
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1 self-start">
          {duration}
        </span>
      </div>
      <p className="text-sm text-card-foreground/80 mb-2 font-semibold mt-1">
        {subtitle}
      </p>{" "}
      {/* Menggunakan text-sm di HP */}
      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
        {description}
      </p>{" "}
      {/* Menggunakan text-xs di HP */}
    </div>
  </div>
);

// 3. Komponen Utama Experience Section (Diperbarui untuk Judul)

export const ExperienceSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Bagian */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
          {" "}
          {/* Mengurangi margin di HP */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
            {" "}
            {/* Mengurangi ukuran font Judul di HP */}
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            The career path and educational background that shape my skills.
          </p>
        </div>

        {/* Tata Letak 2 Kolom (di desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {" "}
          {/* Mengurangi gap di HP */}
          {/* Kolom Kiri: Experience */}
          <div data-aos="fade-right" data-aos-duration="1500">
            <div className="flex items-center space-x-3 mb-6">
              {" "}
              {/* Mengurangi margin di HP */}
              <FiBriefcase className="w-7 h-7 text-primary" />{" "}
              {/* Mengurangi ukuran ikon header */}
              <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                Experience
              </h3>{" "}
              {/* Mengurangi ukuran font sub-judul di HP */}
            </div>

            <div className="relative">
              {experiences.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
          {/* Kolom Kanan: Education */}
          <div data-aos="fade-left" data-aos-duration="1500">
            <div className="flex items-center space-x-3 mb-6">
              <FiBookOpen className="w-7 h-7 text-primary" />
              <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                Education
              </h3>
            </div>

            <div className="relative">
              {educations.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
