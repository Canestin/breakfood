import { View, Text, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

import userPhoto from "../assets/images/userphoto.jpeg";

function CustomHeader() {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          height: 90,
          backgroundColor: Colors.primaryOpacity,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginBottom: 15,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <Image
            source={userPhoto}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </Pressable>

        <Feather name="search" size={24} color="black" />
      </View>
    </>
  );
}

export default CustomHeader;
