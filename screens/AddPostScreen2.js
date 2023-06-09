import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import CustomTextInput from "../components/CustomTextInput";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { Picker } from "@react-native-picker/picker";

const AddPostScreen2 = ({ navigation }) => {
  const [selectedPValue, setSelectedPValue] = useState(1);
  const [selectedCValue, setSelectedCValue] = useState(1);
  const [selectedDifficultyValue, setSelectedDifficultyValue] =
    useState("Facile");
  const [isPSelected, setIsPSelected] = useState(true);
  const [isCSelected, setIsCSelected] = useState(true);
  const [isDifficultySelected, setIsDifficultySelected] = useState(true);
  const handlePChange = (itemValue) => {
    setSelectedPValue(itemValue);
    setIsPSelected(true);
  };
  const handleCChange = (itemValue) => {
    setSelectedCValue(itemValue);
    setIsCSelected(true);
  };
  const handleDifficultyChange = (itemValue) => {
    setSelectedDifficultyValue(itemValue);
    setIsDifficultySelected(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Informations</Text>
      </View>
      <View style={styles.titleInputContainer}>
        <View style={styles.informationContainer}>
          <Text style={styles.informationText}>Temps de préparation</Text>
          <Pressable
            style={styles.informationItems}
            onPress={() => {
              setIsPSelected(false);
            }}
          >
            {isPSelected ? (
              <Text style={styles.timeText}>
                {selectedPValue == 1
                  ? `${selectedPValue} minute`
                  : `${selectedPValue} minutes`}
              </Text>
            ) : (
              <Picker
                selectedValue={selectedPValue}
                style={styles.picker}
                onValueChange={handlePChange}
              >
                {new Array(60).fill(0).map((_, index) => (
                  <Picker.Item
                    label={`${index + 1} minutes`}
                    value={index + 1}
                    key={index}
                  />
                ))}
              </Picker>
            )}
          </Pressable>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.informationText}>Temps de cuisine</Text>
          <Pressable
            style={styles.informationItems}
            onPress={() => {
              setIsCSelected(false);
            }}
          >
            {isCSelected ? (
              <Text style={styles.timeText}>
                {selectedCValue == 1
                  ? `${selectedCValue} minute`
                  : `${selectedCValue} minutes`}
              </Text>
            ) : (
              <Picker
                selectedValue={selectedCValue}
                style={styles.picker}
                onValueChange={handleCChange}
              >
                {new Array(60).fill(1).map((_, index) => (
                  <Picker.Item
                    label={`${index + 1} minutes`}
                    value={index + 1}
                    key={index}
                  />
                ))}
              </Picker>
            )}
          </Pressable>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.informationText}>Difficulté</Text>
          <Pressable
            style={styles.informationItems}
            onPress={() => {
              setIsDifficultySelected(false);
            }}
          >
            {isDifficultySelected ? (
              <Text style={styles.timeText}>{selectedDifficultyValue}</Text>
            ) : (
              <Picker
                selectedValue={selectedDifficultyValue}
                style={styles.picker}
                onValueChange={handleDifficultyChange}
              >
                <Picker.Item label="Facile" value="Facile" />
                <Picker.Item label="Moyen" value="Moyen" />
                <Picker.Item label="Difficile" value="Difficile" />
              </Picker>
            )}
          </Pressable>
        </View>
      </View>
      <View style={styles.titleSubmit}>
        <SubmitButton
          height={"32%"}
          width={"60%"}
          text={"Next"}
          onPress={() => navigation.navigate("AddPost3")}
        />
      </View>
    </View>
  );
};

export default AddPostScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  titleView: {
    flex: 0.2,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
  },
  titleInputContainer: {
    flex: 0.45,
    justifyContent: "space-between",
  },
  titleSubmit: {
    flex: 0.35,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  informationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.25,
    alignItems: "center",
  },
  informationItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "52%",
    height: "100%",
    backgroundColor: Colors.primaryOpacity,
    alignItems: "center",
    borderRadius: 12,
  },
  informationText: {
    fontSize: 16,
    textAlign: "center",
  },
  timeText: {
    fontSize: 18,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  picker: {
    width: "100%",
    color: Colors.primaryOpacity,
  },
});
