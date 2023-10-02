import { configureStore } from '@reduxjs/toolkit';
import carReducer from "./cars";

export default configureStore({
	reducer: {
		cars: carReducer
	},
});