/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-100": "#111",
        "white-100": "#fff",
      },
      fontFamily: {
        Gaegu: ["Gaegu"],
        Montserrat: ["Montserrat"],
        LobsterTwo: ["Lobster Two"],
        Kalam: ["Kalam"],
      },
    },
  },
  plugins: [],
};
