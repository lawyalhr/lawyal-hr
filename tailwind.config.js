/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0b1a37",
          "navy-mid": "#0d1e3e",
          glow: "#112b61",
          card: "#152c55",
          accent: "#0096ff",
          "accent-deep": "#0074e4",
          muted: "#c8d4e4",
          gold: "#b8860b",
          "masthead-navy": "#002147"
        }
      },
      boxShadow: {
        card: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 150, 255, 0.1)"
      }
    }
  },
  plugins: []
};
