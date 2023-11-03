import { useStartGame, useStopGame } from "../../Game";
import { useBoundStore } from "../Zustand/useBoundStore";

const Utility = () => {
  const startGame = useStartGame();
  const stopGame = useStopGame();
  const addPlayer = useBoundStore(state => state.addPlayer);
  const humanPlayer = useBoundStore(state => state.players).find(player => player.human);
  const gameStatus = useBoundStore(state => state.game.started);
  const playerLimit = useBoundStore(state => state.game.playerLimit);
  const players = useBoundStore(state => state.players);
  const handleGameToggle = () => gameStatus ? stopGame() : startGame();

  function generateOpponents(): void {
    if (players.length >= playerLimit) return;

    const botAmount = playerLimit - 1;
    for(let i = 0; i < botAmount; i++) {
      addPlayer();
    }
  }

  return (
    <div className="utility">
        <div className="utility__buttons">
          <div className="wpm-display">
            {humanPlayer?.speed}
          </div>
          <button className={"start-button btn-default" + (gameStatus ? " active": "")} onClick={handleGameToggle}>
             {gameStatus ? "Stop Race": "Start Race"}
          </button>
        </div>
        -
        <div className="game-status">{gameStatus ? "Running": "Paused"}</div>
        -
        <div className="generate-opponents btn-default" onClick={generateOpponents}>Generate Opponents</div>
    </div>
  )
}

export default Utility