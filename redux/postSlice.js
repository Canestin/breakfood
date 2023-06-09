import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postTitle: null,
    imgPost: null,
    selectedPValue: 1,
    selectedCValue: 1,
    selectedDifficultyValue: "Facile",
    ingredients: [],
  },
  reducers: {
    setPostTitle: (state, action) => {
      state.title = action.payload;
    },
    setImgPost: (state, action) => {
      state.imgPost = action.payload;
    },
    setSelectedPostPValue: (state, action) => {
      state.selectedPValue = action.payload;
    },
    setSelectedPostCValue: (state, action) => {
      state.selectedCValue = action.payload;
    },
    setSelectedPostDifficultyValue: (state, action) => {
      state.selectedDifficultyValue = action.payload;
    },
    setPostIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
  },
});

export const {
  setPostTitle,
  setImgPost,
  setSelectedPostPValue,
  setSelectedPostCValue,
  setSelectedPostDifficultyValue,
  setPostIngredients,
} = postSlice.actions;

export default postSlice.reducer;
