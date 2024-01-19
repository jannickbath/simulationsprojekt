import Barrier from "../items/Barrier"

const PowerUpView = () => {
  return (
    <div className="powerUpView">
      <div className="item-wrapper">
        <div className="animation-dot">
          <div className="outer-dot"></div>
          <div className="inner-dot"></div>
        </div>
        <Barrier />
      </div>
      <p>LeftAlt</p>
    </div>
  )
}

export default PowerUpView