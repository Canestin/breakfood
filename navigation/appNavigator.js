import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { InitialScreen, LoginScreen } from "../screens";
import BackButton from "../components/BackButton";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          component={InitialScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerLeft: () => <BackButton />,
            headerShadowVisible: false,
            headerTitle: "",
            cardStyle: { backgroundColor: "#FFFFFF" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
