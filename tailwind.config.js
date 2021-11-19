module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: "#fcf1cf",
        darkest: "#212121",
        dark: "#323232",
        deepcyan: "#0D7377",
        cyan: "#14FFEC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
