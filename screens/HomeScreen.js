import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import soup from "../assets/images/soup.png";
import fruitmer from "../assets/images/fruitmer.png";
import gateau from "../assets/images/gateau.png";
import sushi from "../assets/images/sushi.png";
import NUTRITIONISTDATA from "../data/NutritionistData";
import { useScrollToTop } from "@react-navigation/native";
import Post from "../components/Post";

const HomeScreen = ({ navigation }) => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <>
      <StatusBar style="dark" />
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
            <View style={styles.category}>
              <Image source={soup} style={styles.imgCategory} />
              <Text style={styles.textCategory}>soup</Text>
            </View>
            <View style={styles.category}>
              <Image source={fruitmer} style={styles.imgCategory} />
              <Text style={styles.textCategory}>fruit de mer</Text>
            </View>
            <View style={styles.category}>
              <Image source={sushi} style={styles.imgCategory} />

              <Text style={styles.textCategory}>sushi</Text>
            </View>
            <View style={styles.category}>
              <Image source={gateau} style={styles.imgCategory} />
              <Text style={styles.textCategory}>gateau</Text>
            </View>
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
          {NUTRITIONISTDATA.concat(NUTRITIONISTDATA).map((nutrionist, i) => (
            <Post key={i} post_id={i} nutrionist={nutrionist} />
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
    // padding: 20,
    paddingBottom: 0,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: Colors.primaryOpacity,
    marginHorizontal: 10,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  imgCategory: {
    width: 30,
    height: 30,
  },
  textCategory: {
    fontWeight: "600",
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
