import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../ui/src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          white: "#FFFFFF",
          25: "#EEEEEE",
          50: "#BBBBBB",
          100: "#999999",
          200: "#888888",
          300: "#777777",
          400: "#666666",
          500: "#555555",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111",
          black: "#000000"
        },
        green: {
          50: "#DEF2DA",
          100: "#B5F2AA",
          200: "#8CF279",
          300: "#60EB46",
          400: "#37E517",
          500: "#2BBF0F",
          600: "#1A8008",
          700: "#115904",
          800: "#0B4001",
          900: "#083300"
        }
      }
    },
    fontSize: {
      title1: ["48px", { fontWeight: 700, lineHeight: "57px" }],
      title2: ["36px", { fontWeight: 600, lineHeight: "43px" }],
      title3: ["24px", { fontWeight: 700, lineHeight: "29px" }],
      body1: ["22px", { fontWeight: 600, lineHeight: "26px" }],
      body2: ["20px", { fontWeight: 500, lineHeight: "24px" }],
      body3: ["18px", { fontWeight: 400, lineHeight: "21px" }],
      body4: ["16px", { fontWeight: 500, lineHeight: "19px" }],
      body5: ["14px", { fontWeight: 400, lineHeight: "17px" }],
      resumeTitle: ["30px", { fontWeight: 600, lineHeight: "33px" }],
      resumeSubTitle: ["24px", { fontWeight: 100, lineHeight: "27px" }],
      resumeInformation: ["16px", { fontWeight: 400, lineHeight: "19px" }],
      resumeIntroduceHeading: ["18px", { fontWeight: 400, lineHeight: "21px" }],
      resumeIntroduce: ["14px", { fontWeight: 300, lineHeight: "17px" }],
      resumeSectionTitle: ["14px", { fontWeight: 500, lineHeight: "17px" }],
      resumeItemTitle: ["16px", { fontWeight: 500, lineHeight: "19px" }],
      resumeItemContent: ["14px", { fontWeight: 400, lineHeight: "17px" }]
    }
  },
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;
