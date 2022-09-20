import { DefaultTheme, NavigationContainer, Theme } from "@react-navigation/native";
import { useTheme } from "native-base";
import { AppRoutes } from "./app.routes";

function Routes() {
  const { colors } = useTheme();

  const theme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.gray[600],
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  );
}

export { Routes };
