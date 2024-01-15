import coin_logo from "../../assets/coin.png";
import { ItemClass } from "../Zustand/Types";
import Item from "./Item";

type CoinProps = {
  item?: ItemClass
}

const Coin = (props: CoinProps) => {
  return (
    <Item className="coin" item={props.item}>
      <img src={coin_logo} alt="Coin Logo" />
    </Item>
  )
}

export default Coin