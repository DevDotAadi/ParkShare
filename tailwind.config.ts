import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "-apple-system",
          "BlinkMacSystemFont",
          "Arial",
          "sans-serif",
        ],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "500",
        bold: "500",
        extrabold: "500",
        black: "500",
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      colors: {
        navy: "#10294B",
        cobalt: {
          DEFAULT: "#2864E8",
          dark: "#1E52C8",
        },
        ice: "#B8E4FF",
        amber: "#FFB84D",
        paper: "#FFFFFF",
        ink: "#1D2430",
        muted: "#566070",
        line: "rgba(16,41,75,0.14)",
        band: "#10294B",
        bandmuted: "#B9C6DA",
        bandline: "rgba(255,255,255,0.16)",
        chip: "#E7E4DC",
        sky: {
          solid: "#1a86f8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
