import { ReactNode } from "react";
import { useBoundStore } from "../Zustand/useBoundStore";

type PopupProps = {
  children: ReactNode,
  className: string
}

const Popup: React.FC<PopupProps> = (props) => {
  const { children } = props;
  const clearUi = useBoundStore(state => state.clearUi);

  function handleClose() {
    clearUi();
  }

  return (
    <div className={"popup " + props.className ?? ""}>
        {children}
        <div className="button-section">
          <button className="button-section__exit" onClick={handleClose}>Exit</button>
          <button className="button-section__continue">Continue</button>
        </div>
        <div className="close-button" onClick={handleClose}>X</div>
    </div>
  )
}

export default Popup