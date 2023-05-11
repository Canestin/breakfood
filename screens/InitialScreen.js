import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import logo from "../assets/logos/logo-blanc-transparent.png";
import { StatusBar } from "expo-status-bar";

const InitialScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar style={"light"} />
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/first.png")}
          style={styles.content}
        >
          <Image
            source={logo}
            style={{
              position: "absolute",
              top: "37%",
              width: 250,
              height: 125,
            }}
          />

          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: "15%",
              width: "50%",
              backgroundColor: Colors.white,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("ProductTour")}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Commençons
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },

  content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 100,
  },
});
