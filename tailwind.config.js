/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-bg-pomodoro": "rgb(153 27 27 / 0.8)",
      },
    },
  },
  plugins: [],
};
