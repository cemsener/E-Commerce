import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
import { createScreens } from "./app/constants";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: createScreens(),
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Hedvig Letters Serif", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#B33771",
          DEFAULT: "#6D214F",
        },
      },
      spacing: {
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        100: "25rem",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary.DEFAULT"),
            maxWidth: "none",
            h1: {
              color: theme("colors.primary.light"),
            },
            p: {
              color: theme("colors.slate.200"),
            },
          },
        },
        blue: {
          css: {
            backgroundColor: theme("colors.blue.100"),
            color: theme("colors.blue.500"),

            h1: {
              color: theme("colors.blue.500"),
            },
            p: {
              color: theme("colors.blue.500"),
            },
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.light"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),

    plugin(({ addComponents, theme }: any) => {
      const colors = theme("colors");
      const spacing = theme("spacing");
      addComponents({
        ".form-input": {
          backgroundColor: colors.slate[50],
          border: colors.slate[200] + " solid 1px",
          color: colors.slate[800],
          borderRadius: spacing[1],
          padding: spacing[1] + " " + spacing[2],
          width: "100%",
          "&:focus": {
            backgroundColor: colors.white,
            borderColor: colors.primary.light,
            outline: "none",
          },

          "&.error": {
            borderColor: colors.rose[500],
          },
          "&.success": {
            borderColor: colors.teal[500],
          },
          "&.inverted": {
            backgroundColor: colors.slate[800],
            color: colors.white,
            borderColor: colors.slate[200],
            "&:focus": {
              backgroundColor: colors.slate[800],
              borderColor: colors.primary.light,
              outline: "none",
            },
          },
        },
      });
    }),
  ],
};
export default config;
