import React, { ReactNode } from 'react';
import { StateCreator } from 'zustand';

// Objects
export type Car = {
  id: number;
  progress: `${number}`;
  model: string;
  width: number;
};

export type Player = {
  id: number;
  human: boolean;
  speed: number;
  carId: number;
  name: string;
};

export type Game = {
  running: boolean,
  scene: string,
  playerLimit: number,
  startSeconds: number
};

export type Text = {
  text: string;
  typedText: string;
  remainingText: string;
  originalText: string;
  penalties: {
    [playerId: number]: Array<string>;
  }
};

export type ItemType = "Barrier" | "Boost" | "EngineFailure";

export type Item = {
  senderId: number;
  targetId: number;
  type: ItemType;
  offset: number;
  absoluteOffset?: number;
};

export type Leaderboard = {
  winner: Player|null
}

export type Popup = ReactNode;

export type CarModel = "default" | "brick";

/**
 * Response from https://api.quotable.io/random API
 * @see https://docs.quotable.io/docs/api/ZG9jOjQ2NDA2-introduction For further documentation
 */
export type QuotableApiResponse = {
  /**
   * Unique identifier for the quote.
   * @example "eJC3Bf-J2fe"
   */
  _id: string;

  /**
   * The actual quote.
   * @example "The future belongs to those who believe in the beauty of their dreams."
   */
  content: string;

  /**
   * The author of the quote.
   * @example "Eleanor Roosevelt"
   */
  author: string;

  /**
   * Tags categorizing the quote.
   * @example ["Future", "Wisdom"]
   */
  tags: Array<string>;

  /**
   * A slug representing the author.
   * @example "eleanor-roosevelt"
   */
  authorSlug: string;

  /**
   * The length of the quote in characters.
   * @example 70
   */
  length: number;

  /**
   * The date when the quote was added to the database.
   * @example "2020-03-27"
   */
  dateAdded: string;

  /**
   * The date when the quote was last modified.
   * @example "2023-04-14"
   */
  dateModified: string;
}

// Slices
export type CarSlice = {
  cars: Array<CarClassType>;
  addCar: (model?: CarModel) => CarClassType;
  removeCar: (id: number) => void;
  clearCars: () => void;
  getHumanCar: () => Car | undefined;
  updateProgress: (id: number, progress: `${number}`) => void;
};

export type TextSlice = {
  text: Text;
  updateTypedText: (newText: string) => void;
  updateRemainingText: (newText: string) => void;
  updateText: (newText: string) => void;
  updateOriginalText: (newText: string) => void;
  addSentences: (playerId: number, sentences: Array<string>) => void;
  resetPenalties: () => void;
};

export type LeaderboardSlice = {
  leaderboard: Leaderboard;
  setWinner: (winner: Player) => void;
  resetLeaderboard: () => void;
};

export interface ItemClass {
 senderId: number;
 targetId: number;
 offset: number;
 absoluteOffset: number;
 renderComponent: React.FC<{item: ItemClass}>;

 calculateAbsoluteOffset(): number | undefined;
 activate(): void;
 destroy?(): void;
}
export interface CarClassType {
  id: number;
  progress: `${number}`;
  model: string;
  width: number;
  renderComponent: React.FC<CarProps>;
  componentReference: React.RefObject<HTMLDivElement>;
  setComponentReference: (ref: React.RefObject<HTMLDivElement>) => void;
  addClass: (className: string) => void;
  removeClass: (className: string) => void;
 }

export type CarProps = {
  car: CarClassType;
  progress: `${number}`;
  own: boolean;
  player_name: string;
}

export type ItemSlice = {
  items: Array<ItemClass>;
  itemUtility: {
    push: (item: ItemClass) => void;
    unshift: (item: ItemClass) => void;
    clear: () => void;
    pop: () => void;
    shift: () => void;
    removeByKey: (key: number) => void;
  }
};

export type UiSlice = {
  ui: Array<Popup>;
  pushUi: (popup: Popup) => void;
  unshift: (popup: Popup) => void;
  clearUi: () => void;
  popUi: () => void;
  shiftUi: () => void;
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

export type Slices = PlayerSlice & CarSlice & GameSlice & TextSlice & LeaderboardSlice & UiSlice & ItemSlice;

// Zustand
export type State = {
  players: Array<Player>;
  cars: Array<CarClassType>;
  game: Game,
  text: Text,
  leaderboard: Leaderboard,
  ui: Array<Popup>,
  items: Array<ItemClass>
};

export type StateCreatorFn<T> = StateCreator<Slices, [], [], T>;
