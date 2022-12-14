/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "app-bg-pomodoro": "rgba(153, 27, 27, 0.8)",
        "app-bg-short-break": "#89B0AE",
        "app-bg-long-break": "#555B6E",
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
