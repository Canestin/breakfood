import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SubmitButton = ({ height, width, color, text, onPress }) => {
  const navigation = useNavigation();
  const submitButtonStyle = {
    ...styles.submitButton,
    height: height,
    width: width,
    backgroundColor: color,
  };
  return (
    <TouchableOpacity onPress={onPress} style={submitButtonStyle}>
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
