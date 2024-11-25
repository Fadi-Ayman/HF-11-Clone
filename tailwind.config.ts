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
        "responsive-8xl": "clamp(2.7rem, 10dvw, 10rem)",
        "responsive-9xl": "clamp(3.5rem, 10dvw, 11rem)",
        "responsive-12xl": "clamp(6.5rem, 18dvw, 18rem)",
      },
      height: {
        "responsive-8xl": "clamp(2.7rem, 10dvw, 10rem)",
        "responsive-9xl": "clamp(3.5rem, 10dvw, 11rem)",
        "responsive-12xl": "clamp(6.5rem, 18dvw, 18rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
