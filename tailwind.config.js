/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-4": "rgba(255,255,255,0.04)",
        "white-8": "rgba(255,255,255,0.08)",
        "white-64": "rgba(255,255,255,0.64)",
        "white-88": "rgba(255,255,255,0.88)",
        panes: "rgb(26,23,47)",
      },
      opacity: {
        64: "0.64",
      },
    },
  },
  plugins: [],
};
