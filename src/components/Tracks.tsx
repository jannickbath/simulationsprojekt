import Track from "./Track"
import Default_car from "./Cars/Default";

const Tracks = () => {
  return (
    <div className="tracks">
      <Track>
        <Default_car progress="10"/>
      </Track>
      <Track />
      <Track />
    </div>
  )
}

export default Tracks