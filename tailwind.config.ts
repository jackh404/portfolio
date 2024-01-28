import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "forest",
      {
        mytheme: {
          primary: "#312e81",
          secondary: "#3b82f6",
          accent: "#a7f3d0",
          neutral: "#78716c",
          "base-100": "#f3f4f6",
          info: "#22d3ee",
          success: "#4ade80",
          warning: "#fde047",
          error: "#f87171",
        },
      },
      {
        myDarkTheme: {
          primary: "#6366f1",
          secondary: "#3b82f6",
          accent: "#38bdf8",
          neutral: "#78716c",
          "base-100": "#1f2937",
          info: "#22d3ee",
          success: "#4ade80",
          warning: "#fde047",
          error: "#f87171",
        },
      },
    ],
  },
};
export default config;
