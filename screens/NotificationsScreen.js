import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get("screen");

const NotificationsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: Colors.background,
      }}
    >
      <Image
        style={{
          width: width * 0.4,
          height: width * 0.4,
          marginBottom: 50,
          resizeMode: "contain",
        }}
        source={require("../assets/icons/no-notification.png")}
      />
      <Text
        style={{
          fontSize: 27,
          fontWeight: "700",
          marginBottom: 30,
          color: Colors.black,
        }}
      >
        Aucune notification
      </Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
