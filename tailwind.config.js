/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBg: "#DFD6C5",
        SecondaryBlack: "#171612",
        BeigetextColor: "#E7B671",
      },
      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },
    },
  },
  plugins: [],
};
