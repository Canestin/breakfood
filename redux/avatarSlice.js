import { createSlice } from "@reduxjs/toolkit";
import { tintColorLightOpacity } from "../constants/Colors";

const initialState = {
	avatar: require("../assets/images/userphoto1.jpeg"),
	color: tintColorLightOpacity,
};

const avatarSlice = createSlice({
	name: "avatar",
	initialState,
	reducers: {
		avatar: (state, action) => {
			return {
				avatar: action.payload.avatar,
				color: action.payload.color,
			};
		},
	},
});

export default avatarSlice.reducer;
export const { avatar } = avatarSlice.actions;
