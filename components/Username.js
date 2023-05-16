import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import Colors from "../constants/Colors";

const Username = ({ userName, isVerified }) => {
  return (
    <View
      style={{
        textAlign: "center",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "60%",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.black }}>
        {userName}{" "}
      </Text>
      {isVerified && (
        <MaterialIcons name="verified" size={14} color="#1DA1F2" />
      )}
    </View>
  );
};

export default Username;
