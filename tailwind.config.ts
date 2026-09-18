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
      // Charte BHA : le socle est le graphite, le vermillon ne sert qu'a marquer.
      // Les noms de tokens sont inchanges, seules les valeurs changent.
      colors: {
        bg: "#F8FAFB",       // blanc froid  (--bha-white)
        ink: "#15171A",      // graphite     (--bha-ink-900)
        muted: "#5C636C",    //              (--bha-ink-500)
        border: "#CBD1D6",   // filet fin    (--bha-ink-200)
        card: "#FFFFFF",     //              (--bha-pure-white)
        accent: {
          DEFAULT: "#BC2A13", // vermillon   (--bha-red-600)
          soft: "#DC3A1B",    //             (--bha-red-500)
          tint: "#FCEBE6",    //             (--bha-red-050)
        },
        night: {
          DEFAULT: "#0C0D0E", //             (--bha-ink-950)
          soft: "#15171A",    //             (--bha-ink-900)
        },
        cream: "#EFF1F3",     // surface en retrait (--bha-ink-050)
        bordeaux: {
          DEFAULT: "#BC2A13", //             (--bha-red-600)
          soft: "#DC3A1B",    //             (--bha-red-500)
          light: "#F2653F",   //             (--bha-red-400)
          deep: "#7E1808",    //             (--bha-red-800)
        },
      },
      // Deux familles seulement. "serif" garde son nom pour ne rien casser
      // dans les pages, mais sert desormais Archivo elargi (voir .serif dans globals.css).
      fontFamily: {
        serif: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      // Rayon 0 partout : la coupe oblique remplace l'arrondi.
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
      // Interlignage par defaut du petit texte. Tailwind sert 1.43 sur text-sm,
      // sous le plancher de 1.55 du systeme. Le corriger ici plutot qu'a chaque
      // balise evite qu'une page nouvelle reintroduise le defaut en silence.
      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.62" }],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
