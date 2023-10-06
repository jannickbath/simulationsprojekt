import { letterArray } from "./Types";

export function letterArrayToSentence(letterArray: letterArray): string {
  let sentence = '';
  letterArray.forEach((letter) => {
    sentence += letter.value ?? '';
  });

  return sentence;
}

export function countWords(sentence: string): number {
  return sentence.split(' ').length;
}

export function calculateWordsPerMinute(
  typedWords: number,
  startSeconds: number
): number {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const elapsedMinutes = (currentTimeInSeconds - startSeconds) / 60;
  return parseInt((typedWords / elapsedMinutes).toFixed(0));
}

export function calculateProgressbyWordsPerMinute(
  wpm: number,
  totalWords: number,
  startSeconds: number
): number {
  const secondsTillFinished = (totalWords / wpm) * 60;
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const secondsPassed = currentTimeInSeconds - startSeconds;
  const progress = parseInt(
    ((secondsPassed / secondsTillFinished) * 100).toFixed(2)
  );
  return Math.min(progress, 100);
}
