/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        ss: "480px",
        sm: "620px",
        sl: "768px",
        md: "1060px",
        lg: "1200px",
      },
      colors: {
        background: "#F2E9D8",
        primary: "#263140",
        accent: "#D97652",
        accentHover: "#ed9676",
        textMain: "#000000",
        textWhite: "#ffffff",
      },
      fontFamily: {
        spoqa: ["SpoqaHanSansNeo-Regular"],
        spoqaMid: ["SpoqaHanSansNeo-Medium"],
        spoqaBold: ["SpoqaHanSansNeo-Bold"],
      },
    },
  },
  plugins: [],
};
