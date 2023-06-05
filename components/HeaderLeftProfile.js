import React from "react";
import { StyleSheet, View, Pressable, Image } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const HeaderLeftProfile = () => {
  const { avatar } = useSelector((state) => state.user);
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Image style={[styles.img]} source={{ uri: avatar }} />
      </Pressable>
    </View>
  );
};

export default HeaderLeftProfile;

const styles = StyleSheet.create({
  img: {
    width: 35,
    height: 35,
    marginLeft: 12,
    borderRadius: 35 / 2,
    borderWidth: 0.1,
    borderColor: "gray",
  },
});
