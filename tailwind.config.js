/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#edfff4',
        secondary: {
          DEFAULT: "#19B775",
          100: "#8cd2b5",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        grayColor: {
          DEFAULT: "#F8F8F8",
          100: "#D9D9D9",
          300: "#808080"
        },
        blue: {
          DEFAULT: '#4083fe',
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        roboto: ["Roboto-Black", "sans-serif"],
        sfText: ["SF-Pro-Text", "sans-serif"],
        sfDisplay: ["SF-Pro-Display", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      }
    },
  },
  plugins: [],
}

