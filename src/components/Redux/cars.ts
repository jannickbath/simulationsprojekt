import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: "cars",
    initialState: [
        {id: 1, progress: "0"}
    ],
    reducers: {
        addCar: (state) => {
            state.push({id: state.length + 1, progress: "10"});
        },
        updateProgress: (state, action) => {
            const myCar = action.payload.id;
            
            if (myCar) {
                myCar.progress = `${action.payload.progress}`;
            }
        }
    }
});

export const { addCar, updateProgress } = carSlice.actions;

export default carSlice.reducer;