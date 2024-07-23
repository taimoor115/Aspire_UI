/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F0049",
        },

        secondary: {
          DEFAULT: "#F63A61",
        },
        border: {
          DEFAULT: "#FFFFFF",
        },
        subline: {
          DEFAULT: "#111827",
        },
        paragraph: {
          DEFAULT: "#FFFFFF",
        },
      },
    },
    // fontSize: {
    //   xxs: "9px",
    //   xxl: ["60px", "70px"],
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1.5rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("daisyui")],
};
