import { useBoundStore } from "../Zustand/useBoundStore"
import Barrier from "../items/Barrier"

const PowerUpView = () => {
  const addPlayer = useBoundStore(store => store.addPlayer);

  function handleClick() {
    addPlayer();
  }

  return (
    <div className="powerUpView">
        <div className="item" onClick={handleClick}>
            <Barrier />
        </div>
        <p>LeftAlt</p>
    </div>
  )
}

export default PowerUpView