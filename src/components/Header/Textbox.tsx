import { useState } from 'react';
import { letterArray } from '../../Types';
import { useBoundStore } from '../Zustand/useBoundStore';
import { letterArrayToSentence } from '../../HelperFunctions';

const Textbox = () => {
  const [prevArray, setPrevArray] = useState([{}] as letterArray);
  const text = useBoundStore(state => state.text.remainingText);
  const updateText = useBoundStore(state => state.updateRemainingText);
  const updateTypedText = useBoundStore(state => state.updateTypedText);

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
