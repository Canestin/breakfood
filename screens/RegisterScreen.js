import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { React, useState } from "react";
import ReactNativePhoneInput from "react-native-phone-input";
import arcIcon from "../assets/icons/arcs.png";
import CustomTextInput from "../components/CustomTextInput";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";
import supabase from "../lib/supabase";
import { useDispatch } from "react-redux";
import { setFullName as sfn, setPhoneNumber as spn } from "../redux/userSlice";

const RegisterScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();

  const register = async () => {
    dispatch(sfn(fullName));
    dispatch(spn(phoneNumber));
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: phoneNumber,
    });

    if (error) {
      alert(error.message);
    }

    navigation.navigate("CodeVerif");
    // navigation.navigate("TabsNavigator");
  };

  const handleOnChangePhoneNumber = (phoneNumber) => {
    setPhoneNumber(phoneNumber.trim());

    console.log("phoneNumber", phoneNumber.trim());
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Image
          source={arcIcon}
          style={{
            position: "absolute",
            zIndex: 1,
            height: "35%",
            width: "65%",
          }}
        ></Image>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Register</Text>
            <Text style={styles.subtitle}>Inscrivez vous</Text>
          </View>
          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder="Full name"
              height="17%"
              width="100%"
              onChangeText={(t) => setFullName(t)}
              value={fullName}
            />
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
          </View>

          <View style={styles.submitContainer}>
            <Text style={{ textAlign: "center", paddingBottom: "2%" }}>
              By registering you agree to our Terms and Conditions
            </Text>
            <SubmitButton
              width="100%"
              height="55%"
              text="Register"
              color={Colors.primary}
              onPress={() => register()}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    // justifyContent: "space-between",
    gap: 15,
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
