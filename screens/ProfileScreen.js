import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import profilePic from "../assets/images/nutritionist1.png";
import userPic from "../assets/images/userpic1.jpeg";
import banner from "../assets/images/banner.png";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import NumberText from "../components/NumberText";
import { MaterialIcons } from "@expo/vector-icons";
import FollowerItem from "../components/FollowerItem";
const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBanner}>
          <Image source={banner} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.profileInfoText}>
            <Text style={{ fontSize: 20, color: Colors.primary }}>
              Pierro236{" "}
            </Text>
            <Text style={{ fontSize: 15, color: Colors.black }}>
              Paris, France
            </Text>
          </View>
          <View style={styles.profileInfoData}>
            <NumberText number="450" text="Publications" />
            <NumberText number="1,45M" text="Abonnés" />
            <NumberText number="1500" text="Abonnements" />
          </View>
        </View>
        <View style={styles.profilePicture}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 120 / 2 }}
            source={userPic}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
