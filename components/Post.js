import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// In reality, I will only retrieve the Post Id and process everything here

const Post = ({ post }) => {
  if (!post) return <View style={styles.skeletonPost} />;
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Pressable
          onPress={() =>
            navigation.navigate({
              name: "User",
              params: { userId: post.user.id },
              merge: true,
            })
          }
          style={styles.postHeaderUser}
        >
          <Image source={post.user.image} style={styles.postUserPhoto} />
          <Text style={{ fontSize: 14, fontWeight: "700" }}>
            {post.user.username}
          </Text>
          {post.user.certified && (
            <MaterialCommunityIcons
              name="check-decagram"
              size={12}
              color="#579AF5"
              style={{ marginLeft: -2 }}
            />
          )}
        </Pressable>
        <FontAwesome name="bookmark-o" size={24} color="black" />
      </View>
      <ImageBackground source={post.image} style={styles.recipe}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() =>
            navigation.navigate({
              name: "PostDetails",
              params: { postId: post.id },
              merge: true,
            })
          }
        >
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
                  // backgroundColor: "red",
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
                <Text style={{ fontSize: 14, color: "white" }}>
                  {post.time} min
                </Text>
                <Text style={{ fontSize: 14, color: "white" }}>
                  {post.ingredients} Ingrédients
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "700",
                  color: "white",
                }}
              >
                {post.title}
              </Text>
            </View>
          </LinearGradient>
        </Pressable>
      </ImageBackground>
      <View style={styles.postFooter}>
        <View style={styles.postFooterItem}>
          <FontAwesome name="heart-o" size={24} color="black" />
          <Text style={styles.postFooterItemText}>{post.likes} J'aime</Text>
        </View>
        <View style={styles.postFooterItem}>
          <Text style={styles.postFooterItemText}>
            {post.comments} commentaires
          </Text>
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
  skeletonPost: {
    height: 400,
    width: "100%",
    backgroundColor: "lightgrey",
    marginBottom: 10,
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
