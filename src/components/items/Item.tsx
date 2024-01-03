import { ReactNode } from "react"
import { Item as ItemType} from "../Zustand/Types";

type ItemProps = {
    children: ReactNode,
    className: string,
    item?: ItemType
}

const Item = (props: ItemProps) => {
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

export default Item