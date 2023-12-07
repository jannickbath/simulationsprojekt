import { Player, PlayerSlice, State, StateCreatorFn } from '../Types';

const initialPlayerState = [
  { id: 1, human: true, speed: 0, carId: 1, name: "You"}
];

export const playerSlice: StateCreatorFn<PlayerSlice> = (set, get) => ({
  players: initialPlayerState,
  addPlayer: (carId) => {
    let player = {} as Player;
    set((state: State) => {
      if (carId === undefined) {
        carId = get().addCar().id;
      }
      const id = state.players.length + 1;
      player = {
        id: id,
        human: false,
        speed: 0,
        carId: carId,
        name: "Bot " + id
      };
      return { players: [ ...state.players, player ] };
    });
    return player;
  },
  clearPlayers: () => {
    set(() => {
      return { players: initialPlayerState };
    });
  },
  getHumanPlayer: () => get().players.find(player => player.human),
  updateField: (playerId, field, value) => set((state: State) => {
    const player = state.players.find(player => player.id === playerId);
    if (player) {
      const modifiedPlayer = {...player, [field]: value};
      return {players: replaceObjectInArray(state.players, modifiedPlayer, "id")};
    }
    throw new Error("Player with the id of " + playerId + " could not be found.");
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