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

export type Game = {
  started: boolean,
  scene: string,
  playerLimit: number,
  startSeconds: number
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

export type GameSlice = {
  game: Game;
  start: () => void;
  stop: () => void;
  getStatus: () => boolean;
};

export type Slices = PlayerSlice & CarSlice & GameSlice;

// Zustand
export type State = {
  players: Array<Player>;
  cars: Array<Car>;
  game: Game
};

export type StateCreatorFn<T> = StateCreator<Slices, [], [], T>;
