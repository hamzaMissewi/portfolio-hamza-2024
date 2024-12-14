import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
//   );
//
//   addBase({
//     ":root": newVars,
//   });
// }