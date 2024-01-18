import { useEffect, useRef, useState } from "react";
import { useBoundStore } from "../Zustand/useBoundStore";
import {
  letterArrayToSentence,
  sentenceToLetterArray,
} from "../../HelperFunctions";
import { letterArray } from "../../Types";

const Textbox = () => {
  const text = useBoundStore((state) => state.text.remainingText);
  const gameStatus = useBoundStore((state) => state.game.running);
  const typedText = useBoundStore((state) => state.text.typedText);
  const [prevArray, setPrevArray] = useState(sentenceToLetterArray(typedText));
  const updateText = useBoundStore((state) => state.updateRemainingText);
  const updateTypedText = useBoundStore((state) => state.updateTypedText);
  const inputDivRef = useRef(null);

  // Updates the prevArray if the winner changes -> e.g. the game is restarted and the winner is cleared
  useEffect(() => {
    setPrevArray(sentenceToLetterArray(typedText));
  }, [gameStatus]);

  function keyHandler(event: React.KeyboardEvent<HTMLDivElement>) {
    const pressedKey = event.key;
    const chars = text.split("");
    let newPrevArray: letterArray = [];

    if (chars[0] == pressedKey) {
      newPrevArray = [
        ...prevArray,
        {
          value: chars.shift() ?? "",
          incorrect: false,
        },
      ];
    } else if (pressedKey.length <= 1) {
      newPrevArray = [
        ...prevArray,
        {
          value: chars.shift() ?? "",
          incorrect: true,
        },
      ];
    } else if (pressedKey == "Backspace") {
      const toBeRemovedCharacter = prevArray[prevArray.length - 1].value;
      newPrevArray = prevArray.slice(0, -1);
      chars.unshift(toBeRemovedCharacter);
    }

    const prevArrayCorrectChars = newPrevArray.filter(letter => !letter.incorrect);
    setPrevArray(newPrevArray);
    updateText(chars.join(""));
    updateTypedText(letterArrayToSentence(prevArrayCorrectChars));
  }

  return (
    <div className="textbox" onClick={() => {
      const inputElement = inputDivRef.current as HTMLInputElement | null;
      if (inputElement) {
        inputElement.focus()
      }
      }}>
      <div className="input-div" ref={inputDivRef} tabIndex={0} onKeyDown={(e) => keyHandler(e)}>
        <span className="previous-text">
          {prevArray.map((obj, letterIndex) => {
            if (!obj.incorrect) {
              if (obj.value ?? false) {
                return <span key={letterIndex}>{obj.value}</span>;
              }
            } else {
              return (
                <span key={letterIndex}>
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
