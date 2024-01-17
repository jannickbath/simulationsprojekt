import { letterArray } from "./Types";
import { QuotableApiResponse } from "./components/Zustand/Types";

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

export function calculateProgressByTypedChars(typedChars: number, totalChars: number) {
    return (typedChars / totalChars) * 100;
}

export function applyRandomOffset(minOffset: number, maxOffset: number, number: number) {
  // Ensure minOffset is not greater than maxOffset
  if (minOffset > maxOffset) {
    [minOffset, maxOffset] = [maxOffset, minOffset];
  }

  // Calculate a random offset within the specified range
  const offset = Math.random() * (maxOffset - minOffset) + minOffset;

  // Randomly decide to add or subtract the offset
  const shouldAdd = Math.random() > 0.5;

  return shouldAdd ? number + offset : number - offset;
}

export function progressFromPercentageToAbsoluteAmount(progressPercentage: number): number {
  const trackElement = document.querySelector(".track") as HTMLDivElement;
  const trackWidth = trackElement.offsetWidth;
  return (trackWidth * progressPercentage) / 100;
}

/**
 * Fetches a random quote given a max length.
 * @param maxLength - Max length of the quote. Must be at least 25
 * @returns Promise containing an array of QuotableApiResponse
 */
export async function fetchRandomQuote(maxLength: number): Promise<Array<QuotableApiResponse> | undefined> {
  if (maxLength < 25) return Promise.resolve(undefined);

  try {
    const url = "https://api.quotable.io/quotes/random?maxLength=" + maxLength;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json() as Promise<Array<QuotableApiResponse>>;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}