import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: "cars",
    initialState: [
        {own: true, progress: "0"}
    ],
    reducers: {
        addCar: (state) => {
            state.push({own: false, progress: "10"});
        },
        updateProgress: (state, action) => {
            const myCar = state.find(car => car.own);
            if (myCar) {
                myCar.progress = `${action.payload}`;
            }
        }
    }
});

export const { addCar, updateProgress } = carSlice.actions;

export default carSlice.reducer;