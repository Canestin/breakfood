import React from "react";
import { View, Text } from "react-native";

const NumberText = ({ number, text }) => {
  return (
    <View style={{ flex: 1 / 3 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
        {number}
      </Text>
      <Text style={{ fontSize: 11, textAlign: "center" }}>{text}</Text>
    </View>
  );
};

export default NumberText;
