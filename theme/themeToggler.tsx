"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}
            className={"dark:text-white text-black px-2 py-1 font-bold"}>
      {/*className={theme === "light" ? "text-black bg-white" : "text-white bg-black"}*/}
      {/*<option value="system">System</option>*/}
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}