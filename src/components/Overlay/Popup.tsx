import { ReactNode } from "react";
import { useBoundStore } from "../Zustand/useBoundStore";

type PopupProps = {
  children: ReactNode;
  className: string;
}

const Popup: React.FC<PopupProps> = (props) => {
  const { children } = props;
  const { clearUi, popUi } = useBoundStore(state => state);
  const uiQueue = useBoundStore(state => state.ui);
  const indexOfPopup = uiQueue.length - 1;

  function handleClose() {
    clearUi();
  }

  function handleContinue() {
    popUi();
  }

  return (
    <div className={"popup " + props.className ?? ""} key={indexOfPopup}>
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