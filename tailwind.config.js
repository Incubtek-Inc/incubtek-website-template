/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}", "./node_modules/preline/dist/preline.js"],
  theme: {
    extend: {
      keyframes: {
        partnerSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        partnerSlider: "partnerSlider 20s linear infinite",
        width: "200%",
      },
      colors: {
        "kom-orange": "#F3742D",
        "kom-gray": "#808080",
        "kom-black": "#0A0A0A",
        "kom-gray-hue": "#4D4D4D",
      },
      fontFamily: {
        dalekPinpoint: ["Dalek Pinpoint", "serif"],
      },
      backgroundImage: {
        // images
        "kom-success": "url('assets/images/slide_001.png')",
        "kom-world": "url('assets/images/slide_002.png')",
        "kom-communication": "url('assets/images/slide_003.png')",
        "kom-articles": "url('assets/images/articles/articles.png')",
        "kom-aboutUs": "url('assets/images/about_us.png')",
        "kom-methode": "url('assets/images/methode.jpg')",
        "kom-framePresentation": "url('assets/images/presentation_frame.jpg')",
        "kom-blogs": "url('assets/images/blog_bg.png')",
        "kom-blogsDetail": "url('assets/images/blog_detail.jpg')",
        "kom-services": "url('assets/images/services_bg.jpg')",

        //nos-services
        "kom-digital": "url('assets/images/nos-services/digital_bg.jpg')",
        "kom-realisationPattern":
          "url('assets/images/nos-services/pattern_realisation.png')",
        "kom-servicePatttern":
          "url('assets/images/nos-services/pattern_services.png')",
        "kom-digitalIllustration":
          "url('assets/images/nos-services/digital_illustration.jpg')",

        //pattern
        "kom-service-pattern": "url('assets/images/service_bg.png')",
        "kom-footer-pattern": "url('assets/images/footer_bg.png')",
        "kom-projet-pattern": "url('assets/images/new_projet.png')",
      },
      display: ["group-hover"],
    },
  },
  plugins: [require("preline/plugin")],
};
