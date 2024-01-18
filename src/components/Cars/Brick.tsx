import { useEffect, useRef } from "react";
import { CarProps } from "../Zustand/Types";

const Brick = (props: CarProps) => {
  const progress = props.progress + "%";
  const localCompReference = useRef(null);

  useEffect(() => {
    if (localCompReference) {
      props.car.setComponentReference(localCompReference);
    }
  }, [localCompReference])

  return (
    <div className={`car car-brick ${props.own ? "own" : ""}`} style={{left: progress}} ref={localCompReference}>
        <div className="car__body">
          <div className="car__body__topper">
            <div className="car__body__topper__front-glas"></div>
            <div className="car__body__topper__back-glas"></div>
          </div>
          <div className="car__body__headlight"></div>
          <div className="car__body__taillight"></div>
          <div className="car__body__tires">
            <div className="car__body__tires__front car__body__tires__tire">
              <div className="car__body__tires__tire__inner"></div>
            </div>
            <div className="car__body__tires__back car__body__tires__tire">
              <div className="car__body__tires__tire__inner"></div>
            </div>
          </div>
        </div>
        <div className="player-name">{props.player_name}</div>
    </div>
  )
}

export default Brick