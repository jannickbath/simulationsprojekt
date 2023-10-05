import { Player, PlayerSlice, State, StateCreatorFn } from '../Types';

export const playerSlice: StateCreatorFn<PlayerSlice> = (set, get) => ({
  players: [
    { id: 1, human: true, speed: 10, carId: 1 }
  ],
  addPlayer: (carId) => {
    let player = {} as Player;
    set((state: State) => {
      if (carId === undefined) {
        carId = get().addCar().id;
      }
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
