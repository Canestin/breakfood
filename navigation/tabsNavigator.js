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
  ProfileScreen,
  SearchScreen,
  NotificationsScreen,
} from "../screens";
import Colors from "../constants/Colors";
import SearchBar from "../components/SearchBar";
import HomeStackNavigator from "./homeStackNavigator";
import Username from "../components/Username";

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{ backgroundColor: Colors.white }}
      screenOptions={({ navigation, route }) => ({
        headerTitleStyle: { fontWeight: "bold", color: Colors.black },
        headerTitleAlign: "center",
        tabBarStyle: { backgroundColor: Colors.white },
        tabBarLabelStyle: { fontSize: 11 },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          title: "Accueil",
          headerTitle: "Accueil",
          headerShown: false,
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
        component={NotificationsScreen}
        options={{
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Username isVerified={true} userName={"Pierre Sedo"} />
          ),
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
