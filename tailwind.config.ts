import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#028360",
      darkerGray: "#444444",
      darkGray: "#5F5F5F",
      gray: "#878787",
      lightGray: "#F5F6F6",
      lightestGray: "#FBFBFB",
      hard: "#006980",
      clay: "#FF9B66",
      grass: "#028360"
    },
  },

  plugins: [],
};
export default config;
