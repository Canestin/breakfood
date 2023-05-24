import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Pressable,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { multiplePostData } from "../data/FakePostData";
import { Post } from "../components";
import Colors from "../constants/Colors";
import salt from "../assets/icons/salt.png";
import sugar from "../assets/icons/sugar.png";
import calories from "../assets/icons/calories.png";
import { ingredientsMap } from "../utils/ingredients";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const PostDetailScreen = () => {
  const [post, setPost] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const { postId } = route.params;

  useEffect(() => {
    const p = multiplePostData.find((p) => p.id === postId);
    setPost(p);
  }, [postId]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Post post={post} />
      <View style={styles.yuka}>
        <YukaItem i={calories} v={152} n="Calories" />
        <YukaItem i={salt} v={"Bas"} n="Sel" />
        <YukaItem i={sugar} v={"Bas"} n="Sucre" />
      </View>

      <View
        style={{
          margin: 10,
          marginBottom: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20 }}>Ingrédients</Text>

        <View
          style={{
            backgroundColor: Colors.primary,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
            }}
          >
            2 parts
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        {Array.from(ingredientsMap).map((ingredient, i) => (
          <View
            key={i}
            style={{
              backgroundColor: Colors.primaryOpacity,
              borderRadius: 10,
              width: (width - 20) / 4 - 4,
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "50%", height: 50 }}
              source={ingredient[1].icon}
            />
            <Text style={{ fontSize: 10 }}>{ingredient[1].name}</Text>
          </View>
        ))}
      </View>

      <Text
        style={{
          fontSize: 22,
          fontWeight: "600",
          marginHorizontal: 10,
          marginTop: 50,
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        Indications
      </Text>

      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <IndicationItem step={1} text="Casser les œufs" />
        <IndicationItem
          step={2}
          text="Mélanger la mayonnaise, le jus de citron, la moutarde, le sel et le poivre dans un bol moyen"
        />
      </View>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          marginHorizontal: 10,
          gap: 10,
          marginBottom: 30,
          backgroundColor: Colors.primary,
          paddingVertical: 20,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Suivre les étapes
        </Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View
          style={{
            height,
            width,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              position: "relative",
              width,
              height: height * 0.7,
              backgroundColor: Colors.primary,
              alignItems: "center",
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              paddingTop: 60,
            }}
          >
            <Pressable
              onPress={() => setModalVisible(false)}
              hitSlop={{ top: 300, left: 300 }}
              style={{
                position: "absolute",
                top: 15,
                right: 20,
                borderRadius: 30,
                padding: 3,
              }}
            >
              <AntDesign name="closecircleo" size={24} color="white" />
            </Pressable>
            <ScrollView
              style={{
                width: "100%",
                gap: 10,
                paddingHorizontal: 10,
              }}
            >
              <IndicationItem
                step={1}
                text="Coupez les blancs de poulet en dés, puis faites-les cuire, et ensuite refroidir, 5 min au frigo."
              />
              <IndicationItem
                step={2}
                text="Mixer les bouts de poulets, les champignons, la crème, et un peu de ciboulette."
              />
              <IndicationItem
                step={3}
                text="Le mélange doit ressembler à de la salade de poulet."
              />
              <IndicationItem
                step={4}
                text="Coupez la pâte feuilletée en 4, et disposez, sur chaque partie, un peu de mélange. Refermez comme un chausson, et recouvrez chaque chausson d'un peu de jaune d'oeuf, pour les faire dorer."
              />
              <IndicationItem
                step={5}
                text="Enfourner à 200°C (thermostat 6-7)."
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default PostDetailScreen;

const YukaItem = ({ i, v, n }) => {
  return (
    <View style={{ alignItems: "center", gap: 5 }}>
      <Image style={{ width: 20, height: 25 }} source={i} />
      <Text style={{ fontWeight: "700" }}>{v}</Text>
      <Text>{n}</Text>
    </View>
  );
};

const IndicationItem = ({ step, text }) => {
  return (
    <View
      style={{
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 15,
        backgroundColor: Colors.primaryOpacity,
        borderRadius: 10,
        flexDirection: "row",
        paddingVertical: 15,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>{step}</Text>
      <Text style={{ fontSize: 15, marginRight: 20 }}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yuka: {
    backgroundColor: Colors.primaryOpacity,
    marginVertical: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
