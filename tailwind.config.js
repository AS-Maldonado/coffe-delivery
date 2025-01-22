/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#8047F8",
        purple_light: "#EBE5F9",
        purple_dark: "#4B2995",
        yellow: "#DBAC2C",
        yellow_light: "#F1E9C9",
        yellow_dark: "#C47F17",
        title: "#272221",
        subtitle: "#403937",
        label: "#8D8686",
        text: "#574F4D",
        card: "#F3F2F2",
        button: "#E6E5E5",
      },
      fontFamily: {
        baloo: ["'Baloo 2'", "'serif'"],
      },
    },
  },
  plugins: [],
};
