import { extendTheme } from "native-base";

const defaultTheme = extendTheme({
  colors: {
    white: "#ffffff",
    green: {
      500: "#00b37e",
      700: "#00875f",
    },
    red: {
      500: "#f75a68",
      700: "#aa2834",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292e",
      400: "#323238",
      300: "#7c7c8a",
      200: "#c4c4cc",
      100: "#e1e1e6",
    },
  },
  fontSizes: {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
  fonts: {
    heading: "Roboto_400Regular",
    body: "Roboto_700Bold",
  },
});

export { defaultTheme };
