import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const Category = ({ image, text, ratio, color, onPress, icon }) => {
  const imgSize = !!ratio ? ratio * 30 : 30;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor: color ?? Colors.primaryOpacity,
        },
      ]}
      onPress={onPress}
    >
      {image ? (
        <Image
          source={image}
          style={{
            width: imgSize,
            height: imgSize,
          }}
        />
      ) : (
        icon
      )}
      <Text style={{ fontSize: !!ratio ? ratio * 12 : 12, fontWeight: "600" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginHorizontal: 5,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
