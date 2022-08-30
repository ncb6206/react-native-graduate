import { createStackNavigator } from "@react-navigation/stack";
import WordInfo from "../pages/WordInfo";
import Search from "../pages/Search";
import Dictionary from "../pages/Dictionary";

export default function StackDictionary() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Dictionary"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Dictionary" component={Dictionary} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="WordInfo" component={WordInfo} />
    </Stack.Navigator>
  );
}
