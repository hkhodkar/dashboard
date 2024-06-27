import { themeColors } from "@hatef_khodkar/storybook";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      ...themeColors,
      "main-background": "#d7e8f7",
    },
  },
  plugins: [],
};
