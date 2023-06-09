import { createStackNavigator } from "@react-navigation/stack";
import { AddPostScreen1 } from "../screens";
import { AddPostScreen2 } from "../screens";
import { AddPostScreen3 } from "../screens";
import HeaderLeftProfile from "../components/HeaderLeftProfile";
import BackButton from "../components/BackButton";

const Stack = createStackNavigator();

export default function AddPostStackNav() {
  return (
    <Stack.Navigator
      initialRouteName="AddPost1"
      screenOptions={({ navigation, route }) => ({
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: "white" },
      })}
    >
      <Stack.Screen
        name="AddPost1"
        component={AddPostScreen1}
        options={{
          headerTitle: "Nouvelle publication",
          headerLeft: () => <HeaderLeftProfile />,
        }}
      />
      <Stack.Screen
        name="AddPost2"
        component={AddPostScreen2}
        options={{
          headerTitle: "Nouvelle publication",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="AddPost3"
        component={AddPostScreen3}
        options={{
          headerTitle: "Nouvelle publication",
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack.Navigator>
  );
}
