/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      myDark: "#4B535A",
      myGray: "#A3A5A4",
      myDarkBrown: "#88817A",
      myWhite: "#FCFCF2",
      myLightBrown: "#EDDEC8",
      myInputColor: "#959897"
    }
  },
  plugins: [],
}

