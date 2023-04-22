import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const GTextInput = (props) => {
  const [item, setItem] = useState("");
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
    protectPassword ? setprotectPassword(false) : setprotectPassword(true);
    protectPassword ? setEye("eye-off") : setEye("eye");
  };
  const inputStyle = {
    ...styles.inputStyle,
    borderWidth: isFocused ? 1 : 0,
    height: props.height,
    width: props.width,
  };
  const inputPass = {
    ...styles.inputPass,
    borderWidth: isFocusedPass ? 1 : 0,
    height: props.height,
  };
  if (props.type == "password") {
    return (
      <View style={inputPass}>
        <TextInput
          style={styles.inputStylePass}
          placeholder={props.name}
          onChangeText={setItem}
          value={item}
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
        placeholder={props.name}
        onChangeText={setItem}
        value={item}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={props.secureTextEntry}
      ></TextInput>
    );
  }
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: Colors.lightGreen,
    borderRadius: 12,
    paddingLeft: 20,
    color: "black",
    borderColor: "gray",
  },
  inputStylePass: {
    height: "95%",
    width: "85%",
    backgroundColor: Colors.lightGreen,
    color: "black",
    paddingLeft: 20,
    borderRadius: 12,
  },
  inputPass: {
    backgroundColor: Colors.lightGreen,
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

export default GTextInput;
