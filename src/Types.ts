export type Letter = {
  value: string;
  incorrect: boolean;
}

export type letterArray = Array<Letter>;

export type OriginalNpcSpeeds = {
  [key: string]: number
}