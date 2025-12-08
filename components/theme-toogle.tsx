"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"; 

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full transition-colors 
                 bg-card-foreground text-white 
                 hover:opacity-80 focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle theme"
    >      {theme === "dark" ? (
        <Sun className="h-5 w-5" /> 
      ) : (
        <Moon className="h-5 w-5" /> 
      )}
    </button>
  );
}
