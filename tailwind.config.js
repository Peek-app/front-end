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
        congress: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#78B3EA",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
          950: "#1a202c",
        },
        gray: {
          200: "#e5e7eb",
          300: "#d1d5dc",
        },
        secondary: {
          600: "#da551d",
        },
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
      height: {
        mosaic: "520px",
        landingExampleArea: "850px",
      },
      backgroundImage: {
        "gradient-landing": "linear-gradient(to bottom, #0e2139, #2e1548)",
      },
    },
  },
  plugins: [],
};
