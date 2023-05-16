import { View, Text, StyleSheet, Image } from "react-native";
import { React, useState } from "react";
import arcIcon from "../assets/icons/arcs.png";
import CustomTextInput from "../components/CustomTextInput";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={arcIcon}
        style={{ position: "absolute", zIndex: 1, height: "35%", width: "65%" }}
      ></Image>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Forgot Password</Text>
          <Text style={styles.subtitle}>Type your account email </Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput placeholder="Email" height="45%" width="100%" />
          <Text style={{ paddingTop: 10 }}>
            If an account match with your email you will receive a link
          </Text>
        </View>

        <View style={styles.submitContainer}>
          <SubmitButton
            width="60%"
            height="20%"
            text="Next"
            color={Colors.primary}
            onPress={() => navigation.navigate("ResetPassword")}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  title: {
    flex: 0.4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    boxSizing: "border-box",
    paddingBottom: "7%",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 35,
  },
  subtitle: {
    fontSize: 15,
    paddingTop: "5%",
  },
  inputContainer: {
    flex: 0.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitContainer: {
    flex: 0.4,
    display: "flex",
    flexDirection: "column-reverse",
    paddingBottom: "10%",
    alignItems: "flex-end",
  },
  phoneInput: {
    color: "black",
    backgroundColor: Colors.primaryOpacity,
    height: "18%",
    borderRadius: 12,
    paddingLeft: 10,
  },
});
