import { Player, PlayerSlice, State, StateCreatorFn } from '../Types';

export const playerSlice: StateCreatorFn<PlayerSlice> = (set, get) => ({
  players: [
    { id: 1, human: true, speed: 10, carId: 1 },
    { id: 2, human: false, speed: 25, carId: 2 },
  ],
  addPlayer: (carId) => {
    let player = {} as Player;
    if (carId === undefined) {
      carId = get().addCar().id;
    }
    set((state: State) => {
      player = {
        id: state.players.length + 1,
        human: false,
        speed: 10,
        carId: carId,
      };
      return { players: [ ...state.players, player ] };
    });
    return player;
  },
});
