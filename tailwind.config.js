/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        tighter: "0.08px",
      },
      colors: {
        Red: "#D0021B",
      },
    },
  },
  plugins: [],
};
