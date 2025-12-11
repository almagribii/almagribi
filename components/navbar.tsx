"use client";

import React, { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./theme-toogle";

const sectionIds = ["hero", "experience", "skills", "portfolio", "contact"];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const getLinkClass = (id: string) => {
    const isActive = activeSection === id;

    const baseClasses =
      "relative block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 transition-all duration-300";

    const inactiveClasses = "text-foreground/70 hover:text-foreground";

    const activeClasses =
      "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex bg-card justify-between items-center p-4 mt-4 shadow-xl rounded-full px-8 text-xs mx-2 border border-border/70">
          <div className="mt-1 text-xl font-bold">
            <span className="text-foreground dark:text-foreground">
              {Array.from("Almagribi").map((char, index) => (
                <span key={index} className="hoverText text-hover-primary">
                  {char}
                </span>
              ))}
            </span>
          </div>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <a href="/" className={getLinkClass("hero")}>
                  About
                </a>
              </li>
              <li>
                <a href="/#experience" className={getLinkClass("experience")}>
                  Experience
                </a>
              </li>
              <li>
                <a href="/#skills" className={getLinkClass("skills")}>
                  Skills
                </a>
              </li>
              <li>
                <a href="/#portfolio" className={getLinkClass("portfolio")}>
                  Portfolio
                </a>
              </li>

              <li>
                <a href="/#contact" className={getLinkClass("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
