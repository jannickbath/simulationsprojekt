// Types
import { create } from "zustand";
import { Slices } from "./Types";

// Slices
import { playerSlice } from "./Slices/playerSlice";
import { carSlice } from "./Slices/carSlice";
import { gameSlice } from "./Slices/gameSlice";
import { textSlice } from "./Slices/textSlice";
import { leaderboardSlice } from "./Slices/leaderboardSlice";
import { uiSlice } from "./Slices/uiSlice";
import { itemSlice } from "./Slices/itemSlice";

export const useBoundStore = create<Slices>((set ,get, api) => ({
  ...playerSlice(set, get, api),
  ...carSlice(set, get, api),
  ...gameSlice(set, get, api),
  ...textSlice(set, get, api),
  ...leaderboardSlice(set, get, api),
  ...uiSlice(set, get, api),
  ...itemSlice(set, get, api)
}))