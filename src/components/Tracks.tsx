import Track from './Track';
import Default_car from './Cars/Default';
import { useBoundStore } from './Zustand/useBoundStore';
import { Car } from './Zustand/Types';

const Tracks = () => {
  const players = useBoundStore((store) => store.players);
  const cars = useBoundStore((store) => store.cars);

  function findCarById(id: number, cars: Array<Car>): Car | undefined {
    return cars.find((car) => car.id === id);
  }

  return (
    <div className="tracks">
      {players.map(player => {
        const car = findCarById(player.carId, cars);

        if (!car) return;

        return (
          <Track>
            <Default_car
              own={player.human}
              progress={car.progress}
            />
          </Track>
        );
      })}
    </div>
  );
};

export default Tracks;
