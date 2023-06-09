import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Vibration,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import Colors from "../constants/Colors";
import supabase from "../lib/supabase";
import user1 from "../assets/images/userphoto.jpeg";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const CommentsScreen = ({ navigation }) => {
  const [comments, setComments] = useState([]);

  return (
    <ScrollView style={styles.container}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <TextInput />
    </ScrollView>
  );
};

export default CommentsScreen;

const Comment = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [seeMore, setSeeMore] = useState(1);
  const [numberOflikes, setNumberOflikes] = useState(12);

  const content =
    "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet In quis justo. Maecenas rhoncus aliqua lacus. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet In quis justo. Maecenas rhoncus aliqua lacus.";

  useEffect(() => {
    setSeeMore(content.length);
  }, [post?.id]);
  const handleLiked = () => {
    Vibration.vibrate();
    setLiked(!liked);
    setNumberOflikes((nl) => (liked ? nl - 1 : nl + 1));
  };

  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        gap: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgray",
      }}
    >
      <Image
        style={{ height: 38, width: 38, borderRadius: 19 }}
        source={user1}
      />
      <View style={{ flex: 1, gap: 5 }}>
        <View style={{ gap: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Canestin Ndong
          </Text>
          <Pressable onPress={() => setSeeMore((s) => !s)} style={{ flex: 1 }}>
            <Text style={{ fontSize: 16 }}>
              {seeMore ? content.slice(0, 170) + " " : content}
              {seeMore && (
                <Text style={{ fontSize: 16, color: Colors.primary }}>
                  voir plus
                </Text>
              )}
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <FontAwesome
            name={liked ? "heart" : "heart-o"}
            color={liked ? "red" : "black"}
            size={20}
            onPress={handleLiked}
          />
          <Text style={{ fontSize: 16 }}>{numberOflikes}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
  },
});
