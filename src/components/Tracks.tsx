import Track from './Track';
import { useBoundStore } from './Zustand/useBoundStore';
import { CarClassType } from './Zustand/Types';

const Tracks = () => {
  const players = useBoundStore((store) => store.players);
  const cars = useBoundStore((store) => store.cars);
  const allItems = useBoundStore(state => state.items);
  
  function findCarById(id: number, cars: Array<CarClassType>): CarClassType | undefined {
    return cars.find((car) => car.id === id);
  }

  return (
    <div className="tracks">
      {players.map((player, trackIndex) => {
        const filteredItems = allItems.filter(item => item.targetId === player.carId);
        const car = findCarById(player.carId, cars);
        if (!car) return;

        const CarComponent = car.renderComponent;

        return (
          <Track key={trackIndex}>
            <CarComponent car={car} progress={car.progress} own={player.human} player_name={player.name} />
            {filteredItems.map((item, itemIndex) => {
              const ItemComponent = item.renderComponent;
              return (
                <div className="track-wrapper" key={itemIndex}>
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
