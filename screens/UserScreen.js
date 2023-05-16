import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const UserScreen = () => {
  const route = useRoute();
  const { userId } = route.params;
  console.log("userId", userId);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
        }}
      >
        UserId : {userId}
      </Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
