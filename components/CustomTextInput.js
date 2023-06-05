import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomTextInput = ({
  height,
  width,
  type,
  placeholder,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [protectPassword, setprotectPassword] = useState(true);
  const [eye, setEye] = useState("eye");

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleFocusPass = () => {
    setIsFocusedPass(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleBlurPass = () => {
    setIsFocusedPass(false);
  };
  const handlePressEye = () => {
    setprotectPassword(!protectPassword);
    protectPassword ? setEye("eye-off") : setEye("eye");
  };
  const inputStyle = {
    ...styles.inputStyle,
    borderWidth: isFocused ? 1 : 0,
    height: height,
    width: width || "100%",
  };
  const inputPass = {
    ...styles.inputPass,
    borderWidth: isFocusedPass ? 1 : 0,
    height: height,
  };
  if (type === "password") {
    return (
      <View style={inputPass}>
        <TextInput
          style={styles.inputStylePass}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          onFocus={handleFocusPass}
          onBlur={handleBlurPass}
          secureTextEntry={protectPassword}
        ></TextInput>
        <TouchableOpacity style={styles.eyeStyle} onPress={handlePressEye}>
          <Feather name={eye} size={20} color="black" />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  }
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 12,
    paddingLeft: 20,
    color: "black",
    borderColor: "gray",
    fontSize: 20,
  },
  inputStylePass: {
    height: "95%",
    width: "85%",
    backgroundColor: Colors.primaryOpacity,
    color: "black",
    paddingLeft: 20,
    borderRadius: 12,
    fontSize: 20,
  },
  inputPass: {
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 12,
    color: "black",
    borderColor: "gray",
    display: "flex",
    flexDirection: "row",
  },
  eyeStyle: {
    width: "15%",
    borderWidth: 0,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
});

export default CustomTextInput;
