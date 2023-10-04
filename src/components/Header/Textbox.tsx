import { useRef, useState } from "react";

type letterArray = [
  {
    value: string,
    incorrect: boolean
  }
]

const Textbox = () => {
  const [text, setText] = useState("Lorem ipsum dolor. Sit dolor amet blah blub.");
  const [prevArray, setPrevArray] = useState([{}] as letterArray);
  const initialTextRef = useRef(text);

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
    
    // Update progress
    // const prevArrayWords = countWords(letterArrayToSentence(prevArray)) - 1;
    // const textWords = countWords(initialTextRef.current);
    // dispatch(updateProgress(calculatePercentage(prevArrayWords, textWords)))
  }

  function letterArrayToSentence(letterArray: letterArray): string {
    let sentence = "";
    letterArray.forEach(letter => {
      sentence += letter.value ?? "";
    });

    return sentence;
  }

  function countWords(sentence: string): number {
    return sentence.split(" ").length;
  }

  function calculatePercentage(piece: number, total: number): number {
    return (piece / total) * 100;
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