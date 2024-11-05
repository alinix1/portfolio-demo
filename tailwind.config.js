/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "shadow-enhanced-light": "0 4px 15px rgba(0, 0, 0, 0.2)",
        "shadow-light-white": "0 10px 30px rgba(255, 255, 255, 0.4)",
      },
      fontFamily: {
        sans: ["sans-serif"],
        "chakra-petch": ["Chakra Petch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
