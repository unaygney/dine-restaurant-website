/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url(/hero-bg-mobile.jpg)",
        "hero-tablet": "url(/hero-bg-tablet.jpg)",
        "hero-desktop": "url(/hero-bg-desktop.jpg)",
        "footer-hero-mobile": "url(/ready-bg-mobile.jpg)",
        "footer-hero-tablet": "url(/ready-bg-tablet.jpg)",
        "footer-hero-desktop": "url(/ready-bg-desktop.jpg)",
      },
      colors: {
        beaver: "#9e7f66",
        "cod-gray": "#111111",
        mirage: "#17192b",
        "ebony-clay": "#242b37",
        "shuttle-gray": "#5c6779",
      },
      content: {
        "bottom-right": "url(/patterns/pattern-curve-bottom-right.svg)",
        "top-left": "url(/patterns/pattern-curve-top-left.svg)",
        "top-right": "url(/patterns/pattern-curve-top-right.svg)",
        divide: "url(/patterns/pattern-divide.svg)",
        lines: "url(/patterns/pattern-lines.svg)",
      },
    },
  },

  plugins: [],
};
