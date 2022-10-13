import { Platform } from "react-native";

const theme = {
  bg: {
    main: "#e1e4e8",
    nav: "#24292e",
    primary: "#0366d6",
    secondary: "#d73a4a",
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textWhite: "#fff",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
