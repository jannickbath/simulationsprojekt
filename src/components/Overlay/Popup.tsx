import { ReactNode } from "react";
import { useBoundStore } from "../Zustand/useBoundStore";

type PopupProps = {
  children: ReactNode,
  className: string
}

const Popup: React.FC<PopupProps> = (props) => {
  const { children } = props;
  const clearUi = useBoundStore(state => state.clearUi);
  const popUi = useBoundStore(state => state.popUi);
  const uiQueue = useBoundStore(state => state.ui);

  function handleClose() {
    clearUi();
  }

  function handleContinue() {
    popUi();
  }

  return (
    <div className={"popup " + props.className ?? ""}>
        {children}
        <div className="button-section">
          <button className="button-section__exit" onClick={handleClose}>Exit</button>
          {
            uiQueue.length > 1 ?
            <button className="button-section__continue" onClick={handleContinue}>Continue</button>
            :
            null
          }
        </div>
        <div className="close-button" onClick={handleClose}>X</div>
    </div>
  )
}

export default Popup