"use client";
import React, { ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type ThemeType = "light" | "dark" | "system";


interface ThemeContextType {
  theme: ThemeType;
  setDarkTheme: () => void;
  setLightTheme: () => void;
  toggleTheme?: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

// const ThemeContext = createContext<ThemeContextType | null>({
//   theme: "light", // Default theme
//   toggleTheme: () => {},
// });

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeType>("light");
  //   localStorage.getItem("theme") === "dark" ? "dark" : "light",

  useEffect(() => {
    setMounted(true);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // useEffect(() => {
  //   localStorage.setItem("theme", theme); // Persist theme in localStorage
  //   document.body.className = theme; // Apply theme to body (for global styles)
  //   document.documentElement.style.setProperty("--theme", theme); // Update CSS variable
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (!("theme" in localStorage)) {
          if (matches) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }
      });
  }, []);

  const setDarkTheme = () => {
    localStorage.theme = "dark";
    setTheme("dark");
  };

  const setLightTheme = () => {
    localStorage.theme = "light";
    setTheme("light");
  };

  // const setSystemTheme = () => {
  //   localStorage.removeItem("theme");
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     document.documentElement.classList.add("dark");
  //     setTheme("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setTheme("light");
  //   }
  // };

  const value = useMemo(
    () => ({ theme, setDarkTheme, setLightTheme }),
    [theme],
  );

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.log("useTheme must be used within a ThemeProvider");
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
