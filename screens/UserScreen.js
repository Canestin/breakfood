import { StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { UserProfile } from "../components";

const UserScreen = () => {
  const route = useRoute();
  const { userId } = route.params;

  return <UserProfile userId={userId} />;
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
