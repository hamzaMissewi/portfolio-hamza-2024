import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: "class", // IMPORTANT
    content: [
        // "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                gradientBackground: "bg-gradient-to-b from-slate-900/100 via-gray-900 to-gray-300",
                // background: "var(--background)",
                // foreground: "var(--foreground)",
                // darkHeader: "#1A1C29",
                white: '#fff',
                black: '#333',
                lightBlue: "#aefafa",
                darkBackground: "#333333", // Dark mode background
                lightBackground: "rgb(211,206,206)",
                darkBlueBackground: "#05254d",
                darkVioletBackground: "#410248",
                darkRed: "#5b0118",
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                buttons: 'var(--color-buttons)',
                typography: 'var(--color-typography)',
                blackToWhite: {
                    1: "rgb(40,40,40)",
                    2: "rgb(104,104,104)",
                    3: "rgb(211,206,206)",
                    4: "rgb(239,239,239)",
                },
                customBlue: "#1DA1F2", // Custom blue color
                customGreen: "#4CAF50", // Custom green color
                customPink: "#FF4081", // Custom pink color
                customYellow: "#ffcf6s6",
                customOrange: "#de8826",
                chatbot: {
                    light: "#eaeaea",
                    dark: "#21010d",
                },
            },
        },
    },
    plugins: [],
};
export default config;
