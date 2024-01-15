import Track from './Track';
import Default_car from './Cars/Default';
import Brick_car from "./Cars/Brick";
import { useBoundStore } from './Zustand/useBoundStore';
import { Car } from './Zustand/Types';

const Tracks = () => {
  const players = useBoundStore((store) => store.players);
  const cars = useBoundStore((store) => store.cars);
  const allItems = useBoundStore(state => state.items);
  
  function findCarById(id: number, cars: Array<Car>): Car | undefined {
    return cars.find((car) => car.id === id);
  }

  return (
    <div className="tracks">
      {players.map(player => {
        const filteredItems = allItems.filter(item => item.targetId === player.carId);
        const car = findCarById(player.carId, cars);
        if (!car) return;

        let car_element = <Default_car
          id={player.carId}
          player_name={player.name}
          own={player.human}
          progress={car.progress}
        />

        if (car.model === "brick") {
          car_element = <Brick_car
            id={player.carId}
            player_name={player.name}
            own={player.human}
            progress={car.progress}
          />
        }

        return (
          <Track>
            {car_element}
            {filteredItems.map(item => {
              const ItemComponent = item.renderComponent;
              return (
                <div className="track-wrapper">
                  <ItemComponent item={item}/>
                </div>
              );
            })}
          </Track>
        );
      })}
    </div>
  );
};

export default Tracks;
