import { Player } from "../Zustand/Types";
import Popup from "./Popup"

const Winner: React.FC<{player: Player}> = (props) => {
  const { player } = props;

  return (
    <Popup className="winner">
        <h1>Game Over</h1>
        <h2>Player {player.name} has won!</h2>
    </Popup>
  )
}

export default Winner