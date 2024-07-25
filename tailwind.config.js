/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{html,js}", "./node_modules/preline/dist/preline.js"],
  theme: {
    extend: {
      colors: {
        "kom-orange": "#F3742D",
        "kom-gray": "#808080",
        "kom-black": "#0A0A0A",
      },
      fontFamily: {
        dalekPinpoint: ["Dalek Pinpoint", "serif"],
      },
      backgroundImage: {
        // images
        "kom-success": "url('assets/images/succes.png')",
        "kom-communication": "url('assets/images/communication.png')",
        "kom-world": "url('assets/images/world.png')",
        "kom-articles": "url('assets/images/articles/articles.png')",

        //pattern
        "kom-service-pattern": "url('assets/images/service_bg.png')",
        "kom-footer-pattern": "url('assets/images/footer_bg.png')",
        "kom-projet-pattern": "url('assets/images/new_projet.png')",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
