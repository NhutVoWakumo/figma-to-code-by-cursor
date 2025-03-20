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
        black: "#000000",
        white: "#FFFFFF",
        green: "#B9FF66",
        yellow: "#B9FF66",
        gray: {
          100: "#F3F3F3",
          200: "#898989",
          800: "#292A32",
          900: "#191A23",
        },
        primary: "#B9FF66", // Green color
        secondary: "#191A23", // Dark color
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        card: "0px 5px 0px 0px rgba(25, 26, 35, 1)",
      },
      borderRadius: {
        45: "45px",
        14: "14px",
        7: "7px",
      },
    },
  },
  plugins: [],
};
