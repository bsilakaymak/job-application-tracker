/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A120B",
        secondary: "#3C2A21",
        textPrimary: "#D5CEA3",
        textSecondary: "#E5E5CB",
        listingClosed: "#8a1a30",
        listingPending: "#baa729",
        listingAccepted: "#1d8038",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
