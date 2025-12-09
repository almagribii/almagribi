import React from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { PortfolioItem, stackIcons } from "./PortfolioData";

const getStackIcon = (stackName: string) => {
  return stackIcons.find((stack) => stack.name === stackName);
};

export const ProjectCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const showButtons =
    (item.demoUrl && item.demoUrl !== "#") ||
    (item.sourceUrl && item.sourceUrl !== "#");

  return (
    <div className="bg-card text-card-foreground rounded-xl overflow-hidden shadow-xl transition duration-300 hover:shadow-primary/50 flex flex-col h-full">
      <div className="relative w-full h-48 bg-card-foreground/10">
        <Image
          src={item.imageSrc}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="transition duration-500 hover:scale-[1.05]"
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
        <p className="text-sm text-card-foreground/80 grow mb-4">
          {item.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-foreground/90">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.techStacks.map((stackName, index) => {
              const stack = getStackIcon(stackName);
              if (stack) {
                return (
                  <div
                    key={index}
                    title={stack.name}
                    className="p-2 border border-border/80 rounded-lg text-sm transition duration-200 hover:border-primary/70"
                  >
                    <div className="w-4 h-4 text-card-foreground/80">
                      {stack.icon}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        {showButtons && (
          <div className="flex justify-start space-x-3 mt-auto pt-4 border-t border-border/50">
            {item.demoUrl && item.demoUrl !== "#" && (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-medium text-primary hover:bg-primary/10 transition duration-200 py-2 px-3 rounded-lg border border-primary/50"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {item.sourceUrl && item.sourceUrl !== "#" && (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-medium text-card-foreground hover:bg-card-foreground/10 transition duration-200 py-2 px-3 rounded-lg border border-border/80"
              >
                <FiGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
