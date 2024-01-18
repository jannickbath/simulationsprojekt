import barrier_logo from "../../assets/barrier.png";
import { ItemClass } from "../Zustand/Types";
import ItemComponent, { Item } from "./Item";
import { useBoundStore } from "../Zustand/useBoundStore";
import { fetchRandomQuote } from "../../HelperFunctions";

type BarrierProps = {
  item?: ItemClass
}

export class BarrierClass extends Item {
  public renderComponent = Barrier;

  public activate() {
    const state = useBoundStore.getState();
    
    (async () => {
      const responseJSON = await fetchRandomQuote(30);
      if (responseJSON) {
        state.addWords(responseJSON[0].content.split(" "));
      }
    })();
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