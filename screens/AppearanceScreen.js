import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import { LineSettings } from "../components";
import Colors, { tintColorLight } from "../constants/Colors";
import LineAction from "../components/LineAction";
import ActionAppearance from "../components/ActionAppearance";
import { useDispatch, useSelector } from "react-redux";
import useColor from "../hooks/useColor";

const { width, height } = Dimensions.get("screen");

const ManageAppearance = [
  {
    text: "Clair",
    mode: "light",
    color: "back",
  },
  {
    text: "Sombre",
    mode: "dark",
    color: "black",
  },
  {
    text: "Automatique",
    mode: "auto",
    color: "black",
  },
];

const AppearanceScreen = () => {
  const Colors = useColor();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width, height: 25, backgroundColor: Colors.spaceColor }} />
      <ActionAppearance data={ManageAppearance[0]} />
      <ActionAppearance data={ManageAppearance[1]} />
      <ActionAppearance data={ManageAppearance[2]} />
    </View>
  );
};

export default AppearanceScreen;

const styles = StyleSheet.create({});
