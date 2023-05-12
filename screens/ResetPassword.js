import { View, Text, StyleSheet, Image } from "react-native";
import { React, useState } from "react";
import arcIcon from "../assets/icons/arcs.png";
import CustomTextInput from "../components/CustomTextInput";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";

const ResetPasswordScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={arcIcon}
        style={{ position: "absolute", zIndex: 1, height: "35%", width: "65%" }}
      ></Image>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Reset Password</Text>
          <Text style={styles.subtitle}>Type your account email : </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputContainerItems}>
            <CustomTextInput
              name="Nouveau mot de passe"
              height="45%"
              width="100%"
            />
            <CustomTextInput
              name="Confirmer mot de passe"
              height="45%"
              width="100%"
            />
          </View>
          <Text style={styles.inputContainerText}>
            You will receive a link if your email is associated with an account
          </Text>
        </View>

        <View style={styles.submitContainer}>
          <SubmitButton
            width="60%"
            height="28%"
            text="Next"
            color={Colors.primary}
          />
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

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
    flex: 0.3,
    display: "flex",
    alignItems: "center",
  },
  submitContainer: {
    flex: 0.3,
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
  inputContainerItems: {
    flex: 0.8,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  inputContainerText: {
    flex: 0.2,
    paddingTop: 10,
  },
});
