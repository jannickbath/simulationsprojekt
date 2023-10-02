import { useDispatch } from "react-redux"
import Barrier from "../items/Barrier"
import { addCar } from "../Redux/cars";

const PowerUpView = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addCar());
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