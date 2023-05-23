import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import CustomTextInput from "../components/CustomTextInput";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";

const AddPostScreen1 = () => {
  const [imgProfile, setImgProfile] = useState(null);

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
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Titre</Text>
      </View>
      <View style={styles.titleInputContainer}>
        <CustomTextInput height={"20%"} placeholder={"Titre"} />
        <TouchableOpacity onPress={pickImage} style={styles.imgContainer}>
          {!imgProfile && (
            <Entypo name="upload-to-cloud" size={50} color="black" />
          )}
          {!imgProfile && (
            <Text style={{ fontSize: 16 }}>
              Téléversez une photo pour votre post
            </Text>
          )}
          {imgProfile && (
            <Image source={{ uri: imgProfile }} style={styles.imgProfile} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.titleSubmit}>
        <SubmitButton height={"35%"} width={"60%"} text={"Next"} />
      </View>
    </View>
  );
};

export default AddPostScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  titleView: {
    flex: 0.15,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
  },
  titleInputContainer: {
    flex: 0.55,
    justifyContent: "space-between",
  },
  titleSubmit: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imgContainer: {
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 20,
    gap: 20,
  },
  imgProfile: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
