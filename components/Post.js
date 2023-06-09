import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// In reality, I will only retrieve the Post Id and process everything here

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [numberOflikes, setNumberOflikes] = useState(0);
  if (!post) return <View style={styles.skeletonPost} />;
  const navigation = useNavigation();

  useEffect(() => {
    if (post) {
      setLiked(post.liked);
      setSaved(post.saved);
      setNumberOflikes(post.likes);
    }
  }, [post.id]);

  const handleLiked = () => {
    setLiked(!liked);
    setNumberOflikes((nl) => (liked ? nl - 1 : nl + 1));
  };
  const handleSaved = () => {
    setSaved(!saved);
  };
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
        <FontAwesome
          name={saved ? "bookmark" : "bookmark-o"}
          size={24}
          color="black"
          onPress={handleSaved}
        />
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
            <View>
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
        <Pressable style={styles.postFooterItem} onPress={handleLiked}>
          <FontAwesome
            name={liked ? "heart" : "heart-o"}
            color={liked ? "red" : "black"}
            size={24}
          />
          <Text style={styles.postFooterItemText}>{numberOflikes} J'aime</Text>
        </Pressable>
        <View style={styles.postFooterItem}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate({
                name: "Comments",
                params: { postId: post.id },
                merge: true,
              })
            }
            style={styles.postFooterItemText}
          >
            <Text>{post.comments} commentaires</Text>
          </TouchableOpacity>
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
