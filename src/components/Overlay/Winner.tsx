import { useRestartGame } from "../../Game";
import { Player } from "../Zustand/Types";
import { useBoundStore } from "../Zustand/useBoundStore";
import Popup from "./Popup"

const Winner: React.FC<{player: Player}> = (props) => {
  const { player } = props;
  const restartGame = useRestartGame();
  const popUi = useBoundStore(state => state.popUi);

  function handleRestart() {
    restartGame();
    popUi();
  }

  return (
    <Popup className="winner">
        <h1>Game Over</h1>
        <h2>Player {player.name} has won!</h2>
        <button onClick={handleRestart}>Restart</button>
    </Popup>
  )
}

export default Winner