import { useEffect, useRef, useState } from 'react';
import { useBoundStore } from '../Zustand/useBoundStore';

type letterArray = [
  {
    value: string;
    incorrect: boolean;
  }
];

const Textbox = () => {
  const [text, setText] = useState(
    'Lorem ipsum dolor. Sit dolor amet blah blub.'
  );
  const [intervalStarted, setIntervalStarted] = useState(false);
  const initialTextRef = useRef(text);
  const prevArrayRef = useRef([{}] as letterArray);
  const updateProgress = useBoundStore((state) => state.updateProgress);
  const updateSpeed = useBoundStore((state) => state.updateSpeed);
  const humanCar = useBoundStore((state) => state.getHumanCar)();
  const humanPlayer = useBoundStore((state) => state.getHumanPlayer)();
  const players = useBoundStore((state) => state.players);
  const cars = useBoundStore((state) => state.cars);
  const npcs = players.filter((player) => !player.human);
  const gameStatus = useBoundStore(state => state.getStatus)();
  const startSeconds = useBoundStore(state => state.game.startSeconds);

  function keyHandler(event: KeyboardEvent) {
    const pressedKey = event.key;
    const chars = text.split('');

    if (chars[0] == pressedKey) {
      prevArrayRef.current.push({
        value: chars.shift() ?? '',
        incorrect: false,
      });
    } else if (pressedKey >= 'a' && pressedKey <= 'z') {
      prevArrayRef.current.push({
        value: chars.shift() ?? '',
        incorrect: true,
      });
    } else if (pressedKey == 'Backspace') {
      const toBeRemovedCharacter = prevArrayRef.current[prevArrayRef.current.length - 1].value;
      const newPrevArray = prevArrayRef.current.slice(0, -1);
      chars.unshift(toBeRemovedCharacter);
      prevArrayRef.current = newPrevArray;
    }

    setText(chars.join(''));
  }

  useEffect(() => {
    if (intervalStarted || !gameStatus) return;
    setIntervalStarted(true);

    setInterval(() => {
      // Update progress
      const prevArrayWords = countWords(letterArrayToSentence(prevArrayRef.current)) - 1;
      const wpm = calculateWordsPerMinute(
        prevArrayWords,
        startSeconds
      );

      if (humanPlayer) {
        updateSpeed(humanPlayer.id, wpm);
      }

      const calculatedPercentage = calculateProgressbyWordsPerMinute(wpm, countWords(initialTextRef.current), startSeconds);

      if (humanCar) {
        updateProgress(humanCar.id, `${calculatedPercentage}`);
      }

      // Update npcs
      npcs.forEach((npc) => {
        const car = cars.find((car) => car.id === npc.carId);
        if (car) {
          const progress = calculateProgressbyWordsPerMinute(
            npc.speed,
            countWords(initialTextRef.current),
            startSeconds
          );
          updateProgress(car?.id, `${progress}`);
        }
      });
    }, 1000);
  });

  function letterArrayToSentence(letterArray: letterArray): string {
    let sentence = '';
    letterArray.forEach((letter) => {
      sentence += letter.value ?? '';
    });

    return sentence;
  }

  function countWords(sentence: string): number {
    return sentence.split(' ').length;
  }

  function calculateWordsPerMinute(
    typedWords: number,
    startSeconds: number
  ): number {
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const elapsedMinutes = (currentTimeInSeconds - startSeconds) / 60;
    return parseInt((typedWords / elapsedMinutes).toFixed(0));
  }

  function calculateProgressbyWordsPerMinute(
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

  return (
    <div className="textbox">
      <div className="input-div" tabIndex={0} onKeyDown={(e) => keyHandler(e)}>
        <span className="previous-text">
          {prevArrayRef.current.map((obj) => {
            if (!obj.incorrect) {
              return <span>{obj.value}</span>;
            } else {
              return (
                <span>
                  <b>{obj.value}</b>
                </span>
              );
            }
          })}
        </span>
        {text}
      </div>
    </div>
  );
};

export default Textbox;
