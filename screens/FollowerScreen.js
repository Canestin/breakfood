import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import profilePic from "../assets/images/nutritionist1.png";
import userPic from "../assets/images/userpic1.jpeg";
import banner from "../assets/images/banner.png";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import NumberText from "../components/NumberText";
import FollowerItem from "../components/FollowerItem";
import { MaterialIcons } from "@expo/vector-icons";
const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {[...Array(20)].map((_, index) => (
        <FollowerItem
          key={index.toString()}
          userName="Pierro236"
          userLocation="Paris, France"
        />
      ))}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  profileContainer: {
    width: "100%",
    height: 200,
  },
  profileBanner: {
    width: "100%",
    height: "70%",
    borderRadius: 12,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    objectFit: "cover",
    position: "absolute",
    top: "30%",
    left: "35%",
  },
  profileInfo: {
    width: "100%",
    height: 200,
    padding: 25,
  },
  profileInfoText: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfoData: {
    width: "100%",
    height: "50%",
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 12,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
