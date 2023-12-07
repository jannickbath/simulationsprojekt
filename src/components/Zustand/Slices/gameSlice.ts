import { GameSlice, State, StateCreatorFn } from '../Types';

export const gameSlice: StateCreatorFn<GameSlice> = (set) => ({
  game: {
    running: false,
    scene: "default",
    playerLimit: 4,
    startSeconds: 0
  },
  start: () => set((state: State) => {
    return { game: { ...state.game, running: true, startSeconds: Math.floor(Date.now() / 1000)} }
  }),
  stop: () => set((state: State) => {
    return { game: { ...state.game, running: false , startSeconds: 0} }
  })
});