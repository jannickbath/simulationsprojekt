import { ReactNode } from "react"
import { ItemClass } from "../Zustand/Types";
import { useBoundStore } from "../Zustand/useBoundStore";
import { progressFromPercentageToAbsoluteAmount } from "../../HelperFunctions";

type ItemProps = {
    children: ReactNode,
    className: string,
    item?: ItemClass
}

export abstract class Item implements ItemClass {
  public senderId: number;
  public targetId: number;
  public offset: number;
  public absoluteOffset: number;
  public abstract activated: boolean;
  public abstract renderComponent: React.FC;

  public constructor(senderId: number, targetId: number, offset: number) {
      this.senderId = senderId;
      this.targetId = targetId;
      this.offset = offset;
      this.absoluteOffset = this.calculateAbsoluteOffset() ?? 0;
  }

  public calculateAbsoluteOffset(): number | undefined {
      const state = useBoundStore.getState();
      const targetCar = state.cars.find(car => car.id === this.targetId);

      if (targetCar) {
          const progress = progressFromPercentageToAbsoluteAmount(parseInt(targetCar.progress));
          return progress + targetCar.width + this.offset;
      }else {
          console.error("Could not calculate absolute offset for non-existing car. Car with the id of " + this.targetId + " not found.");
      }
  }

  public abstract activate(): void;
  public abstract destroy?(): void;
}

const ItemComponent = (props: ItemProps) => {
  const {children} = props;
  
  if (props.item) {
    const leftValue = props.item.absoluteOffset;

    return (
      <div className={`item ${props.className}`} style={{left: leftValue}}>
          {children}
      </div>
    );
  }
  
  return (
    <div className={`item ${props.className}`}>
        {children}
    </div>
  );
}

export default ItemComponent