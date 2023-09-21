import { createTheme } from "@mui/material/styles";

const palette = {
  blue: {
    600: "#025Ac7",
    500: "#006FF9",
    400: "#3D94FF",
    300: "#6BAEFF",
    200: "#C5D0FC",
    100: "#E6F1FE",
  },
  darkBlue: {
    800: "#002149",
    700: "#030E3A",
    600: "#1B1B31",
    500: "#20233C",
    400: "#232643",
    300: "#272949",
    200: "#2B2D50",
    100: "#53538C",
    modal: "#030E3A", // 70% modal background
  },
  grey: {
    400: "#B0B4C5",
    300: "#E5E6EB",
    200: "#F8F8F8",
    100: "#FDFDFD",
  },
  white: "#FFFFFF",
  red: {
    400: "#53010E",
    300: "#D4294B",
    200: "#F84367",
    100: "#FFEDF0",
  },
  yellow: {
    400: "#503F01",
    300: "#FCCD13",
    200: "#FFFF00",
    100: "#FFFAE8",
  },
  green: {
    300: "#004F41",
    200: "#13BA9C",
    100: "#E8F9F6",
  },
};

const colorTokens = {
  text: {
    body: palette.darkBlue[700],
    action: palette.blue[500],
    "action-hover": palette.blue[600],
    "on-action": palette.white,
    disabled: palette.grey[400],
    highlight: palette.yellow[200],
  },
  surface: {
    page: palette.grey[200],
    disabled: palette.grey[300],
    dark: palette.darkBlue[700],
    "action-primary": palette.blue[500],
    "action-hover": palette.blue[600],
    "action-light": palette.blue[100],
    "modal-background": palette.darkBlue.modal,

    table: {
      background: palette.grey[100],
      text: palette.darkBlue[700],
      "card-odd": palette.white,
      even: palette.grey[100],
      hover: palette.blue[100],
    },
    header: {
      items: palette.white,
      background: palette.darkBlue[700],
    },
  },
  border: {
    primary: palette.grey[300],
    secondary: palette.grey[400],
    icon: palette.white,
    action: palette.blue[500],
    dark: palette.darkBlue[700],
  },
  utility: {
    "error-dark": palette.red[300],
    "error-main": palette.red[200],
    "error-light": palette.red[100],
    "success-dark": palette.green[300],
    "success-main": palette.green[200],
    "success-light": palette.green[100],
    "warning-main": palette.yellow[300],
    "warning-light": palette.yellow[100],
    "information-main": palette.blue[500],
    "information-light": palette.blue[100],
  },
};

const theme = createTheme({
  spacing: (factor) => {
    if (factor === 0.5) return "4px";
    if (factor === 0.75) return "6px";
    return `${8 * factor}px`; // default MUI spacing
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    color: colorTokens.text.body,
    "heading-1": {
      fontSize: "32px",
      lineHeight: "34px",
      fontWeight: 700,
    },
    "heading-2": {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 700,
    },
    "heading-3": {
      fontSize: "18px",
      lineHeight: "26px",
      fontWeight: 700,
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    "paragraph-strong": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    "paragraph-small": {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    },
  },
  palette: {
    ...palette,
    colorTokens,
  },
});

export default theme;
