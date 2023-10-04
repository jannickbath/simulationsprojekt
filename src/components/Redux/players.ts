import { createSlice } from "@reduxjs/toolkit";

const initialPlayers: Array<Player> = [
    {id: 1, human: true, speed: 80, carId: 1},
    {id: 2, human: false, speed: 80, carId: 1}
];

export const playerSlice = createSlice({
    name: "players",
    initialState: initialPlayers,
    reducers: {
        addPlayer: (state) => {
            state.push({id: state.length + 1, human: false, speed: 70, carId: null});
        },
        assignCar: (state, action: AssignCarAction) => {
            const {playerId, carId} = action.payload;
            const player = state.find(player => player.id == playerId);
            
            if (!player) return;

            if (!carId) {
                // Create car
            }else {
                player.carId = carId;
            }
        }
    }
});

export const { addPlayer } = playerSlice.actions;

export default playerSlice.reducer;