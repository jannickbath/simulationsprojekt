import cube_logo from "../../assets/cube.png";
import { ItemClass } from "../Zustand/Types";
import ItemComponent, { Item } from "./Item";

type CubeProps = {
  item?: ItemClass
}

export class CubeClass extends Item {
  public renderComponent = Cube;

  public activate() {
    console.log("activated");
  }

  public destroy() {
      console.log("called before removing");
  }
}

const Cube = (props: CubeProps) => {
  return (
    <ItemComponent className="cube" item={props.item}>
      <img src={cube_logo} alt="Cube Logo" />
    </ItemComponent>
  );
}

export default Cube