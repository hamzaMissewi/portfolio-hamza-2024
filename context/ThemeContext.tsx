"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import type { ThemeProviderProps } from "next-themes/dist/types";

export type ThemeType = "light" | "dark" | "system";


interface ThemeContextType {
  theme: ThemeType;
  setDarkTheme: () => void;
  setLightTheme: () => void;
  toggleTheme?: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
//   theme: "light", // Default theme
//   toggleTheme: () => {},
);

// export default function ThemeProvider({ children }: { children: ReactNode }) {
export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => setMounted(true), []);


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

  const toggleTheme = () => {
    //   localStorage.getItem("theme") === "dark" ? "dark" : "light",
    setTheme(theme === "light" ? "dark" : "light");
  };


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
    //   return null;
    return children;
  }

  return (
    // <NextThemesProvider value={value}>{children}</NextThemesProvider>
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
