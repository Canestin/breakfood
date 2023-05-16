import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Category from "../components/Category";
import soup from "../assets/images/soup.png";
import nutritionistsearch from "../assets/images/nutritionistsearch.png";
import ingredientsearch from "../assets/images/ingredientsearch.png";
import { multiplePostData } from "../data/FakePostData";
import { multipleNutritionistData } from "../data/FakeNutritionistData";

import Recipe from "../components/Recipe";
import Nutritionist from "../components/Nutritionist";

const SearchScreen = () => {
  const [category, setCategory] = useState("Recettes");
  const category1 = "Recettes";
  const category2 = "Nutritionnistes";
  const category3 = "Ingredients";
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{
          height: 40,
          flexDirection: "row",
          flex: 1,
          margin: 10,
          marginLeft: 15,
          marginRight: 20,
        }}
      >
        <Category
          image={soup}
          text={category1}
          color={category === category1 ? Colors.primary : null}
          onPress={() => setCategory(category1)}
        />
        <Category
          image={nutritionistsearch}
          text={category2}
          color={category === category2 ? Colors.primary : null}
          onPress={() => setCategory(category2)}
        />
        <Category
          image={ingredientsearch}
          text={category3}
          color={category === category3 ? Colors.primary : null}
          onPress={() => setCategory(category3)}
        />
      </ScrollView>

      <View
        style={[
          styles.content,
          { display: category == category1 ? "flex" : "none" },
        ]}
      >
        {multiplePostData.map((item, i) => (
          <Recipe key={`r-${i}`} style={[styles.item]} recipe={item} />
        ))}
      </View>

      <View
        style={[
          styles.content,
          { display: category == category2 ? "flex" : "none" },
        ]}
      >
        {multipleNutritionistData.map((item, i) => (
          <Nutritionist
            key={`n-${i}`}
            style={styles.item}
            nutritionist={item}
          />
        ))}
      </View>

      <View
        style={[
          styles.content,
          {
            marginTop: 30,
            display: category == category3 ? "flex" : "none",
          },
        ]}
      >
        {multipleNutritionistData.map((item, i) => (
          <Category
            key={`i-${i}`}
            image={ingredientsearch}
            text={category3}
            ratio={1.3}
            color={category === category3 ? Colors.primary : null}
            onPress={() => setCategory(category3)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
  },
  item: {
    width: Dimensions.get("window").width / 2 - 25,
    height: 250,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    overflow: "hidden",
  },
});
