import target_icon from "../../assets/target.png";

const Target = () => {
  return (
    <div className="target">
      <div className="icon-wrapper">
        <div className="animation-dot">
          <div className="outer-dot"></div>
          <div className="inner-dot"></div>
        </div>
        <img src={target_icon} alt="Target Icon" />
      </div>
      <p>RightAlt</p>
    </div>
  )
}

export default Target