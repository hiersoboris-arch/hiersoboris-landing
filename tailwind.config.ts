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
        bg: "#0A0907",
        ink: "#F4EFE6",
        muted: "#A89F8E",
        border: "#2A241D",
        card: "#15110B",
        accent: {
          DEFAULT: "#C9A24B",
          soft: "#D9BC7A",
          tint: "#1E1710",
        },
        night: {
          DEFAULT: "#0A0907",
          soft: "#15110B",
        },
        cream: "#F4EFE6",
        gold: {
          DEFAULT: "#C9A24B",
          soft: "#D9BC7A",
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
