import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { InitialScreen, LoginScreen } from "../screens";
import ProductTourScreen from "../screens/ProductTourScreen";

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
          name="ProductTour"
          component={ProductTourScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
