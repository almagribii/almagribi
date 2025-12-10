"use client";

import React, { useState, useEffect } from "react";
import { FiCode, FiAward, FiSettings, FiChevronDown } from "react-icons/fi";
import {
  projects,
  certificates,
  stackIcons,
  PortfolioItem,
  TechStackType,
} from "./PortfolioData"; 
import { ProjectCard } from "./ProjectCard"; 
import { TechStackIcon } from "./TechStackIcon";
import { TabButton } from "./TabButton"; 

type ActiveTab = "projects" | "certificates" | "techstack";


export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("projects");
  const [showAll, setShowAll] = useState(false);

  const getResponsiveLimit = (width: number) => (width < 768 ? 3 : 6);
  const [responsiveMaxItems, setResponsiveMaxItems] = useState(
    getResponsiveLimit(typeof window !== "undefined" ? window.innerWidth : 768)
  );

  useEffect(() => {
    const handleResize = () => {
      setResponsiveMaxItems(getResponsiveLimit(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let currentItems: PortfolioItem[] | TechStackType[] = [];
  let isTechStack = false;

  if (activeTab === "projects") currentItems = projects.slice().reverse();
  else if (activeTab === "certificates") currentItems = certificates;
  else if (activeTab === "techstack") {
    currentItems = stackIcons;
    isTechStack = true;
  }

  const itemsToShow =
    showAll || isTechStack || currentItems.length <= responsiveMaxItems
      ? currentItems
      : currentItems.slice(0, responsiveMaxItems);

  const showSeeMoreButton =
    !isTechStack && currentItems.length > responsiveMaxItems && !showAll;
  const showSeeLessButton =
    !isTechStack && currentItems.length > responsiveMaxItems && showAll;

  const renderContent = () => {
    if (isTechStack) {
      return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-8">
          {(itemsToShow as TechStackType[]).map((stack) => (
            <TechStackIcon key={stack.id} stack={stack} />
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {(itemsToShow as PortfolioItem[]).map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-background relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-md text-foreground/70 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>

        {/* TAB BUTTONS (NAVIGASI) */}
        <div className="w-full max-w-4xl mx-auto p-2 bg-card/50 rounded-xl shadow-inner border border-border/70">
          <div className="flex justify-between items-center space-x-2">
            <TabButton
              label="Projects"
              icon={<FiCode className="w-5 h-5" />}
              active={activeTab === "projects"}
              onClick={() => {
                setActiveTab("projects");
                setShowAll(false);
              }}
            />
            <TabButton
              label="Certificates"
              icon={<FiAward className="w-5 h-5" />}
              active={activeTab === "certificates"}
              onClick={() => {
                setActiveTab("certificates");
                setShowAll(false);
              }}
            />
            <TabButton
              label="Tech Stack"
              icon={<FiSettings className="w-5 h-5" />}
              active={activeTab === "techstack"}
              onClick={() => {
                setActiveTab("techstack");
                setShowAll(false);
              }}
            />
          </div>
        </div>

        {/* KONTEN BERDASARKAN TAB */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
          {renderContent()}
        </div>

        {/* TOMBOL SEE MORE/LESS */}
        <div className="text-center mt-12">
          {showSeeMoreButton && (
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center space-x-2 mx-auto text-sm text-card-foreground/70 border border-border/80 px-4 py-2 rounded-lg hover:border-primary transition duration-300"
            >
              <span>
                See More ({currentItems.length - responsiveMaxItems} More)
              </span>
              <FiChevronDown className="w-4 h-4" />
            </button>
          )}

          {showSeeLessButton && (
            <button
              onClick={() => setShowAll(false)}
              className="flex items-center space-x-2 mx-auto text-sm text-card-foreground/70 border border-border/80 px-4 py-2 rounded-lg hover:border-primary transition duration-300"
            >
              <span>See Less</span>
              <FiChevronDown className="w-4 h-4 rotate-180" />
            </button>
          )}

          {!showSeeMoreButton &&
            !showSeeLessButton &&
            !isTechStack &&
            currentItems.length > 0 && (
              <button
                disabled
                className="text-sm text-card-foreground/70 border border-border/80 px-4 py-2 rounded-lg opacity-50 cursor-default"
              >
                End of List
              </button>
            )}
        </div>
      </div>
    </section>
  );
};
