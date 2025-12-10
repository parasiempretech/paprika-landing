import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paprika: {
          cream: "#F5E6C8",
          creamSoft: "#F8ECD9",
          caramel: "#9C5A32",
          brown: "#5D3B2A",
          accent: "#C97A40",
        },
      },
      boxShadow: {
        "soft-3d": "0 20px 60px rgba(0,0,0,0.18)",
      },
    },
    fontFamily: {
      sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;