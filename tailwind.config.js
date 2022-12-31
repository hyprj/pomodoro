/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  safelist: [
    { pattern: /(bg|text)-pomodoro-(light|dark)/, variants: ["dark"] },
    { pattern: /(bg|text)-shortBreak-(light|dark)/, variants: ["dark"] },
    { pattern: /(bg|text)-longBreak-(light|dark)/, variants: ["dark"] },
  ],
  theme: {
    extend: {
      colors: {
        pomodoro: {
          light: "#991b1bcc",
          dark: "#222831",
        },
        shortBreak: {
          light: "#437F97",
          dark: "#282f44",
        },
        longBreak: {
          light: "#383B53",
          dark: "#191d32",
        },
      },
      keyframes: {
        onLoad: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        onLoad: "onLoad 1s ease-in-out",
        bgTransition: "background-color 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
