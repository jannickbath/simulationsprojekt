import barrier_logo from "../../assets/barrier.png";
import { ItemClass } from "../Zustand/Types";
import Item from "./Item";

type BarrierProps = {
  item?: ItemClass
}

const Barrier = (props: BarrierProps) => {
  return (
    <Item className="barrier" item={props.item}>
      <img src={barrier_logo} alt="Barriere Logo" />
    </Item>
  );
}

export default Barrier