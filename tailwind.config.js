/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      fontSize: {
        "128px": "128px",
      },
      fontWeight: {
        black: 900,
      },
    },
  },
  plugins: [],
};
