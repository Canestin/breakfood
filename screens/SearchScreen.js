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
import { DATA } from "../data/ProductTourData";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        bounces={false}
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              height: "100%",
            }}
          >
            {/* <ImageBackground source={item.image} style={styles.img}>
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.9)"]}
                start={{ x: 0, y: 0.2 }}
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  paddingBottom: 100,
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
            </ImageBackground> */}
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    boxSizing: "border-box",
  },
});
