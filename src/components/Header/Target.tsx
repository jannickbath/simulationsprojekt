import target_icon from "../../assets/target.png";

const Target = () => {
  return (
    <div className="target">
      <div className="icon">
        <img src={target_icon} alt="Target Icon" />
      </div>
      <p>RightAlt</p>
    </div>
  )
}

export default Target