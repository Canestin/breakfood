import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

// In reality, I will only retrieve the Post Id and process everything here

const Recipe = ({ recipe, style }) => {
  if (!recipe) return <View style={styles.skeletonRecipe} />;

  return (
    <ImageBackground source={recipe.image} style={style}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        start={{ x: 0.6, y: 0 }}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: "30%",
          paddingLeft: 20,
          paddingRight: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginBottom: 7,
          }}
        >
          <Text style={{ fontSize: 10, color: "white" }}>
            {recipe.time} min
          </Text>
          <Text style={{ fontSize: 10, color: "white" }}>
            {recipe.ingredients} Ingrédients
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "white",
          }}
        >
          {recipe.title}
        </Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  skeletonRecipe: {
    height: 400,
    width: "100%",
    backgroundColor: "lightgrey",
    marginBottom: 10,
  },
});
