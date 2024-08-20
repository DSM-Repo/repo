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
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#222222"
        },
        lime: {
          50: "#ecfee7",
          100: "#d5fccb",
          200: "#aff89e",
          300: "#7df165",
          400: "#42e224",
          500: "#31ca18",
          600: "#20a20e",
          700: "#1b7b10",
          800: "#1b6113",
          900: "#1a5215",
          950: "#072e05"
        },
        blue: {
          50: "#f1f8fe",
          100: "#e2effc",
          200: "#bfdff8",
          300: "#86c4f3",
          400: "#45a6eb",
          500: "#2492e2",
          600: "#0f6dba",
          700: "#0e5796",
          800: "#104a7c",
          900: "#133f67",
          950: "#0c2845"
        }
      }
    },
    fontSize: {
      title1: ["30px", { fontWeight: 600, lineHeight: "35.8px" }],
      title2: ["27px", { fontWeight: 500, lineHeight: "32.2px" }],
      title3: ["24px", { fontWeight: 600, lineHeight: "28.6px" }],
      title4: ["24px", { fontWeight: 100, lineHeight: "28.6px" }],
      body1: ["22px", { fontWeight: 500, lineHeight: "26.3px" }],
      body2: ["22px", { fontWeight: 400, lineHeight: "26.3px" }],
      body3: ["20px", { fontWeight: 500, lineHeight: "23.9px" }],
      body4: ["20px", { fontWeight: 400, lineHeight: "23.9px" }],
      body5: ["17px", { fontWeight: 500, lineHeight: "20,3px" }],
      body6: ["17px", { fontWeight: 400, lineHeight: "20.3px" }],
      body7: ["14px", { fontWeight: 400, lineHeight: "160%" }],
      body8: ["14px", { fontWeight: 600, lineHeight: "16.7px" }]
    }
  },
  plugins: []
} satisfies Config;
