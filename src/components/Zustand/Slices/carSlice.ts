import { CarSlice, State, StateCreatorFn } from '../Types';

export const carSlice: StateCreatorFn<CarSlice> = (set, get) => ({
  cars: [
    { id: 1, progress: '10' },
    { id: 2, progress: '15' },
  ],
  addCar: () =>
    set((state: State) => ({
      cars: [...state.cars, { id: state.cars.length + 1, progress: '10' }],
    })),
  getTotalAmount: () => {
    const cars = get().cars;
    return cars.length;
  },
});
