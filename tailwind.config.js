/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /text-*/, // the "." means "everything"
    },
  ],
  theme: {
    extend: {
      animation: {
        zoomy: "3s linear 100ms infinite alternate zoomy",
      },
      keyframes: {
        zoomy: {
          "0%": {
            transform: "scale(1)",
          },
          "33.33%": {
            transform: "scale(1.015)",
          },
          "66.66%": {
            transform: "scale(1.030)",
          },
          "100%": {
            transform: "scale(1.045)",
          },
        },
      },
      colors: {
        primary: "#adbfd0",
        secondary: "#90a1b0",
        tertiary: "#0b212d",
        clr_blue: "#58d5ff",
        clr_btn_hover: "#103d56",
        // grad_clr1: '#05121D',
        grad_clr1: "#041721",
        grad_clr2: "#090B18",
        grad_clr3: "#110710",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        primary_old: "#050816",
        secondary_old: "#aaa6c3",
        tertiary_old: "#151030",
        transp90: "rgb(9, 11, 24, 0.9)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        inputsOff: "0px 0px 0px 0px #90a1b0 inset",
        inputsOn: "0px 0px 0px 1px #90a1b0 inset",
      },
      screens: {
        xs: "450px",
      },
      maxWidth: {
        menuWidth: "calc(100% - 2 * 1.5rem)",
        inputWidth: "calc(100% - 2 * 1px)",
      },
    },
  },
  plugins: [],
};
