// Types
import { create } from "zustand";
import { Slices } from "./Types";

// Slices
import { playerSlice } from "./Slices/playerSlice";
import { carSlice } from "./Slices/carSlice";
import { gameSlice } from "./Slices/gameSlice";
import { textSlice } from "./Slices/textSlice";

export const useBoundStore = create<Slices>((set ,get, api) => ({
  ...playerSlice(set, get, api),
  ...carSlice(set, get, api),
  ...gameSlice(set, get, api),
  ...textSlice(set, get, api)
}))