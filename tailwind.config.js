/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      beaver: "#9e7f66",
      "cod-gray": "#111111",
      mirage: "#17192b",
      "ebony-clay": "#242b37",
      "shuttle-gray": "#5c6779",
    },
  },
  plugins: [],
};
