import React from 'react';
import { progressFromPercentageToAbsoluteAmount } from '../../../HelperFunctions';
import Brick from '../../Cars/Brick';
import Default from '../../Cars/Default';
import { CarClassType, CarProps, CarSlice, State, StateCreatorFn } from '../Types';

export abstract class CarClass implements CarClassType {
  public id;
  public progress;
  public componentReference: React.RefObject<HTMLDivElement> = React.createRef();
  public abstract model: string;
  public abstract width: number;
  public abstract renderComponent: React.FC<CarProps>;
  
  public constructor(id: number, progress: `${number}`) {
      this.id = id;
      this.progress = progress;
  }

  public setComponentReference(ref: React.RefObject<HTMLDivElement>) {
    this.componentReference = ref;
  }

  public addClass(className: string) {
    const component = this.componentReference.current;
    if (component) {
      component.classList.add(className);
    }
  }

  public removeClass(className: string) {
    const component = this.componentReference.current;
    if (component) {
      component.classList.remove(className);
    }
  }
}

export class CarDefault extends CarClass {
  public renderComponent: React.FC<CarProps> = Default;
  public width: number = 270;
  public model: string = "default";
}

export class CarBrick extends CarClass {
  public renderComponent: React.FC<CarProps> = Brick;
  public width: number = 305;
  public model: string = "brick";
}

const initialCarState: Array<CarClassType> = [
  new CarBrick(1, "0")
];

export const carSlice: StateCreatorFn<CarSlice> = (set, get) => ({
  cars: initialCarState,
  addCar: (model = "default") => {
    let car: CarClassType;
    set((state: State) => {
      const id = state.cars.length + 1;
      if (model === "default") {
        car = new CarDefault(id, "0");
      }else {
        car = new CarBrick(id, "0");
      }
      return {
        cars: [...state.cars, car]
      }
    });
    //@ts-expect-error Will always be assigned, because a car is always created.
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
  updateProgress: (id, progress, forward = false) => {
    set((state: State) => {
      const car = state.cars.find(car => car.id === id);
      if (!car) throw new Error("Car could not be found. Progress not updated.");

      const items = state.items.filter(item => item.targetId === id);
      items.forEach((item, key) => {
        const progressDiff = progressFromPercentageToAbsoluteAmount(parseInt(progress)) - progressFromPercentageToAbsoluteAmount(parseInt(car.progress));
        if (progressDiff >= item.offset) {
          if (!forward) {
            item.activate();
          }
          get().itemUtility.removeByKey(key);
        }else {
          item.offset = item.offset - progressDiff;
        }
      });
      
      car.progress = progress;
      
      return {
        cars: [...state.cars, car]
      }
    });
  }
});
