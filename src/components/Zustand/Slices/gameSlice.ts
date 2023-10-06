import { GameSlice, State, StateCreatorFn } from '../Types';

export const gameSlice: StateCreatorFn<GameSlice> = (set) => ({
  game: {
    started: false,
    scene: "default",
    playerLimit: 4,
    startSeconds: 0
  },
  start: () => set((state: State) => {
    return { game: { ...state.game, started: true, startSeconds: Math.floor(Date.now() / 1000)} }
  }),
  stop: () => set((state: State) => {
    return { game: { ...state.game, started: false , startSeconds: 0} }
  })
});