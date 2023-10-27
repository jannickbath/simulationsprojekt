import { useEffect, useState } from 'react';
import { useBoundStore } from '../Zustand/useBoundStore';
import { letterArrayToSentence, sentenceToLetterArray } from '../../HelperFunctions';

const Textbox = () => {
  const text = useBoundStore(state => state.text.remainingText);
  const winner = useBoundStore(state => state.leaderboard.winner);
  const typedText = useBoundStore(state => state.text.typedText);
  const [prevArray, setPrevArray] = useState(sentenceToLetterArray(typedText));
  const updateText = useBoundStore(state => state.updateRemainingText);
  const updateTypedText = useBoundStore(state => state.updateTypedText);

  // Updates the prevArray if the winner changes -> e.g. the game is restarted and the winner is cleared
  useEffect(() => {
    setPrevArray(sentenceToLetterArray(typedText));
  },[winner]);

  function keyHandler(event: KeyboardEvent) {
    const pressedKey = event.key;
    const chars = text.split('');

    if (chars[0] == pressedKey) {
      const newPrevArray = [...prevArray, {
        value: chars.shift() ?? '',
        incorrect: false,
      }];
      setPrevArray(newPrevArray);
    } else if (pressedKey >= 'a' && pressedKey <= 'z') {
      const newPrevArray = [...prevArray, {
        value: chars.shift() ?? '',
        incorrect: true,
      }];
      setPrevArray(newPrevArray);
    } else if (pressedKey == 'Backspace') {
      const toBeRemovedCharacter = prevArray[prevArray.length - 1].value;
      const newPrevArray = prevArray.slice(0, -1);
      chars.unshift(toBeRemovedCharacter);
      setPrevArray(newPrevArray);
    }

    updateText(chars.join(''));
    updateTypedText(letterArrayToSentence(prevArray));
  }

  return (
    <div className="textbox">
      <div className="input-div" tabIndex={0} onKeyDown={(e) => keyHandler(e)}>
        <span className="previous-text">
          {prevArray.map((obj) => {
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
