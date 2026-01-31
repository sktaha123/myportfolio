// tailwind.config.js
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#E6E6E6",
          surface: "#FFFFFF",
          muted: "#636363",
        },
        text: {
          strong: "#0E0D0B",
          heading: "#2B2E4A",
          body: "#22223B",
          muted: "rgba(34,34,59,0.7)",
        },
        accent: {
          primary: "#4A4E69",
          secondary: "#4A4D7D",
        },
        border: {
          soft: "rgba(34,34,59,0.15)",
        },
      },
      boxShadow: {
        deep: "0 25px 50px -12px rgba(34,34,59,0.45)",
      },
    },
  },
};