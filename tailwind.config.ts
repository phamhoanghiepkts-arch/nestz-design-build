import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#171717",
        ink: "#2a2621",
        paper: "#f7f1e8",
        clay: "#b8582b",
        concrete: "#d8d0c4"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  }
};

export default config;
