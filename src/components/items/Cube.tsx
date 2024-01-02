import cube_logo from "../../assets/cube.png";
import { Item as ItemType } from "../Zustand/Types";
import Item from "./Item";

type CubeProps = {
  item?: ItemType
}

const Cube = (props: CubeProps) => {
  return (
    <Item className="cube" item={props.item}>
      <img src={cube_logo} alt="Cube Logo" />
    </Item>
  );
}

export default Cube