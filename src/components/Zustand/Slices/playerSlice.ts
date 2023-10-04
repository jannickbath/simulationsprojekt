import { PlayerSlice, State, StateCreatorFn } from '../Types';

export const playerSlice: StateCreatorFn<PlayerSlice> = (set) => ({
  players: [
    { id: 1, human: true, speed: 10, carId: 1 },
    { id: 2, human: false, speed: 25, carId: 2 },
  ],
  addPlayer: (name, lastname) =>
    set((state: State) => ({
      players: [
        ...state.players,
        {
          id: state.players.length + 1,
          human: false,
          speed: 10,
          carId: 3,
          name: name + ' ' + lastname,
        },
      ],
    })),
});
