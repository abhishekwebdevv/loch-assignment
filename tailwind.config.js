/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 4px 10px 0px #0000000A",
        text: "0px 4px 4px 0px #00000040",
      },
      backgroundImage: {
        check: "url('/src/assets/checkmark.svg')",
        "gradient-radial":
          "radial-gradient(79.84% 79.84% at 32.27% 91.27%, rgba(31, 169, 17, 0.810119) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0) 100%)",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: " translate3d(-1px, 0, 0)",
          },

          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },

          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },

          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
      animation: {
        shake: "shake 1s",
      },
    },
  },
  plugins: [],
};
