const NUTRITIONISTDATA = [
  {
    id: "N1",
    username: "antonio",
    firstname: "Antonio",
    recipes: 89,
    image: require("../assets/images/nutritionist1.png"),
  },

  {
    id: "N2",
    username: "santana",
    firstname: "Santana",
    recipes: 57,
    image: require("../assets/images/nutritionist2.png"),
  },

  {
    id: "N3",
    username: "john",
    firstname: "John",
    recipes: 83,
    image: require("../assets/images/nutritionist3.png"),
  },

  {
    id: "N4",
    username: "jada",
    firstname: "Jada",
    recipes: 72,
    image: require("../assets/images/nutritionist4.png"),
  },
];

export const multipleNutritionistData = NUTRITIONISTDATA.concat(
  NUTRITIONISTDATA
)
  .concat(NUTRITIONISTDATA)
  .map((item, i) => {
    return { ...item, id: item.id.replace(/N\d+/, "N" + i) };
  });

export default NUTRITIONISTDATA;
