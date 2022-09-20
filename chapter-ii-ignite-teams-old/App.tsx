import { Loading } from "@components/Loading";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { Teams } from "@screens/Teams";
import { defaultTheme } from "@themes/defaultTheme";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={defaultTheme}>
      <StatusBar style="light" translucent />
      {!fontsLoaded ? <Loading /> : <Teams />}
    </NativeBaseProvider>
  );
}

export default App;
