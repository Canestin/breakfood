import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { DATA } from "../data/ProductTourData";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const Indicator = ({ scrollX }) => {
  const interWidth = scrollX.interpolate({
    inputRange: [0, width, 2 * width, 3 * width],
    outputRange: [30, 60, 90, 120],
    extrapolate: "clamp",
  });

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        position: "absolute",
        bottom: 40,
        flexDirection: "row",
        alignSelf: "center",
        width: 120,
        height: 10,
        borderRadius: 10,
      }}
    >
      <Animated.View
        style={{
          width: interWidth,
          backgroundColor: Colors.primary,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const ProductTourScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              height: item.key === "ProductTour4" ? height * 0.6 : height,
            }}
          >
            <ImageBackground source={item.image} style={styles.img}>
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.9)"]}
                start={{ x: 0, y: 0.2 }}
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  paddingBottom: item.key === "ProductTour4" ? "10%" : "50%",
                }}
              >
                <View style={[styles.text, {}]}>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 42,
                      color: "#fff",
                      maxWidth: "70%",
                      marginBottom: 40,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 18,
                      color: "#fff",
                      maxWidth: "90%",
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
              </LinearGradient>
            </ImageBackground>

            <View style={styles.actionContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Setup")}
                style={styles.action1}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 17,
                    fontWeight: "600",
                  }}
                >
                  S'inscrire avec l'email
                </Text>
              </TouchableOpacity>
              <View style={styles.action2}>
                <View style={styles.action2Item}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/icons/google.png")}
                  />
                </View>
                <View style={styles.action2Item}>
                  <AntDesign name="apple1" size={27} color="black" />
                </View>
              </View>
              <View style={styles.login}>
                <Text>Déjà un compte ? </Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                  <Text style={{ fontWeight: "bold" }}>Se connecter </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
};

export default ProductTourScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    boxSizing: "border-box",
  },
  text: {
    padding: 20,
  },
  img: {
    width,
    height: "100%",
    position: "relative",
  },
  actionContainer: {
    height: height * 0.4,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: -20,
  },
  action1: {
    backgroundColor: Colors.primary,
    width: "80%",
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    gap: 15,
  },
  action2: {
    flexDirection: "row",
    width: "80%",
    height: 62,
    gap: 12,
  },
  action2Item: {
    flex: 1,
    backgroundColor: Colors.primaryOpacity,
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 27,
    height: 27,
  },
  registerButton: {},
  login: { flexDirection: "row", marginTop: 10 },
});
