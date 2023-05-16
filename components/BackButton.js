import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

function BackButton() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
      <Ionicons name="chevron-back" size={24} color={Colors.black} />
    </Pressable>
  );
}

export default BackButton;
