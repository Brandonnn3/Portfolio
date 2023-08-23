/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0A1F23",
        secondary: "#E8C6A1",
        tertiary: "#AF8359",
        "black-100": "#12343b",
        "black-200": "#0E2A2F",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #12343b",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        
      },
    },
  },
  plugins: [],
};

/*colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },*/