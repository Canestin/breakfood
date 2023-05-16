import { createStackNavigator } from "@react-navigation/stack";
import { AddPostScreen1 } from "../screens";
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
    </Stack.Navigator>
  );
}
