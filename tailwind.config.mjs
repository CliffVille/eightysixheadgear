/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background6.png')",
        bg: "url('/bg.svg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBg: "rgb(31, 41, 55)",
      },
    },
  },
  plugins: [],
};
