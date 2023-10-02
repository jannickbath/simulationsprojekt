import { useDispatch } from "react-redux"
import Barrier from "../items/Barrier"
import { addCar } from "../Redux/cars";
import { useSelector } from "react-redux";

const PowerUpView = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addCar());
  }

  const cars: Array<{own: boolean}> = useSelector((state: any) => state.cars);

  return (
    <>
    <div className="powerUpView">
        <div className="item" onClick={handleClick}>
            <Barrier />
        </div>
        <p>LeftAlt</p>
    </div>
    {cars.map(() => <p>car</p>)}
    </>
  )
}

export default PowerUpView