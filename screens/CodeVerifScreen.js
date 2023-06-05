import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useRef, useState, forwardRef } from "react";
import { useEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "../constants/Colors";
import supabase from "../lib/supabase";

const { width, height } = Dimensions.get("screen");

const CodeVerifScreen = ({ navigation }) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [number5, setNumber5] = useState("");
  const [number6, setNumber6] = useState("");
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const [caretHidden, setCaretHidden] = useState(false);
  const [trueHeaderHeight, setTrueHeaderHeight] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(true);
  const headerHeight = useHeaderHeight();

  const inputRefs = [
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
    inputRef5,
    inputRef6,
  ];
  const numbers = [number1, number2, number3, number4, number5, number6];

  const verifyOTP = async (code) => {
    let { data, error } = await supabase.auth.verifyOtp({
      phone: "+33777348932",
      token: code,
      type: "sms",
    });

    if (error) {
      alert(error.message);
      console.log("Error", JSON.stringify(error));
    }

    console.log("Data", JSON.stringify(data));

    navigation.navigate("Setup");
  };

  const handleTextInput1 = (number) => {
    const numberStr = number.toString();
    console.log("handleTextInput1");
    console.log("Number", number);
    console.log("numberStr", numberStr);
    if (numberStr.length === 6) {
      setNumber1(numberStr[0]);
      setNumber2(numberStr[1]);
      setNumber3(numberStr[2]);
      setNumber4(numberStr[3]);
      setNumber5(numberStr[4]);
      setNumber6(numberStr[5]);
    }
    if (numberStr.length === 1) {
      setNumber1(numberStr[0]);
    }
  };

  useEffect(() => {
    let isHidden = false;
    for (let i = 0; i < numbers.length; i++) {
      if (!numbers[i]) {
        inputRefs[i].current.focus();
        break;
      }
      if (
        !!number1 &&
        !!number2 &&
        !!number3 &&
        !!number4 &&
        !!number5 &&
        !!number6
      ) {
        setCaretHidden(true);
      } else {
        setCaretHidden(false);
      }
    }
  }, [numbers]);

  useEffect(() => {
    setTrueHeaderHeight(headerHeight);
  }, []);

  return (
    <KeyboardAvoidingView
      enabled={true}
      style={{
        flex: 1,
        alignItems: "center",
      }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingTop: 30,
        }}
      >
        <View style={{ width: width * 0.9, alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: width * 0.7,
              borderRadius: 15,
              marginBottom: 5,
            }}
          >
            <View style={[styles.inputContainer]}>
              <TextInput
                caretHidden={caretHidden}
                ref={inputRef1}
                value={number1}
                onChangeText={handleTextInput1}
                style={[styles.input]}
                keyboardType="number-pad"
              />
            </View>

            <CustomTextInput
              caretHidden={caretHidden}
              inputRef={inputRef2}
              inputRefPrev={inputRef1}
              value={number2}
              setNumber={setNumber2}
              setNumberPrev={setNumber1}
              setCaretHidden={setCaretHidden}
            />
            <CustomTextInput
              caretHidden={caretHidden}
              inputRef={inputRef3}
              inputRefPrev={inputRef2}
              value={number3}
              setNumber={setNumber3}
              setNumberPrev={setNumber2}
              setCaretHidden={setCaretHidden}
            />
            <CustomTextInput
              caretHidden={caretHidden}
              inputRef={inputRef4}
              inputRefPrev={inputRef3}
              value={number4}
              setNumber={setNumber4}
              setNumberPrev={setNumber3}
              setCaretHidden={setCaretHidden}
            />
            <CustomTextInput
              caretHidden={caretHidden}
              inputRef={inputRef5}
              inputRefPrev={inputRef4}
              value={number5}
              setNumber={setNumber5}
              setNumberPrev={setNumber4}
              setCaretHidden={setCaretHidden}
            />
            <CustomTextInput
              caretHidden={caretHidden}
              inputRef={inputRef6}
              inputRefPrev={inputRef5}
              value={number6}
              setNumber={setNumber6}
              setNumberPrev={setNumber5}
              setCaretHidden={setCaretHidden}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              width: width * 0.9,
              paddingHorizontal: 30,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "500",
              color: Colors.black,
            }}
          >
            Saisissez le code à 6 chiffres que vous avez reçu via SMS.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            const code = `${number1}${number2}${number3}${number4}${number5}${number6}`;
            verifyOTP(code);
          }}
          style={{
            width: width * 0.9,
            backgroundColor: Colors.primary,
            padding: 10,
            borderRadius: 20,
            marginBottom:
              Platform.OS === "android" ? 20 : 20 + trueHeaderHeight,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 25, color: "white" }}>
            Valider
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CodeVerifScreen;

const CustomTextInput = ({
  caretHidden,
  inputRef,
  inputRefPrev,
  value,
  setNumber,
  setNumberPrev,
  setCaretHidden,
}) => {
  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        caretHidden={caretHidden}
        ref={inputRef}
        value={value}
        onChangeText={(number) => setNumber(number)}
        style={[styles.input]}
        keyboardType="number-pad"
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace") {
            setCaretHidden(false);
            if (!value) {
              setNumberPrev("");
              inputRefPrev.current.focus();
            }
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#F2F3F3",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10,
    borderWidth: 0.7,
    borderColor: "gray",
    borderRadius: 7,
    margin: 2,
  },
  input: {
    fontSize: 35,
    fontWeight: "500",
    flex: 1,
  },
});
