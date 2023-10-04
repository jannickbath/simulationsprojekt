import { configureStore } from '@reduxjs/toolkit';
import carReducer from "./cars";
import playerReducer from "./players";

const store = configureStore({
	reducer: {
		cars: carReducer,
		players: playerReducer
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;