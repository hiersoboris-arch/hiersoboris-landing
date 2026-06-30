import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1180px" },
    },
    extend: {
      colors: {
        bg: "#FAF7F2",
        ink: "#1F1B17",
        muted: "#6B6055",
        border: "#E7E1D7",
        card: "#FFFDF9",
        accent: {
          DEFAULT: "#7C2A38",
          soft: "#9B3A48",
          tint: "#F4E8EA",
        },
        night: {
          DEFAULT: "#0A0907",
          soft: "#15110B",
        },
        cream: "#F4EFE6",
        bordeaux: {
          DEFAULT: "#7C2A38",
          soft: "#9B3A48",
          deep: "#5C1A26",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
