import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // We define 'brand' so if you change the red later, it updates everywhere.
        brand: {
          DEFAULT: "#E12828", // The specific Flipboard Red
          dark: "#B91C1C",    // A darker shade for hover states
        },
        // We define specific grays for that "News App" feel
        neutral: {
          850: "#1f1f1f", // Dark card background
          900: "#121212", // Very dark page background
        }
      },
      fontFamily: {
        // You can swap these fonts later in globals.css
        sans: ['Inter', 'sans-serif'], 
        serif: ['Merriweather', 'serif'], // Good for article body text
      },
    },
  },
  plugins: [],
};
export default config;
