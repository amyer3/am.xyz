module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "dark-brown": "#423f39",
      "dark-gold": "#ccac79",
      "light-orange": "#cbae77",
      "light-cream": "#e8ded1",
      "e-brown": "#423f39",
      "e-light": "#e8ded1",
      "light-tan": "#f6f4f1",
      "light-gray": "#dad4d0",
      "light-green": "#a0d1c5", // pricing page paid card
      "dark-green": "#0c8265", //pricing page paid button
      "light-brown": "#e7dfd2", // pricing page free card
      "dark-brown": "#bbad93", // pricing page free button
      "brownish-black": "#403f3a",
      "off-white": "#f7f5f5",
      "salmon": "#e2c6bf",
      "dark-salmon": "#b0604c",
      "white": "#fff",
      "black": "#000000",
    },
    //To override an option in the default theme, add your overrides directly under the theme section
    // ...

    // extend is for new, custom values in the theme
    // Any keys you do not provide will be inherited from the default theme
    extend: {
      width: {
        "1/7": "14.2857143%",

        "2/7": "28.5714286%",

        "3/7": "42.8571429%",

        "4/7": "57.1428571%",

        "5/7": "71.4285714%",

        "6/7": "85.7142857%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
