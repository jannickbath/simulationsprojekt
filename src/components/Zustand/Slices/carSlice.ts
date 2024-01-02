import { Car, CarSlice, State, StateCreatorFn } from '../Types';

const widths = {
  default: 270,
  brick: 305
};
const defaultModel = "brick";
const initialCarState: Array<Car> = [ { id: 1, progress: '0', model: defaultModel, width: widths[defaultModel]} ];

export const carSlice: StateCreatorFn<CarSlice> = (set, get) => ({
  cars: initialCarState,
  addCar: (model = "default") => {
    let car = {} as Car;
    set((state: State) => {
      car = { id: state.cars.length + 1, progress: '0', model: model, width: widths[model]};
      return {
        cars: [...state.cars, car]
      }
    });
    return car;
  },
  removeCar: (id) => {
    set((state: State) => {
      const filteredCars = state.cars.filter(car => car.id !== id);
      return { cars: filteredCars };
    })
  },
  clearCars: () => {
    set(() => {
      return { cars: initialCarState };
    });
  },
  getHumanCar: () => {
    const humanPlayer = get().getHumanPlayer();
    const cars = get().cars;
    if (humanPlayer) {
      return cars.find(car => car.id === humanPlayer.carId);
    }else {
      console.error("No human player could be found.");
    }
  },
  updateProgress: (id, progress) => {
    set((state: State) => {
      const car = state.cars.find(car => car.id === id);
      if (car) {
        car.progress = progress;
      }else {
        throw new Error("Car could not be found. Progress not updated.")
      }
      return {
        cars: [...state.cars, car]
      }
    });
  }
});
