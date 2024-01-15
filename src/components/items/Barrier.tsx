import barrier_logo from "../../assets/barrier.png";
import { ItemClass } from "../Zustand/Types";
import ItemComponent, { Item } from "./Item";

type BarrierProps = {
  item?: ItemClass
}

export class BarrierClass extends Item {
  public renderComponent = Barrier;
  public constructor(senderId: number, targetId: number, offset: number) {
      super(senderId, targetId, offset);
  }

  public activate() {
    console.log("activated");
  }

  public destroy() {
      console.log("called before removing");
  }
}

const Barrier = (props: BarrierProps) => {
  return (
    <ItemComponent className="barrier" item={props.item}>
      <img src={barrier_logo} alt="Barriere Logo" />
    </ItemComponent>
  );
}

export default Barrier