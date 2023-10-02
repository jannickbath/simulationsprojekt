import car_png from "../../assets/car_default.png";

const Default = (props: Car) => {
  const progress = props.progress + "%";
  
  return (
    <>
      <div className={`car car-default ${props.own ? "own" : ""}`} style={{left: progress}}>
        <img src={car_png} alt="" />
      </div>
    </>
  )
}

export default Default