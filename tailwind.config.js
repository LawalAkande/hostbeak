module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontSize: {
        "36px": "36px",
      },

      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },

      colors: {
        white: "#fff",
        light_blue: "#3DB0FF",
        grey: "#82869A",
        midnight_blue: "#272262",
        hey: "#7e22ce",
        addBillBg: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
