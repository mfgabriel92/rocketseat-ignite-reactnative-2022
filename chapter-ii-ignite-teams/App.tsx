import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { Routes } from "@routes/index";
import { defaultTheme } from "@themes/defaultTheme";
import { Center, NativeBaseProvider, StatusBar, VStack } from "native-base";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [roboto] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={defaultTheme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <VStack flex="1" backgroundColor="gray.600" safeArea>
        {roboto ? (
          <Routes />
        ) : (
          <Center flex="1">
            <ActivityIndicator size="large" />
          </Center>
        )}
      </VStack>
    </NativeBaseProvider>
  );
}
