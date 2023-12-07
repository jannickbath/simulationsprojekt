import { letterArray } from "./Types";

export function letterArrayToSentence(letterArray: letterArray): string {
  let sentence = '';
  letterArray.forEach((letter) => {
    sentence += letter.value ?? '';
  });

  return sentence;
}

export function sentenceToLetterArray(sentence: string): letterArray {
  const letterArray = [{}] as letterArray;
  for (let i = 0; i < sentence.length; i++) {
    letterArray.push({ value: sentence[i], incorrect: false });
  }
  return letterArray;
}

export function countChars(sentence: string): number {
  return sentence.split("").length;
}

export function calculateCharsPerMinute(
  typedChars: number,
  startSeconds: number
): number {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const elapsedMinutes = (currentTimeInSeconds - startSeconds) / 60;
  return parseInt((typedChars / elapsedMinutes).toFixed(0));
}

export function calculateProgressByCharsPerMinute(
  cpm: number,
  totalChars: number,
  startSeconds: number
): number {
  const secondsTillFinished = (totalChars / cpm) * 60;
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const secondsPassed = currentTimeInSeconds - startSeconds;
  const progress = parseInt(
    ((secondsPassed / secondsTillFinished) * 100).toFixed(2)
  );
  return Math.min(progress, 100);
}