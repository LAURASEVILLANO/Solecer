import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#071527",
          light: "#12325C",
        },
        solar: {
          DEFAULT: "#F5B400",
          glow: "#FFD873",
          dim: "#B8860B",
        },
        mist: "#F4F5F7",
        slate: {
          text: "#5B6472",
        },
        ember: "#8C4632",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(245,180,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,180,0,0.06) 1px, transparent 1px)",
        "sun-gradient": "linear-gradient(135deg, #F5B400 0%, #FFD873 100%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(245,180,0,0.35)",
        card: "0 20px 60px -20px rgba(7,21,39,0.4)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
