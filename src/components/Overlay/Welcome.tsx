import { useBoundStore } from "../Zustand/useBoundStore";
import Popup from "./Popup"

const Welcome: React.FC = () => {
  const { popUi } = useBoundStore(state => state);

  function handleStart() {
    popUi();
  }

  return (
    <Popup className='welcome'>
        <h1>Welcome to Typeracer!</h1>
        <button className="get-started" onClick={handleStart}>Get started!</button>
    </Popup>
  )
}

export default Welcome