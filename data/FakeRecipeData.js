const fakeRecipeData = [
  {
    id: "P1",
    image: require("../assets/images/recipe1.png"),
    title: "Tarte aux fraises",
    time: 15,
    ingredients: 12,
    likes: 1207,
    comments: 103,
  },
  {
    id: "P2",
    image: require("../assets/images/recipe2.png"),
    title: "Oeufs aux fines herbes",
    time: 12,
    ingredients: 7,
    likes: 2154,
    comments: 210,
  },
  {
    id: "P3",
    image: require("../assets/images/recipe3.png"),
    title: "Poulet au curry vert",
    time: 5,
    ingredients: 8,
    likes: 1511,
    comments: 152,
  },
  {
    id: "P4",
    image: require("../assets/images/recipe4.png"),
    title: "Toast fruité aux bleuets",
    time: 20,
    ingredients: 18,
    likes: 6047,
    comments: 1303,
  },
];

const multipleRecipeData = fakeRecipeData
  .concat(fakeRecipeData)
  .concat(fakeRecipeData)
  .map((item, i) => {
    return { ...item, id: item.id.replace(/P\d+/, "P" + i) };
  });

export { fakeRecipeData, multipleRecipeData };
