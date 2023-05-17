import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen, FollowerScreen, FollowingScreen } from "../screens";
import Username from "../components/Username";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

export default function ProfileNavigator() {
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
      <Stack.Screen
        name="Following"
        component={FollowingScreen}
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
