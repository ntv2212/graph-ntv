/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-2": "rgba(255,255,255,0.02)",
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
        background: "rgb(12, 10, 29)",
      },
      opacity: {
        8: "0.08",
        32: "0.32",
        64: "0.64",
        88: "0.88",
      },
      fontSize: {
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        96: "96px",
      },
      lineHeight: {
        common: "clamp(1em, calc(0.9em + 9.6px), 1.5em)",
        common2: "calc(1em + 2px)",
      },
      letterSpacing: {
        common: "clamp(-2px, calc(-0.05em + 0.8px), 0px)",
      },
      width: {
        section: "calc(1288px + 2 * 32px)",
      },
      padding: {
        heading: "min(-140.7px + 24.6vw, 192px)",
        common1: "min(-46.9px + 8.2vw, 48px)",
        common2: "min(24.6vw - 140.7px, 192px)",
        common3: "min(8.2vw - 46.9px, 64px)",
        common4: "min(16.4vw - 93.8px, 128px)",
      },
      outlineWidth: {
        16: "16px",
      },
      margin: {
        common1: "calc(-1* min(0.5em, 8px))",
        common2: "min(0.5em, 8px)",
      },
      grayscale: {
        75: "75%",
      },
    },
  },
  plugins: [],
};
