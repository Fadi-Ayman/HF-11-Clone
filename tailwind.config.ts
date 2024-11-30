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
        "responsive-3xl": "clamp(1rem, 5dvw, 1.875rem)",
        "responsive-5xl": "clamp(3rem, 10dvw, 3.75rem)",
        "minMax-9xl": "clamp(8rem, 12dvw, 14rem)",

        // For Animated Text
        "responsive-8xl": "clamp(2.7rem, 10dvw, 10rem)",
        "responsive-9xl": "clamp(3.5rem, 10dvw, 11rem)",
        "responsive-12xl": "clamp(6.5rem, 18dvw, 18rem)",
      },
      height: {
        // For Animated Text
        "responsive-8xl": "clamp(2.7rem, 10dvw, 10rem)",
        "responsive-9xl": "clamp(3.5rem, 10dvw, 11rem)",
        "responsive-12xl": "clamp(6.5rem, 18dvw, 18rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
