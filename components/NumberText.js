import React from "react";
import { Pressable, Text } from "react-native";

const NumberText = ({ number, text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ flex: 1 / 3 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
        {number}
      </Text>
      <Text style={{ fontSize: 11, textAlign: "center" }}>{text}</Text>
    </Pressable>
  );
};

export default NumberText;
