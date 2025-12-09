import React from "react";
import { TechStackType } from "./PortfolioData"; // Impor tipe

export const TechStackIcon: React.FC<{ stack: TechStackType }> = ({
  stack,
}) => (
  <div className="bg-card/50 text-foreground p-4 rounded-xl shadow-xl transition duration-300 hover:shadow-primary/50 flex flex-col items-center justify-center h-32 w-full border border-border/70 hover:border-primary/50">
    <div className="relative w-12 h-12 mb-2">{stack.icon}</div>
    <p className="text-xs font-semibold text-foreground/80 mt-1">
      {stack.name}
    </p>
  </div>
);
