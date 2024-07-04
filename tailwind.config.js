/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {

      // colors: {
      //   primary: "#E54C3C",
      //   secondary: "#2825BE",
      //   brandYellow: "#F8AE00",
      //   brandGreen: "#01C09A",
      //   brandBlue: "#0099FA",
      //   brandWhite: "#FFFFFF",
      // },
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      // backgroundImage: {
      //   theme => ({
      //     'logo-dark': "url('ruta/a/tu/logoDark.jpeg')",
      //     'logo-light': "url('ruta/a/tu/logoLigth.jpeg')",
      //   })
      // },
      darklogo: {
        content: ["url(../../src/assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/LogoDark.jpeg)"]
      },
    },
  },
  plugins: [],
};
