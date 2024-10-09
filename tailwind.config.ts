import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        // "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // background: "var(--background)",
                // foreground: "var(--foreground)",
                customBlue: "#1DA1F2", // Custom blue color
                customGreen: "#4CAF50", // Custom green color
                customPink: "#FF4081", // Custom pink color
                customYellow: "#ffcf6s6",
                customOrange: "#de8826",
                lightHeader: "#aefafa",
                darkHeader: "#05254d",
                // darkHeader: "#1A1C29",
                darkBackground: "#333333", // Dark mode background
                lightBackground: "#d8d8d8",
                darkBlueBackground: "#05254d",
                darkVioletBackground: "#160468",
                blackToWhite: {
                    1: "rgb(40,40,40)",
                    2: "rgb(104,104,104)",
                    4: "rgb(206,204,204)",
                    5: "rgb(239,239,239)",
                },
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
