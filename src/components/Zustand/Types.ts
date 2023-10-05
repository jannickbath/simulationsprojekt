import { StateCreator } from 'zustand';

// Objects
export type Car = {
  id: number;
  progress: `${number}`;
};

export type Player = {
  id: number;
  human: boolean;
  speed: number;
  carId: number;
};

// Slices
export type CarSlice = {
  cars: Array<Car>;
  addCar: () => Car;
  getHumanCar: () => Car | undefined;
  updateProgress: (id: number, progress: `${number}`) => void;
};

export type PlayerSlice = {
  players: Array<Player>;
  addPlayer: (carId?: number) => Player;
  updateSpeed: (id: number, newSpeed: number) => void;
  getHumanPlayer: () => Player | undefined;
};

export type Slices = PlayerSlice & CarSlice;

// Zustand
export type State = {
  players: Array<Player>;
  cars: Array<Car>;
};

export type StateCreatorFn<T> = StateCreator<Slices, [], [], T>;
