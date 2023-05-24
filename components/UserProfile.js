import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import userPic from "../assets/images/userpic1.jpeg";
import banner from "../assets/images/banner.png";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import NumberText from "./NumberText";
import Recipe from "./Recipe";
import nutritionists from "../data/FakeNutritionistData";
import { multiplePostData } from "../data/FakePostData";
// import { favRecipes } from "../data/FakeRecipeData";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";

// const multiplePostData = [];
const favRecipes = [];
const { height, width } = Dimensions.get("window");

const UserProfile = ({ userId }) => {
  const [showRecipes, setShowRecipes] = useState(true);
  const [user, setUser] = useState(null);
  const ref = useRef(null);
  const navigation = useNavigation();

  useScrollToTop(ref);

  useEffect(() => {
    const u = nutritionists.find((n) => n.id === userId);
    setUser(u);
  }, [userId]);

  return (
    <ScrollView ref={ref} style={styles.container}>
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
              {user?.firstname}
            </Text>
            <Text style={{ fontSize: 15, color: Colors.black }}>Paris,</Text>
          </View>
          <View style={styles.profileInfoData}>
            <NumberText number="450" text="Recettes" />
            <NumberText
              onPress={() => navigation.navigate("Followers")}
              number="1.5M"
              text="Abonnés"
            />
            <NumberText
              onPress={() => navigation.navigate("Following")}
              number="1500"
              text="Suivi(e)s"
            />
          </View>
        </View>
        <View style={styles.profilePicture}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 120 / 2 }}
            source={user?.image}
          />
        </View>
      </View>
      <View style={styles.favBar}>
        <Pressable
          onPress={() => setShowRecipes(true)}
          style={{
            flex: 1 / 2,
            alignItems: "center",
          }}
        >
          <Feather
            name="grid"
            size={24}
            color={showRecipes ? Colors.black : "lightgray"}
          />
        </Pressable>

        <Pressable
          onPress={() => setShowRecipes(false)}
          style={{
            flex: 1 / 2,
            alignItems: "center",
          }}
        >
          <FontAwesome
            name="bookmark-o"
            size={24}
            color={!showRecipes ? Colors.black : "lightgray"}
          />
        </Pressable>
      </View>
      <View style={styles.recipesContainer}>
        {showRecipes ? (
          multiplePostData?.length ? (
            multiplePostData.map((item, i) => (
              <Recipe key={i} style={styles.item} recipe={item} />
            ))
          ) : (
            <NoItem showRecipes={showRecipes} text="postée" />
          )
        ) : favRecipes?.length ? (
          favRecipes.map((item, i) => (
            <Recipe key={i} style={styles.item} recipe={item} />
          ))
        ) : (
          <NoItem showRecipes={showRecipes} text="mise en favoris" />
        )}
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const NoItem = ({ text, showRecipes }) => {
  return (
    <View
      style={{
        height: height * 0.3,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons name="no-food" size={45} color={Colors.black} />
      <Text
        style={{
          maxWidth: "50%",
          fontSize: 16,
          fontWeight: "500",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Aucune recette {text}
      </Text>
    </View>
  );
};

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
    alignItems: "center",
  },
  profileInfoText: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfoData: {
    width: "60%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  recipesContainer: {
    flex: 1,
    gap: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
  },
  item: {
    width: Dimensions.get("window").width / 2 - 0.5,
    height: 240,
    backgroundColor: "lightgrey",
    overflow: "hidden",
  },
  favBar: {
    // backgroundColor: Colors.primaryOpacity,
    borderTopWidth: 0.4,
    borderTopColor: "lightgray",
    height: 35,
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
  },
});
