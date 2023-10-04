import { StateCreator, create } from "zustand";

type Player = {
  id: number,
  human: boolean,
  speed: number,
  carId: number,
  name?: string
}

type Car = {
  id: number,
  progress: `${number}`
}

type State = {
  players: Array<Player>,
  cars: Array<Car>
}

type Slices = PlayerSlice & CarSlice;

type PlayerSlice = {
  players: Array<Player>,
  addPlayer: (name: string, lastname: string) => void
}

type CarSlice = {
  cars: Array<Car>,
  addCar: () => void,
  getTotalAmount: () => number
}

type StateCreatorFn<T> = StateCreator<Slices, [], [], T>;

export const playerSlice: StateCreatorFn<PlayerSlice> = (set) => ({
  players: [
    {id: 1, human: true, speed: 10, carId: 1},
    {id: 2, human: false, speed: 25, carId: 2}
  ],
  addPlayer: (name, lastname) => set((state: State) => ({
    players: [...state.players, {id: state.players.length + 1, human: false, speed: 10, carId: 3, name: name + " " + lastname}]
  }))
});

export const carSlice: StateCreatorFn<CarSlice> = (set, get) => ({
  cars: [
    {id: 1, progress: "10"},
    {id: 2, progress: "15"}
  ],
  addCar: () => set((state: State) => ({
    cars: [...state.cars, {id: state.cars.length + 1, progress: "10"}]
  })),
  getTotalAmount: () => {
    const cars = get().cars;
    return cars.length;
  }
});

export const useBoundStore = create<Slices>((set ,get, api) => ({
  ...playerSlice(set, get, api),
  ...carSlice(set, get, api),
}))