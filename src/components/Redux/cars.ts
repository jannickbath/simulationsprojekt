import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: "cars",
    initialState: [
        {own: true}
    ],
    reducers: {
        addCar: (state) => {
            state.push({own: false});
        }
    }
});

export const { addCar } = carSlice.actions;

export default carSlice.reducer;