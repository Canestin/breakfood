import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const SubmitButton = (props) => {
  const submitButtonStyle = {
    ...styles.submitButton,
    height: props.height,
    width: props.width,
    backgroundColor: props.color,
  };
  return (
    <TouchableOpacity style={submitButtonStyle}>
      <Text style={styles.buttonText}>{props.text}</Text>
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
