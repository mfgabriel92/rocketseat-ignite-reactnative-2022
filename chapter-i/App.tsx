import { NativeBaseProvider, StatusBar } from "native-base";
import { Home } from "./src/screens/Home";
import { defaultTheme } from "./src/themes/default.theme";

function App() {
  return (
    <NativeBaseProvider theme={defaultTheme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </NativeBaseProvider>
  );
}

export default App;
