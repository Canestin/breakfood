import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

// In reality, I will only retrieve the Post Id and process everything here

const Nutritionist = ({ nutritionist, style }) => {
  if (!nutritionist) return <View style={styles.skeletonRecipe} />;

  return (
    <ImageBackground source={nutritionist.image} style={style}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        start={{ x: 0.6, y: 0 }}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: "15%",
          paddingLeft: 20,
          paddingRight: 10,
        }}
      >
        <View
          style={{
            gap: 10,
            marginBottom: 7,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            {nutritionist.firstname}
          </Text>
          <Text style={{ fontSize: 10, color: "white", textAlign: "center" }}>
            {nutritionist.recipes} Recettes
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Nutritionist;

const styles = StyleSheet.create({
  skeletonRecipe: {
    height: 400,
    width: "100%",
    backgroundColor: "lightgrey",
    marginBottom: 10,
  },
});
