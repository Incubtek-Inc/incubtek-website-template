/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{html,js}", "./node_modules/preline/dist/preline.js"],
  theme: {
    extend: {
      colors: {
        "kom-orange": "#F3742D",
      },
      fontFamily: {
        dalekPinpoint: ["Dalek Pinpoint", "serif"],
      },
      backgroundImage: {
        "kom-success": "url('assets/images/succes.png')",
        "kom-communication": "url('assets/images/communication.png')",
        "kom-world": "url('assets/images/world.png')",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
