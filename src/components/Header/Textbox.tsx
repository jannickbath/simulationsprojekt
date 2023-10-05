import { useRef, useState } from "react";
import { useBoundStore } from "../Zustand/useBoundStore";

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
  const startSeconds = useRef(0);
  const updateProgress = useBoundStore(state => state.updateProgress);
  const updateSpeed = useBoundStore(state => state.updateSpeed);
  const humanCar = useBoundStore(state => state.getHumanCar)();
  const humanPlayer = useBoundStore(state => state.getHumanPlayer)();

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
    const prevArrayWords = countWords(letterArrayToSentence(prevArray)) - 1;
    const wpm = calculateWordsPerMinute(prevArrayWords, startSeconds.current);

    if (humanPlayer) {
      updateSpeed(humanPlayer.id, wpm);
    }
    
    const textWords = countWords(initialTextRef.current);
    const calculatedPercentage = calculatePercentage(prevArrayWords, textWords);

    if (humanCar) {
      updateProgress(humanCar.id, `${calculatedPercentage}`)
    }
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

  function calculateWordsPerMinute(typedWords: number, startSeconds: number): number {
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const elapsedMinutes = (currentTimeInSeconds - startSeconds) / 60;
    return parseInt((typedWords / elapsedMinutes).toFixed(0));
  }

  function startRace() {
    startSeconds.current = Math.floor(Date.now() / 1000)
  }

  return (
    <div className="textbox">
      <button onClick={startRace} style={{width: "100px", background: "red"}}>Start Race</button>
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
      {humanPlayer?.speed}
    </div>
  )
}

export default Textbox