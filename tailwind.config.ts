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
        background: "#0a0a0a",
        foreground: "#f0ede8",
        accent: {
          DEFAULT: "#6b52ff",
          hover: "#5a42f5",
          light: "rgba(107, 82, 255, 0.15)",
        },
        dark: {
          50: "#0f0f0f",
          100: "#121212",
          200: "#1a1a1a",
          300: "#242424",
          400: "#2e2e2e",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas-neue)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.15em",
        extrawide: "0.2em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
