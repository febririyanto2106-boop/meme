import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06070C",
          900: "#090B12",
          850: "#0B0E17",
          800: "#0E1220",
          700: "#151A2B",
        },
        acid: {
          DEFAULT: "#C6FF5E",
          soft: "#DFFFA8",
          dim: "#9ED93B",
        },
        violet: {
          DEFAULT: "#A855F7",
          soft: "#C9A5FF",
          deep: "#7C3AED",
        },
        cyan: {
          DEFAULT: "#38DDF8",
          soft: "#8DEBFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Segoe UI", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
      boxShadow: {
        "glow-lime": "0 0 40px -8px rgba(198, 255, 94, 0.45)",
        "glow-violet": "0 0 80px -20px rgba(168, 85, 247, 0.55)",
        terminal: "0 40px 120px -40px rgba(0, 0, 0, 0.9)",
        card: "0 20px 60px -30px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 44s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        orbit: "orbit 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
