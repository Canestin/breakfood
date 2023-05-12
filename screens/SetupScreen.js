import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import arcs from "../assets/icons/arcs.png";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const SetupScreen = ({ navigation }) => {
  const [imgProfile, setImgProfile] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImgProfile(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={arcs}
        style={{
          position: "absolute",
          zIndex: 1,
          height: "35%",
          width: "65%",
        }}
      />
      <View style={{ flex: 1, padding: 20, gap: 20 }}>
        <View style={styles.TitleView}>
          <Text style={{ fontSize: 34, maxWidth: "70%", fontWeight: "bold" }}>
            Configurons votre compte
          </Text>
        </View>

        <TouchableOpacity onPress={pickImage} style={styles.imgContainer}>
          {!imgProfile && (
            <Entypo name="upload-to-cloud" size={50} color="black" />
          )}
          {!imgProfile && (
            <Text style={{ fontSize: 16 }}>
              Téléversez votre photo de profil
            </Text>
          )}
          {imgProfile && (
            <Image source={{ uri: imgProfile }} style={styles.imgProfile} />
          )}
        </TouchableOpacity>

        <View style={styles.inPutView}>
          <CustomTextInput placeholder="Nom d'utilisateur" height={70} />
        </View>

        <Pressable style={styles.subMitView}>
          <SubmitButton
            onPress={() => navigation.navigate("TabsNavigator")}
            text="Connexion"
            height={60}
            width={"100%"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default SetupScreen;

const styles = StyleSheet.create({
  TitleView: {
    flex: 0.25,
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "7%",
  },
  imgContainer: {
    flex: 0.3,
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 20,
    gap: 20,
  },
  inPutView: {
    flex: 0.3,
  },
  subMitView: {
    flex: 0.15,
  },
  imgProfile: {
    height: "100%",
    // height: 150,
    width: "100%",
    resizeMode: "cover",
    // aspectRatio: 1,
    // width: "100%",
    borderRadius: 20,
    // borderRadius: 75,
  },
});
