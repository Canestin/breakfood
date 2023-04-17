import { configureStore } from "@reduxjs/toolkit";
import avatarReducer from "./avatarSlice";

const store = configureStore({
	reducer: {
		avatar: avatarReducer,
	},
});

export default store;
