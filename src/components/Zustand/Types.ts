import { ReactNode } from 'react';
import { StateCreator } from 'zustand';

// Objects
export type Car = {
  id: number;
  progress: `${number}`;
  model: string;
};

export type Player = {
  id: number;
  human: boolean;
  speed: number;
  carId: number;
  name: string;
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

export type Leaderboard = {
  winner: Player|null
}

export type Popup = ReactNode;

export type CarModel = "default" | "brick";

// Slices
export type CarSlice = {
  cars: Array<Car>;
  addCar: (model?: CarModel) => Car;
  removeCar: (id: number) => void;
  clearCars: () => void;
  getHumanCar: () => Car | undefined;
  updateProgress: (id: number, progress: `${number}`) => void;
};

export type TextSlice = {
  text: Text;
  updateTypedText: (newText: string) => void;
  updateRemainingText: (newText: string) => void;
};

export type LeaderboardSlice = {
  leaderboard: Leaderboard;
  setWinner: (winner: Player) => void;
  resetLeaderboard: () => void;
};

export type UiSlice = {
  ui: Array<Popup>;
  pushUi: (popup: Popup) => void;
  clearUi: () => void;
  popUi: () => void;
};

export type PlayerSlice = {
  players: Array<Player>;
  addPlayer: (carId?: number) => Player;
  getHumanPlayer: () => Player | undefined;
  clearPlayers: () => void;
  updateField: <Field extends keyof Player>(playerId: number, field: Field, value: Player[Field]) => void;
};

export type GameSlice = {
  game: Game;
  start: () => void;
  stop: () => void;
};

export type Slices = PlayerSlice & CarSlice & GameSlice & TextSlice & LeaderboardSlice & UiSlice;

// Zustand
export type State = {
  players: Array<Player>;
  cars: Array<Car>;
  game: Game,
  text: Text,
  leaderboard: Leaderboard,
  ui: Array<Popup>
};

export type StateCreatorFn<T> = StateCreator<Slices, [], [], T>;
