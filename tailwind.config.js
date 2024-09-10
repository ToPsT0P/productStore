/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "allSide": "10 35px 60px -15px rgba(0, 0, 0, 0.3)"
      }
    },
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

