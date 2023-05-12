import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import recipe1 from "../assets/images/recipe1.png";
import recipe2 from "../assets/images/recipe2.png";
import recipe3 from "../assets/images/recipe3.png";
import recipe4 from "../assets/images/recipe4.png";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

// In reality, I will only retrieve the Post Id and process everything here

const Post = ({ nutrionist, post_id }) => {
  const postImgs = [recipe1, recipe2, recipe3, recipe4];
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderUser}>
          <Image source={nutrionist.image} style={styles.postUserPhoto} />
          <Text style={{ fontSize: 14, fontWeight: "700" }}>
            {nutrionist.firstname}
          </Text>
          <MaterialCommunityIcons
            name="check-decagram"
            size={12}
            color="#579AF5"
            style={{ marginLeft: -2 }}
          />
        </View>
        <FontAwesome name="bookmark-o" size={24} color="black" />
      </View>
      <ImageBackground source={postImgs[post_id]} style={styles.recipe}>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          start={{ x: 0.6, y: 0 }}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: "20%",
            paddingHorizontal: 30,
          }}
        >
          <View
            style={
              {
                /* backgroundColor: "red", */
              }
            }
          >
            <View
              style={{
                flexDirection: "row",
                gap: 30,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 14, color: "white" }}>15 min</Text>
              <Text style={{ fontSize: 14, color: "white" }}>
                12 Ingrédients
              </Text>
            </View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: "700",
                color: "white",
              }}
            >
              Toast fruité aux bleuets
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.postFooter}>
        <View style={styles.postFooterItem}>
          <FontAwesome name="heart-o" size={24} color="black" />
          <Text style={styles.postFooterItemText}>1207 J'aime</Text>
        </View>
        <View style={styles.postFooterItem}>
          <Text style={styles.postFooterItemText}>103 commentaires</Text>
          {/* <FontAwesome name="bookmark-o" size={24} color="black" /> */}
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    flex: 1,
    backgroundColor: "white",
  },

  recipe: {
    height: 350,
  },
  recipeContent: {
    height: 130,
    paddingLeft: 25,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  postHeaderUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  postUserPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postFooterItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  postFooterItemText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
