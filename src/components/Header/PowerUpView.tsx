import Barrier from "../items/Barrier"

const PowerUpView = () => {

  function handleClick() {
    // blah
  }

  return (
    <div className="powerUpView">
        <div className="item" onClick={handleClick}>
            <Barrier />
        </div>
        <p>LeftAlt</p>
    </div>
  )
}

export default PowerUpView