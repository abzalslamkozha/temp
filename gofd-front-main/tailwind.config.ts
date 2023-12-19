import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: {
            white: "white",
            white_hover: "var(--color-white-hover)",
            black: "black",
            orange: "var(--color-orange)",
            green: "var(--color-green)",
            red: "var(--color-red)",
            blue_bg: "var(--color-blue-bg)",
            blue_text: "var(--color-blue-text)",
        },
        extend: {
            fontFamily: {
                gilroy_bold: ["var(--font-gilroy-extra-bold)"],
                tilda: ["var(--font-tilda-sans)"],
                tilda_semibold: ["var(--font-tilda-sans-semi-bold)"],
            },
        },
        fontSize: {
            sm: ["0.875rem", "130%"],
            base: ["1rem", "130%"],
            lg: ["1.125rem", "130%"],
            xl: ["1.25rem", "130%"],
            "2xl": ["1.5rem", "130%"],
            "3xl": ["1.875rem", "130%"],
            "4xl": ["2.25rem", "130%"],
            "5xl": ["3rem", "130%"],
            "6xl": ["3.75rem", "130%"],
            "7xl": ["4.5rem", "130%"],
            "8xl": ["6rem", "130%"],
            "9xl": ["8rem", "130%"],
            sm1: ["0.875rem", "100%"],
            base1: ["1rem", "100%"],
            lg1: ["1.125rem", "100%"],
            xl1: ["1.25rem", "100%"],
            "2xl1": ["1.5rem", "100%"],
            "3xl1": ["1.875rem", "100%"],
            "4xl1": ["2.25rem", "100%"],
            "5xl1": ["3rem", "100%"],
            "6xl1": ["3.75rem", "100%"],
            "7xl1": ["4.5rem", "100%"],
            "8xl1": ["6rem", "100%"],
            "9xl1": ["8rem", "100%"],
        },
    },
    plugins: [],
};
export default config;
