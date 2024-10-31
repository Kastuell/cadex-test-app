import { COLORS } from "@/shared/constants";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/shared/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        custom_brown1: { value: COLORS.custom_brown1 },
        custom_brown2: { value: COLORS.custom_brown2 },
        custom_gray1: { value: COLORS.custom_gray1 },
        custom_white1: { value: COLORS.custom_white1 },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.custom_brown1}" },
        secondary: { value: "{colors.custom_brown2}" },
        grayish: { value: "{colors.custom_gray1}" },
        whitish: { value: "{colors.custom_white1}" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
