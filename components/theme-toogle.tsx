"use client";

import * as React from "react";
import { useTheme } from "next-themes";

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
      className="px-4 py-2 rounded-lg font-medium transition-colors
                 bg-gray-200 text-gray-900 hover:bg-gray-300
                 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? "🌞 Ganti ke Light" : "🌙 Ganti ke Dark"}
    </button>
  );
}
