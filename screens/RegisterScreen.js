import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { React, useState } from "react";
import ReactNativePhoneInput from "react-native-phone-input";
import arcIcon from "../assets/icons/arcs.png";
import CustomTextInput from "../components/CustomTextInput";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";

const RegisterScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChangePhoneNumber = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={arcIcon}
        style={{ position: "absolute", zIndex: 1, height: "35%", width: "65%" }}
      ></Image>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Register</Text>
          <Text style={styles.subtitle}>Inscrivez vous</Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput placeholder="Full Name" height="17%" width="100%" />
          <CustomTextInput placeholder="Email" height="17%" width="100%" />
          <ReactNativePhoneInput
            value={phoneNumber}
            onChangePhoneNumber={handleOnChangePhoneNumber}
            initialCountry="fr"
            textStyle={{ fontSize: 18 }}
            flagStyle={{
              width: 28,
              height: 20,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
            textProps={{ placeholder: "Numéro de téléphone" }}
            autoFormat={true}
            style={styles.phoneInput}
          />
          <CustomTextInput
            type="password"
            width="100%"
            height="18%"
            placeholder={"Password"}
          />
          <CustomTextInput
            type="password"
            width="100%"
            height="18%"
            placeholder={"Confirm Password"}
          />
        </View>

        <View style={styles.submitContainer}>
          <Text style={{ textAlign: "center", paddingBottom: "2%" }}>
            By registering you agree to our Tems and Conditions
          </Text>
          <SubmitButton
            width="100%"
            height="55%"
            text="Register"
            color={Colors.primary}
            onPress={() => navigation.navigate("Setup")}
          />
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  title: {
    flex: 0.25,
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
  },
  inputContainer: {
    flex: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  submitContainer: {
    flex: 0.15,
    display: "flex",
    flexDirection: "column",
    paddingTop: "7%",
  },
  phoneInput: {
    color: "black",
    backgroundColor: Colors.primaryOpacity,
    height: "18%",
    borderRadius: 12,
    paddingLeft: 20,
  },
});
