import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import userPic from "../assets/images/userpic1.jpeg";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const FollowerItem = ({ onPress, userName, userLocation, userPP }) => {
  const [isFollowing, setFollowing] = useState(true);
  const icon = isFollowing ? "user-following" : "user-follow";
  const color = isFollowing ? Colors.primary : Colors.black;
  const followStatus = {
    ...styles.followStatus,
    backgroundColor: color,
  };
  handlePressFollowing = () => {
    setFollowing(!isFollowing);
  };
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
      <Pressable onPress={handlePressFollowing} style={followStatus}>
        <Text>
          <SimpleLineIcons name={icon} size={24} color={"white"} />
        </Text>
      </Pressable>
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
    width: "15%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
