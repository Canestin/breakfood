import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text, T } from "react-native";
import CustomTextInput from "./CustomTextInput";
import { Picker } from "@react-native-picker/picker";
import Colors from "../constants/Colors";

const IngredientInput = ({ placeholder, onIngredientChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(1);
  const [isSelected, setIsSelected] = useState(true);

  const onChangeText = (text) => {
    setInputValue(text);
    onIngredientChange({ ingredient: text, quantity: selectedValue });
  };

  const handleChange = (itemValue) => {
    setSelectedValue(itemValue);
    setIsSelected(true);
    onIngredientChange({ ingredient: inputValue, quantity: itemValue });
  };

  const handlePress = () => {
    setIsSelected(false);
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder={placeholder}
        value={inputValue}
        onChangeText={onChangeText}
        width={"70%"}
        height={"100%"}
      />
      <Pressable style={styles.pickerContainer} onPress={handlePress}>
        {isSelected ? (
          <Text style={styles.text}>
            {selectedValue == 1 ? `${selectedValue} g` : `${selectedValue} g`}
          </Text>
        ) : (
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={handleChange}
          >
            {new Array(200).fill(1).map((_, index) => (
              <Picker.Item
                label={`${(index + 1) * 5}`}
                value={(index + 1) * 5}
                key={index}
                style={styles.text}
              />
            ))}
          </Picker>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  picker: {
    width: "100%",
    fontSize: 11,
  },
  pickerContainer: {
    width: "27%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 12,
  },
  text: {
    fontSize: 20,
  },
});

export default IngredientInput;
