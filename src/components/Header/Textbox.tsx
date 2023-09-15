import { useState } from "react";

type letterArray = [
  {
    value: string,
    incorrect: boolean
  }
]

const Textbox = () => {
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum atque odio inventore.");
  const [prevArray, setPrevArray] = useState([{}] as letterArray);

  function keyHandler(event: KeyboardEvent) {
    const pressedKey = event.key;
    const chars = text.split("");

    if (chars[0] == pressedKey) {
      prevArray.push({
        value: chars.shift() ?? "",
        incorrect: false
      });
    }else if(pressedKey >= 'a' && pressedKey <= 'z') {
      prevArray.push({
        value: chars.shift() ?? "",
        incorrect: true
      });
    }else if (pressedKey == "Backspace") {
      const toBeRemovedCharacter = prevArray[prevArray.length - 1].value;
      const newPrevArray = prevArray.slice(0, -1);
      chars.unshift(toBeRemovedCharacter);
      setPrevArray(newPrevArray);
    }

    setText(chars.join(""));
  }

  return (
    <div className="textbox">
      <div className="input-div" tabIndex={0} onKeyDown={e => keyHandler(e)}>
        <span className="previous-text">
          {prevArray.map(obj => {
            if (!obj.incorrect) {
              return <span>{obj.value}</span>;
            }else {
              return <span><b>{obj.value}</b></span>;
            }
          })}
        </span>
        {text}
      </div>
    </div>
  )
}

export default Textbox