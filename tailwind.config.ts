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
        sans: ["var(--font-dm-sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        grungy:
          "0 25px 50px -12px rgba(247, 249, 249, 0.15), 0 0 20px 10px rgba(247, 249, 249, 0.05)",
        fade: "0 25px 50px -12px rgba(247, 249, 249, 0.15), 0 0 20px 10px rgba(247, 249, 249, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
