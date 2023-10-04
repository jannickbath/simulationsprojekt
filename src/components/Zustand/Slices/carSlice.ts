import { Car, CarSlice, State, StateCreatorFn } from '../Types';

export const carSlice: StateCreatorFn<CarSlice> = (set, get) => ({
  cars: [
    { id: 1, progress: '10' },
    { id: 2, progress: '15' },
  ],
  addCar: () => {
    let car = {} as Car;
    set((state: State) => {
      car = { id: state.cars.length + 1, progress: '10' };
      return {
        cars: [...state.cars, car]
      }
    });
    return car;
  },
  getTotalAmount: () => {
    const cars = get().cars;
    return cars.length;
  },
});
