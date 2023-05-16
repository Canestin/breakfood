import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const PostDetailScreen = () => {
  const route = useRoute();
  const { postId } = route.params;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
        }}
      >
        PostId : {postId}
      </Text>
    </View>
  );
};

export default PostDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
