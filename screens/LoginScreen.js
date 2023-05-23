import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomTextInput from "../components/CustomTextInput";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import google from "../assets/icons/google.png";
import arcIcon from "../assets/icons/arcs.png";
import { Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={arcIcon}
        style={{ position: "absolute", zIndex: 1, height: "35%", width: "65%" }}
      />
      <View style={styles.loginContainer}>
        <View style={styles.loginView}>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.subtitle}>Connectez, vous</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputItems}>
            <CustomTextInput placeholder="Email" height={60} width="100%" />
            <CustomTextInput
              placeholder="Password"
              type="password"
              height={60}
              width="100%"
            />
          </View>
          <View style={styles.subtitleView}>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.subtitleAccount}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.subtitle}>forgot password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <View style={styles.sumbmitButton}>
            <SubmitButton
              width="100%"
              height="85%"
              text="Login"
              color={Colors.primary}
            />
          </View>
          <View style={styles.connectButtons}>
            <TouchableOpacity style={styles.connectButtonItems}>
              <Image source={google} style={{ height: 30, width: 30 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.connectButtonItems}>
              <AntDesign name="apple1" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    padding: 25,
    flex: 1,
  },
  loginView: {
    flex: 0.25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: "7%",
  },
  loginTitle: {
    fontWeight: "bold",
    fontSize: 35,
  },

  subtitle: {
    fontSize: 15,
  },
  subtitleAccount: {
    fontSize: 15,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 0.4,
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  inputItems: {
    flex: 0.6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  subtitleView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.2,
  },
  submitContainer: {
    width: "100%",
    display: "flex",
    flex: 0.3,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    flexDirection: "column",
  },
  sumbmitButton: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: "2%",
    flex: 0.4,
  },
  connectButtons: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    flex: 0.4,
  },
  connectButtonItems: {
    height: "70%",
    width: "49%",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryOpacity,
  },
});
