/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-4": "rgba(255,255,255,0.04)",
        "white-8": "rgba(255,255,255,0.08)",
        "white-16": "rgba(255,255,255,0.16)",
        "white-48": "rgba(255,255,255,0.48)",
        "white-64": "rgba(255,255,255,0.64)",
        "white-88": "rgba(255,255,255,0.88)",
        panes: "rgb(26,23,47)",
        "theme-purple": "rgb(111, 76, 255)",
        turquoise: "rgb(102, 216, 255)",
        "purple-64": "rgba(111, 76, 255,0.64)",
      },
      opacity: {
        32: "0.32",
        64: "0.64",
        88: "0.88",
      },
      fontSize: {
        24: "24px",
        32: "32px",
        48: "48px",
        96: "96px",
      },
      lineHeight: {
        common: "clamp(1em,calc(0.9em+9.6px),1.5em)",
      },
      letterSpacing: {
        common: "clamp(-2px,calc(-0.05em+0.8px),0px)",
      },
    },
  },
  plugins: [],
};
