import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080c0a",
        "bg-elev": "#0d1310",
        surface: "#111a15",
        "surface-2": "#14201a",
        border: "#1e2b23",
        "border-soft": "#16211b",
        ink: "#e7f1ea",
        dim: "#90a99c",
        faint: "#56695f",
        green: {
          DEFAULT: "#33e08a",
          soft: "#1f8f5c",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 10px rgba(51, 224, 138, 0.28)",
        "glow-lg": "0 8px 24px rgba(51, 224, 138, 0.28)",
        terminal: "0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(51,224,138,0.04)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(3px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.4s ease both",
      },
    },
  },
  plugins: [],
} satisfies Config;
