import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Dimensions, View } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import {
  InitialScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
  ProductTourScreen,
  SetupScreen,
  CodeVerifScreen,
} from "../screens";
import TabsNavigator from "./tabsNavigator";

const { height } = Dimensions.get("screen");
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      {/* <Stack.Navigator initialRouteName="TabsNavigator"> */}
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
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CodeVerif"
          component={CodeVerifScreen}
          options={{
            headerLeft: () => <></>,
            title: "Code de vérification",
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            gestureEnabled: true,
            gestureDirection: "vertical",
            gestureResponseDistance: height,
          }}
        />

        <Stack.Screen
          name="Setup"
          component={SetupScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TabsNavigator"
          component={TabsNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
