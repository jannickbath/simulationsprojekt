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
  name?: string;
};

// Slices
export type CarSlice = {
  cars: Array<Car>;
  addCar: () => void;
  getTotalAmount: () => number;
};

export type PlayerSlice = {
  players: Array<Player>;
  addPlayer: (name: string, lastname: string) => void;
};

export type Slices = PlayerSlice & CarSlice;

// Zustand
export type State = {
  players: Array<Player>;
  cars: Array<Car>;
};

export type StateCreatorFn<T> = StateCreator<Slices, [], [], T>;
