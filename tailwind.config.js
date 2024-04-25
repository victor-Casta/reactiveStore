/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBg: "#DFD6C5",
        SecondaryBlack: "#171612",
        BeigetextColor: "#E7B671",
        primaryGreen: "#0C3A2D",
        softGreen: "#6D9773",
        brightYellow: "#FFBA00"
      },
      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
};
