// Issue: Components doesnt rerender if gameStatus changes.
// Solution: Directly access the properties, do not use getters.

import { useStartGame, useStopGame } from "../../Game";
import { useBoundStore } from "../Zustand/useBoundStore";

const Utility = () => {
  const startGame = useStartGame();
  const stopGame = useStopGame();
  const humanPlayer = useBoundStore(state => state.getHumanPlayer)();
  const gameStatus = useBoundStore(state => state.game.started);
  const handleGameToggle = () => gameStatus ? stopGame() : startGame();

  return (
    <div className="utility">
        <div className="utility__buttons">
          <div className="wpm-display">
            {humanPlayer?.speed}
          </div>
          <button className={"start-button" + (gameStatus ? " active": "")} onClick={handleGameToggle}>
             {gameStatus ? "Stop Race": "Start Race"}
          </button>
        </div>
        -
        <div className="game-status">{gameStatus ? "Running": "Paused"}</div>
    </div>
  )
}

export default Utility