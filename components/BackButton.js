import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

function BackButton() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
      <View style={styles.back}>
        <Ionicons name="chevron-back" size={24} color={Colors.text} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  back: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: Colors.darkGreen,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    color: Colors.text,
    fontSize: 15,
  },
});

export default BackButton;
