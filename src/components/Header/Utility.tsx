import { useStartGame, useRestartGame } from "../../Game";
import { useBoundStore } from "../Zustand/useBoundStore";

const Utility = () => {
  const startGame = useStartGame();
  const restartGame = useRestartGame();
  const addPlayer = useBoundStore(state => state.addPlayer);
  const humanPlayer = useBoundStore(state => state.players).find(player => player.human);
  const gameStatus = useBoundStore(state => state.game.running);
  const playerLimit = useBoundStore(state => state.game.playerLimit);
  const players = useBoundStore(state => state.players);
  const generatedOpponents = players.length >= playerLimit;
  const humanPlayerSpeed = humanPlayer?.speed ?? 0;

  function generateOpponent(): void {
    if (generatedOpponents) return;
    addPlayer();
  }

  function handleGameToggle() {
    if (gameStatus) {
      restartGame();
    }else {
      startGame();
      //@ts-expect-error .input-div is always present and it is a div
      document.querySelectorAll(".input-div").forEach((el: HTMLDivElement) => {
        el.focus();
      });
    }
  }

  return (
    <div className="utility">
        <div className="utility__buttons">
          <div className="wpm-display">
            {Math.max(humanPlayerSpeed, 0)}
          </div>
          <button className={"start-button btn-default" + (gameStatus ? " active": "")} onClick={handleGameToggle}>
             {gameStatus ? "Restart Race": "Start Race"}
          </button>
        </div>
        -
        <div className="game-status">{gameStatus ? "Running": "Paused"}</div>
        -
        <div className={"generate-opponents btn-default" + (generatedOpponents ? " disabled":"")} onClick={generateOpponent}>Generate Opponents</div>
    </div>
  )
}

export default Utility