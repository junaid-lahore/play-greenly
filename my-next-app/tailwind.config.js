/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./internal-components/**/*.{js,ts,jsx,tsx}",
    "./prod-components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "brand-black": "hsl(var(--brand-black))",
        "brand-teal": "hsl(var(--brand-teal))",
        "brand-green": "hsl(var(--brand-green))",
        "brand-white": "hsl(var(--brand-white))",
        "brand-gray": "hsl(var(--brand-gray))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate")
  ],
};
