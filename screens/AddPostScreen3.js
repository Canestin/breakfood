import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import SubmitButton from "../components/SubmitButton";
import IngredientInput from "../components/IngredientInput";
import { useDispatch, useSelector } from "react-redux";
import postSlice from "../redux/postSlice";

const AddPostScreen3 = ({ navigation }) => {
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { ingredient: "", quantity: 1 }]);
  };

  const handleIngredientChange = (index, ingredientData) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = ingredientData;
    setIngredients(updatedIngredients);
  };

  const dispatch = useDispatch();

  dispatch(setIngredients(ingredients));

  const data = useSelector(postSlice);

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Ingrédients</Text>
      </View>
      <ScrollView style={styles.ingredientContainer}>
        {ingredients.map((ingredient, index) => (
          <IngredientInput
            key={index}
            placeholder={`Ingredient ${index + 1}`}
            onIngredientChange={(data) => handleIngredientChange(index, data)}
          />
        ))}
      </ScrollView>
      <View style={styles.addIngredientContainer}>
        <SubmitButton
          height={"80%"}
          width={"80%"}
          text={" + Add ingredient"}
          onPress={handleAddIngredient}
        />
      </View>
      <View style={styles.titleSubmit}>
        <SubmitButton
          height={"80%"}
          width={"60%"}
          text={"Next"}
          onPress={() => {
            console.log(data);
          }}
        />
      </View>
    </View>
  );
};

export default AddPostScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  titleView: {
    flex: 0.13,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
  },
  ingredientContainer: {
    marginTop: 10,
    flex: 0.5,
    paddingBottom: 15,
    marginBottom: 15,
  },
  addIngredientContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleSubmit: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imgContainer: {
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 20,
    gap: 20,
  },
  imgPost: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
