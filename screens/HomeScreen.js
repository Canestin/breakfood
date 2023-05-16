import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import soup from "../assets/images/soup.png";
import fruitmer from "../assets/images/fruitmer.png";
import gateau from "../assets/images/gateau.png";
import sushi from "../assets/images/sushi.png";
import NUTRITIONISTDATA from "../data/FakeNutritionistData";
import { multiplePostData } from "../data/FakePostData";
import { useScrollToTop } from "@react-navigation/native";
import Post from "../components/Post";
import Category from "../components/Category";

const HomeScreen = ({ navigation }) => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={ref}
        style={styles.container}
      >
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              maxWidth: "80%",
            }}
          >
            Que vous voulez cuisiner aujourd'hui ?
          </Text>
        </View>

        <View style={{ height: 40, paddingHorizontal: 10 }}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Category image={soup} text="soup" />
            <Category image={fruitmer} text="fruit de mer" />
            <Category image={sushi} text="sushi" />
            <Category image={gateau} text="gateau" />
          </ScrollView>
        </View>

        <View
          style={{
            height: 170,
            marginTop: 30,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: "auto",
              marginBottom: 18,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Top Nutritionnistes
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Voir plus
            </Text>
          </View>
          <View style={styles.nutrionistsContainer}>
            {NUTRITIONISTDATA.map((nutrionist, i) => (
              <View key={i} style={styles.nutrionist}>
                <Image
                  source={nutrionist.image}
                  style={styles.nutrionistPhoto}
                />
                <View style={styles.nutrionistContent}>
                  <Text style={{ fontSize: 12, fontWeight: "700" }}>
                    {nutrionist.firstname}
                  </Text>
                  <Text style={{ fontSize: 10 }}>
                    {nutrionist.recipes} Recettes
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
            }}
          >
            Recettes populaires
          </Text>
        </View>

        <View style={styles.recipesContainer}>
          {multiplePostData.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  nutrionistsContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  nutrionist: {
    flex: 1 / 4,
    height: "100%",
    borderRadius: 12,
    padding: 2,
    paddingBottom: 5,
    backgroundColor: Colors.primaryOpacity,
  },
  nutrionistContent: {
    flex: 1,
    alignItems: "center",
    paddingTop: 3,
  },
  nutrionistPhoto: {
    width: "100%",
    height: "80%",
    borderRadius: 12,
  },
  recipesContainer: {
    gap: 20,
    backgroundColor: "#E9E9E9",
  },
});
