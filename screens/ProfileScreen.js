import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import userPic from "../assets/images/userpic1.jpeg";
import banner from "../assets/images/banner.png";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import NumberText from "../components/NumberText";
import Recipe from "../components/Recipe";
import { multiplePostData } from "../data/FakePostData";

const { height, width } = Dimensions.get("window");

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBanner}>
          <Image source={banner} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.profileInfoText}>
            <Text
              style={{
                fontSize: 20,
                color: Colors.primary,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              Pierre Sedo
            </Text>
            <Text style={{ fontSize: 15, color: Colors.black }}>
              Paris, France
            </Text>
          </View>
          <View style={styles.profileInfoData}>
            <NumberText number="450" text="Publications" />
            <NumberText
              onPress={() => navigation.navigate("Followers")}
              number="1,45M"
              text="Abonnés"
            />
            <NumberText
              onPress={() => navigation.navigate("Following")}
              number="1500"
              text="Abonnements"
            />
          </View>
        </View>
        <View style={styles.profilePicture}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 120 / 2 }}
            source={userPic}
          />
        </View>
      </View>
      <View style={styles.recipesContainer}>
        {multiplePostData.map((item, i) => (
          <Recipe key={i} style={styles.item} recipe={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {},
  profileBanner: {
    height: height * 0.4 * 0.35,
    borderRadius: 12,
  },
  profilePicture: {
    height: height * 0.4 * 0.35,
    aspectRatio: 1,
    objectFit: "cover",
    position: "absolute",
    top: height * 0.4 * 0.175,
    left: (width - height * 0.4 * 0.35) / 2,
  },
  profileInfo: {
    width: "100%",
    paddingHorizontal: "5%",
    paddingTop: height * 0.4 * 0.175,
  },
  profileInfoText: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfoData: {
    marginTop: 10,
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 12,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recipesContainer: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 30,
  },
  item: {
    width: Dimensions.get("window").width / 2 - 25,
    height: 250,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    overflow: "hidden",
  },
});
