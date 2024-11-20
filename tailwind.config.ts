import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "responsive-9xl": "clamp(3.5rem, 9dvw, 10rem)",
      },
      height: {
        "responsive-9xl": "clamp(3.5rem, 9dvw, 10rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
