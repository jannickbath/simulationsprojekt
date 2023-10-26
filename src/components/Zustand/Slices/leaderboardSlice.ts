import { LeaderboardSlice, State, StateCreatorFn } from '../Types';

const initialLeaderboard = { winner: null };

export const leaderboardSlice: StateCreatorFn<LeaderboardSlice> = (set) => ({
  leaderboard: initialLeaderboard,
  setWinner: (winner) => set((state: State) => {
    return { leaderboard: {...state.leaderboard, winner: winner}}
  }),
  resetLeaderboard: () => set(() => {
    return { leaderboard: initialLeaderboard };
  })
});
