import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import FollowerItem from "./FollowerItem";

const width = Dimensions.get("window").width;
// In reality, I will only retrieve the Post Id and process everything here

const SearchBar = () => {
  return <View style={styles.container}></View>;
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    width: width - 40,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 7,
  },
});
