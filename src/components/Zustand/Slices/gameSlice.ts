import { GameSlice, State, StateCreatorFn } from '../Types';

export const gameSlice: StateCreatorFn<GameSlice> = (set, get) => ({
  game: {
    started: false,
    scene: "default",
    playerLimit: 4
  },
  start: () => set((state: State) => {
    return { game: { ...state.game, started: true } }
  }),
  stop: () => set((state: State) => {
    return { game: { ...state.game, started: false } }
  }),
  getStatus: () => get().game.started,
});
