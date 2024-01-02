import barrier_logo from "../../assets/barrier.png";
import { Item as ItemType } from "../Zustand/Types";
import Item from "./Item";

type BarrierProps = {
  item?: ItemType
}

const Barrier = (props: BarrierProps) => {  
  return (
    <Item className="barrier" item={props.item}>
      <img src={barrier_logo} alt="Barriere Logo" />
    </Item>
  );
}

export default Barrier