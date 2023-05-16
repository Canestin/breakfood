import React from "react";
import { View, Text } from "react-native";
import userPic from "../assets/images/userpic1.jpeg";

const FollowerItem = (onPress, userName, userLocation, userPP) => {
  return (
    <View onPress={onPress}>
      <View>
        <View>
          <Image source={userPic} style={{ width: "100%", height: "100%" }} />
        </View>
        <View>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
          >
            {userName}
          </Text>
          <Text style={{ fontSize: 11, textAlign: "center" }}>
            {userLocation}
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default FollowerItem;
