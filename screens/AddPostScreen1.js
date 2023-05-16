import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

const AddPostScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Add Post Screen 1</Text>
    </View>
  );
};

export default AddPostScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryOpacity,
  },
});
