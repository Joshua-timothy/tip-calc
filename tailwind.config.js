/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "spaceMono": "'Space Mono', monospace",
      },

      textColor: {
        color: {
          StrongCyan: "var(--Strong-cyan)",
          darkCyan: "var(--Very-dark-cyan)",
          darkGrayishCyan: "var(--Dark-grayish-cyan)",
          grayishCyan: "var(--Grayish-cyan)",
          lightGrayCyan: "var(--Light-grayish-cyan)",
          veryLightGrayCyan: "var(--Very-light-grayish-cyan)",
          white: "var(--White)",
        },
      },
      backgroundColor: {
        color: {
          StrongCyan: "var(--Strong-cyan)",
          darkCyan: "var(--Very-dark-cyan)",
          darkGrayishCyan: "var(--Dark-grayish-cyan)",
          grayishCyan: "var(--Grayish-cyan)",
          lightCyan: "var( --Light-cyan)",
          lightGrayCyan: "var(--Light-grayish-cyan)",
          veryLightGrayCyan: "var(--Very-light-grayish-cyan)",
          white: "var(--White)",
        },
      },
    },
  },
  plugins: [],
};
