"use client";
import { createTheme } from "@mui/material/styles";
import { COLORS } from "./shared/constants";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    primary: {
      main: COLORS.custom_brown1,
    },
    secondary: {
      main: COLORS.custom_brown2,
    },
    background: {
      default: COLORS.custom_gray1,
    },
    text: {
      primary: COLORS.custom_brown1,
      secondary: COLORS.custom_brown2,
    },
  },
});

export default theme;
