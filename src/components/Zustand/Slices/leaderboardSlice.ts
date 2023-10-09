import { LeaderboardSlice, State, StateCreatorFn } from '../Types';

export const leaderboardSlice: StateCreatorFn<LeaderboardSlice> = (set) => ({
  leaderboard: {
    winner: null
  },
  setWinner: (winner) => set((state: State) => {
    return { leaderboard: {...state.leaderboard, winner: winner}}
  })
});
