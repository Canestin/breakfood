import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, PostDetailScreen, UserScreen } from "../screens";
import HeaderLeftProfile from "../components/HeaderLeftProfile";
import BackButton from "../components/BackButton";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation, route }) => ({
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: "white" },
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <HeaderLeftProfile />,
        }}
      />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetailScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack.Navigator>
  );
}
