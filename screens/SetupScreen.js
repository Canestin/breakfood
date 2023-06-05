import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import arcs from "../assets/icons/arcs.png";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import { setAvatar, setUserName as sun } from "../redux/userSlice";

const { height } = Dimensions.get("screen");

const SetupScreen = ({ navigation }) => {
  const [imgProfile, setImgProfile] = useState(null);
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImgProfile(result.assets[0].uri);
    }
  };

  const handleConnexion = () => {
    if (!imgProfile) {
      alert("Veuillez choisir une photo de profil");
      return;
    }
    dispatch(setAvatar(imgProfile));
    dispatch(sun(userName));
    navigation.navigate("TabsNavigator");
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
          <Text style={{ fontSize: 34, maxWidth: "90%", fontWeight: "bold" }}>
            Configurons votre compte
          </Text>
        </View>

        <TouchableOpacity onPress={pickImage} style={styles.imgContainer}>
          {!imgProfile && (
            <Entypo name="upload-to-cloud" size={50} color="black" />
          )}
          {!imgProfile && <Text style={{ fontSize: 16 }}>photo de profil</Text>}
          {imgProfile && (
            <Image source={{ uri: imgProfile }} style={styles.imgProfile} />
          )}
        </TouchableOpacity>

        <View style={styles.inPutView}>
          <CustomTextInput
            value={userName}
            onChangeText={(v) => setUserName(v)}
            placeholder="Nom d'utilisateur"
            height={60}
          />
        </View>

        <Pressable style={styles.subMitView}>
          <SubmitButton
            onPress={handleConnexion}
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
    height: height * 0.3,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryOpacity,
    borderRadius: (height * 0.3) / 2,
    gap: 20,
    alignSelf: "center",
    overflow: "hidden",
  },
  inPutView: {
    flex: 0.3,
  },
  subMitView: {
    flex: 0.15,
  },
  imgProfile: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
