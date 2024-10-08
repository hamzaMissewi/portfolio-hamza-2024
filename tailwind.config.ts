import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                customPageDarkBackground: "#1A1C29",
                customBlue: "#1DA1F2", // Custom blue color
                customGreen: "#4CAF50", // Custom green color
                customPink: "#FF4081", // Custom pink color
                // bg-[#F7AB0A]
                blackToWhite: {
                    1: "rgb(40,40,40)",
                    2: "rgb(104,104,104)",
                    3: "#a2a1a1",
                    4: "rgb(206,204,204)",
                    5: "rgb(239,239,239)",
                },
                darkBackground: "#333333", // Dark mode background
                lightBackground: "#d8d8d8",
                darkBlueBackground: "#05254d",
                darkVioletBackground: "#160468",
                customOrange: "#daae29",
                chatbot: {
                    light: "#d9fbf6",
                    dark: "#76032b",
                },
            },
        },
    },
    plugins: [],
};
export default config;
