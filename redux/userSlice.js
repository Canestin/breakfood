import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: null,
  fullname: null,
  username: null,
  phoneNumber: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullname = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.username;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setFullName, setPhoneNumber, setAvatar, setUserName } =
  userSlice.actions;
