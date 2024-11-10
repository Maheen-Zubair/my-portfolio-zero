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
        customGray:"#2c2c2a",
        customgray2:"#24231e",
        customgray3:"#161616",
        customGray4:"rgb(56, 54, 54);",
        customGray5:"rgb(196, 196, 182)",
        customBoxGray:"#0f0f0f",
        customMainServicesBox:"#161617",

        customService:"rgb(98, 92, 92);",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
