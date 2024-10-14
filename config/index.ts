import type { Metadata } from "next";

export const links = {
  // sourceCode: "https://github.com/sanidhyy/next-portfolio",
  // ownerName: "Sanidhya",
  sourceCode: "https://github.com/hamzaMissewi/portfolio-hamza-14-10",
  ownerName: "Hamza Missaoui",
  ownerEmail: "hamza.missaoui@b2b-alive.com",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Portfolio`,
  description: "Modern & Minimalist Next.js Portfolio.",
  // keywords: [
  //   "reactjs",
  //   "nextjs",
  //   "vercel",
  //   "react",
  //   "aceternity",
  //   "aceternity-ui",
  //   "shadcn",
  //   "shadcn-ui",
  //   "radix-ui",
  //   "cn",
  //   "clsx",
  //   "modern-portfolio",
  //   "portfolio",
  //   "3d-portfolio",
  //   "animated-portfolio",
  //   "nextjs-portfolio",
  //   "react-portfolio",
  //   "react-three-fiber",
  //   "three.js",
  //   "animated-website",
  //   "framer",
  //   "framer-motion",
  //   "three",
  //   "react-icons",
  //   "lucide-react",
  //   "next-themes",
  //   "postcss",
  //   "prettier",
  //   "react-dom",
  //   "tailwindcss",
  //   "tailwindcss-animate",
  //   "ui/ux",
  //   "js",
  //   "javascript",
  //   "typescript",
  //   "eslint",
  //   "html",
  //   "css",
  // ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/hamzaMissewi",
  },
} as const;
