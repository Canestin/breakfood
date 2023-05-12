import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const SubmitButton = ({ text, height, width, color, sreenToNavigate }) => {
  const navigation = useNavigation();

  const submitButtonStyle = {
    ...styles.submitButton,
    height: height,
    width: width || "100%",
    backgroundColor: color || Colors.primary,
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(sreenToNavigate)}
      style={submitButtonStyle}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    height: "45%",
    width: "100%",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default SubmitButton;
