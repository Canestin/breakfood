import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import profilePic from "../assets/images/nutritionist1.png";
import userPic from "../assets/images/userpic1.jpeg";
import banner from "../assets/images/banner.png";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import NumberText from "../components/NumberText";
import FollowerItem from "../components/FollowerItem";
import { Octicons } from "@expo/vector-icons";
import Category from "../components/Category";
const FollowerScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View style={styles.followView}>
        <Text style={styles.followTitle}>Abonnés</Text>
        <View>
          <Category
            text={`${"1.45M "} abonnés`}
            color={Colors.primaryOpacity}
            icon={<Octicons name="dot-fill" size={24} color={Colors.primary} />}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        {[...Array(20)].map((_, index) => (
          <FollowerItem
            key={index.toString()}
            userName="Pierro236"
            userLocation="Paris, France"
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FollowerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    padding: 15,
  },
  followView: {
    width: "60%",
    padding: 20,
    paddingVertical: 10,
    flex: 0.2,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  followTitle: {
    fontWeight: "bold",
    fontSize: 35,
  },
});
