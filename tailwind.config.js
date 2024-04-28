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
      boxShadow: {
        'cardShadow': '10px 10px 5px -1px rgba(0,0,0,0.42)',
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
};
