import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen, FollowerScreen } from "../screens";
import Username from "../components/Username";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

export default function ProfileNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.white },
      }}
      initialRouteName="Profile"
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <Username isVerified={true} userName={"Pierre Sedo"} />
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Followers"
        component={FollowerScreen}
        options={{
          headerLeft: () => (
            <Username isVerified={true} userName={"Pierre Sedo"} />
          ),
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}
