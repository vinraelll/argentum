/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ===== SEMANTIC COLORS ===== */
        background: {
          DEFAULT: "rgb(var(--color-bg))",
          secondary: "rgb(var(--color-bg-secondary))",
        },

        text: {
          primary: "rgb(var(--color-text-primary))",
          secondary: "rgb(var(--color-text-secondary))",
          muted: "rgb(var(--color-text-muted))",
        },

        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          foreground: "rgb(var(--color-primary-foreground))",
        },

        success: "rgb(var(--color-success))",
        danger: "rgb(var(--color-danger))",
        warning: "rgb(var(--color-warning))",

        border: "rgb(var(--color-border))",
      },

      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },

      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "26px" }],
        xl: ["22px", { lineHeight: "30px" }],
        "2xl": ["28px", { lineHeight: "36px" }],
      },

      spacing: {
        18: "72px",
        22: "88px",
      },
    },
  },
  plugins: [],
}
