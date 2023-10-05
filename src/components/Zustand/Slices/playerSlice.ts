import { Player, PlayerSlice, State, StateCreatorFn } from '../Types';

export const playerSlice: StateCreatorFn<PlayerSlice> = (set, get) => ({
  players: [
    { id: 1, human: true, speed: 0, carId: 1 }
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
        speed: 0,
        carId: carId,
      };
      return { players: [ ...state.players, player ] };
    });
    return player;
  },
  getHumanPlayer: () => get().players.find(player => player.human),
  updateSpeed: (id, newSpeed) => set((state: State) => {
    const player = state.players.find(player => player.id === id);
    if (player) {
      const updatedPlayer = { ...player, speed: newSpeed };
      return  { players: replaceObjectInArray(state.players, updatedPlayer, "id") };
    }
    throw new Error("Player with the id of " + id + " could not be found.");
  })
});

function replaceObjectInArray<T, I extends keyof T>(objectArray: Array<T>, object: T, identifier: I): Array<T> {
  return objectArray.map(iteratedObject => {
    if (iteratedObject[identifier] === object[identifier]) {
      return object;
    }
    return iteratedObject;
  });
}