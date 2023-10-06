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

export type Text = {
  text: string,
  typedText: string,
  remainingText: string
};

// Slices
export type CarSlice = {
  cars: Array<Car>;
  addCar: () => Car;
  getHumanCar: () => Car | undefined;
  updateProgress: (id: number, progress: `${number}`) => void;
};

export type TextSlice = {
  text: Text;
  updateTypedText: (newText: string) => void;
  updateRemainingText: (newText: string) => void;
  getTypedText: () => string;
  getText: () => string;
  getRemainingText: () => string;
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
};

export type Slices = PlayerSlice & CarSlice & GameSlice & TextSlice;

// Zustand
export type State = {
  players: Array<Player>;
  cars: Array<Car>;
  game: Game,
  text: Text
};

export type StateCreatorFn<T> = StateCreator<Slices, [], [], T>;
