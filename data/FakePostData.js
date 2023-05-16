const fakePostData = [
  {
    id: "P1",
    image: require("../assets/images/recipe1.png"),
    title: "Tarte aux fraises",
    time: 15,
    ingredients: 12,
    likes: 1207,
    comments: 103,
    user: {
      id: "N1",
      username: "antonio",
      image: require("../assets/images/nutritionist1.png"),
      certified: true,
    },
  },
  {
    id: "P2",
    image: require("../assets/images/recipe2.png"),
    title: "Oeufs aux fines herbes",
    time: 12,
    ingredients: 7,
    likes: 2154,
    comments: 210,
    user: {
      id: "N2",
      username: "santana",
      image: require("../assets/images/nutritionist2.png"),
      certified: true,
    },
  },
  {
    id: "P3",
    image: require("../assets/images/recipe3.png"),
    title: "Poulet au curry vert",
    time: 5,
    ingredients: 8,
    likes: 1511,
    comments: 152,
    user: {
      id: "N4",
      username: "jada",
      image: require("../assets/images/nutritionist3.png"),
      certified: false,
    },
  },
  {
    id: "P4",
    image: require("../assets/images/recipe4.png"),
    title: "Toast fruité aux bleuets",
    time: 20,
    ingredients: 18,
    likes: 6047,
    comments: 1303,
    user: {
      id: "N3",
      username: "john",
      image: require("../assets/images/nutritionist4.png"),
      certified: true,
    },
  },
];

const multiplePostData = fakePostData
  .concat(fakePostData)
  .concat(fakePostData)
  .map((item, i) => {
    return { ...item, id: item.id.replace(/P\d+/, "P" + i) };
  });

export { fakePostData, multiplePostData };
