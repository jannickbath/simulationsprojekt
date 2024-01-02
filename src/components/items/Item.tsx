import { ReactNode } from "react"
import { Item as ItemType} from "../Zustand/Types";
import { useBoundStore } from "../Zustand/useBoundStore";

type ItemProps = {
    children: ReactNode,
    className: string,
    item?: ItemType
}

const Item = (props: ItemProps) => {
  const {children} = props;
  const cars = useBoundStore(state => state.cars);

  if (props.item) {
    const associatedCar = cars.find(car => car.id === props.item?.targetId);
    if (associatedCar) {
      const leftValue = `${associatedCar.width + props.item.offset}px`;

      return (
        <div className={`item ${props.className}`} style={{left: leftValue}}>
            {children}
        </div>
      );
    }
  }
  
  return (
    <div className={`item ${props.className}`}>
        {children}
    </div>
  );
}

export default Item