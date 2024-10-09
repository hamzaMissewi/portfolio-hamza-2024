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
            backgroundColor: {
                // background: "var(--background)",
                // foreground: "var(--foreground)",
                // darkHeader: "#1A1C29",
                lightBlue: "#aefafa",
                darkBackground: "#333333", // Dark mode background
                lightBackground: "#d8d8d8",
                darkBlueBackground: "#05254d",
                darkVioletBackground: "#410248",
                darkRed: "#5b0118",
            },
            colors: {
                blackToWhite: {
                    1: "rgb(40,40,40)",
                    2: "rgb(104,104,104)",
                    3: "rgb(204,204,204)",
                    4: "rgb(239,239,239)",
                },
                customBlue: "#1DA1F2", // Custom blue color
                customGreen: "#4CAF50", // Custom green color
                customPink: "#FF4081", // Custom pink color
                customYellow: "#ffcf6s6",
                customOrange: "#de8826",
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
