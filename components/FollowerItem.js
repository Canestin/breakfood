import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import userPic from "../assets/images/userpic1.jpeg";
import { SimpleLineIcons } from "@expo/vector-icons";

const FollowerItem = ({ onPress, userName, userLocation, userPP }) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <View style={styles.userContainer}>
        <View style={styles.userPicture}>
          <Image
            source={userPic}
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
          />
        </View>
        <View style={styles.userInfo}>
          <Text
            style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
          >
            {userName}
          </Text>
          <Text style={{ fontSize: 11, textAlign: "center" }}>
            {userLocation}
          </Text>
        </View>
      </View>
      <View style={styles.followStatus}>
        <Text>
          <SimpleLineIcons name="user-following" size={24} color="black" />
        </Text>
      </View>
    </View>
  );
};

export default FollowerItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    paddingVertical: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  userContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userPicture: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    width: "50%",
    display: "flex",
  },
  followStatus: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5,
  },
});
