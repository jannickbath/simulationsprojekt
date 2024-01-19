import coin_logo from "../../assets/coin.png";
import { ItemClass } from "../Zustand/Types";
import ItemComponent, { Item } from "./Item";

type CoinProps = {
  item?: ItemClass
}

export class CoinClass extends Item {
  public renderComponent = Coin;
  public activated: boolean = false;

  public activate() {
    console.log("activated");
  }

  public destroy() {
      console.log("called before removing");
  }
}

const Coin = (props: CoinProps) => {
  return (
    <ItemComponent className="coin" item={props.item}>
      <img src={coin_logo} alt="Coin Logo" />
    </ItemComponent>
  )
}

export default Coin