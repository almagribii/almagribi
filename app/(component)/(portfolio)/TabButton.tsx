import React from "react";

export interface TabButtonProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
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

    <span className="text-xs sm:text-sm">{label}</span>
  </button>
);
