import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="groups"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="groups" component={Groups} />
      <Stack.Screen name="newGroup" component={NewGroup} />
      <Stack.Screen name="players" component={Players} />
    </Stack.Navigator>
  );
}

export { AppRoutes };
