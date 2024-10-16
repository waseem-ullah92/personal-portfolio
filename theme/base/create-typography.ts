import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const createTypography = (): TypographyOptions => {
  return {
    htmlFontSize: 10,
    fontFamily: "Open Sans",
    body1: {
      fontSize: "1.8rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "1.6rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2:{
      fontSize: "1.3rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    h1: {
      fontWeight: 700,
      fontSize: "6rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.2rem",
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 500,
      fontSize: "2.2rem",
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
  };
};
