import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import HeaderLeftProfile from "../components/HeaderLeftProfile";
import {
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SearchScreen,
} from "../screens";
import Colors from "../constants/Colors";
import SearchBar from "../components/SearchBar";
<<<<<<< Updated upstream
import Username from "../components/Username";
=======
import HomeStackNavigator from "./homeStackNavigator";
import ProfileNavigator from "./profileStackNavigator";
>>>>>>> Stashed changes

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{ backgroundColor: Colors.white }}
      screenOptions={({ navigation, route }) => ({
        // headerTitle: "TATAMI",
        headerTitleStyle: { fontWeight: "bold", color: Colors.black },
        // headerStyle: { backgroundColor: Colors.white },

        // headerRight: () => <HeaderRightUsersOnline />,
        headerTitleAlign: "center",
        // tabBarActiveTintColor: Colors.white,
        tabBarStyle: { backgroundColor: Colors.white },
        tabBarLabelStyle: { fontSize: 11 },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Accueil",
          headerTitle: "Accueil",
          headerLeft: () => <HeaderLeftProfile />,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home-minus" : "home-minus-outline"}
              size={27}
              color={Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "",
          headerLeft: () => <SearchBar />,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search-sharp" : "search-outline"}
              size={25}
              color={Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          title: "Portefeuille",
          headerTitle: "Portefeuille",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "pluscircle" : "pluscircleo"}
              size={30}
              color={Colors.black}
            />
          ),
          headerRight: () => <></>,
        }}
        sceneContainerStyle={{ backgroundColor: "red" }}
      />

      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          title: "Notifications",
          headerTitle: "Notifications",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "notifications-sharp" : "notifications-outline"}
              size={25}
              color={Colors.black}
            />
          ),
          tabBarBadge: true,
          tabBarBadgeStyle: {
            backgroundColor: "red",
            transform: [{ scale: 0.5 }],
            marginLeft: -7,
            marginTop: 5,
          },
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          headerTitle: "",
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={23}
              color={Colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
