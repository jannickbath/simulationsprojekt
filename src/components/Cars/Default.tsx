import React from 'react'
import car_png from "../../assets/car_default.png";

const Default = (props) => {
  const progress = props.progress + "px";
  
  return (
    <>
      <div className="car car-default" style={{left: progress}}>
        <img src={car_png} alt="" />
      </div>
    </>
  )
}

export default Default