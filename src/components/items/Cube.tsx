import cube_logo from "../../assets/cube.png";
import { ItemClass } from "../Zustand/Types";
import Item from "./Item";

type CubeProps = {
  item?: ItemClass
}

const Cube = (props: CubeProps) => {
  return (
    <Item className="cube" item={props.item}>
      <img src={cube_logo} alt="Cube Logo" />
    </Item>
  );
}

export default Cube