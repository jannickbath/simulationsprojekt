import { progressFromPercentageToAbsoluteAmount } from '../../../HelperFunctions';
import { ItemClass, ItemSlice, State, StateCreatorFn } from '../Types';
import Barrier from '../../items/Barrier';
import { useBoundStore } from '../useBoundStore';

export abstract class Item implements ItemClass {
    public senderId: number;
    public targetId: number;
    public offset: number;
    public absoluteOffset: number;
    public abstract renderComponent: React.FC;

    protected constructor(senderId: number, targetId: number, offset: number) {
        this.senderId = senderId;
        this.targetId = targetId;
        this.offset = offset;
        this.absoluteOffset = this.calculateAbsoluteOffset() ?? 0;
    }

    public calculateAbsoluteOffset(): number | undefined {
        const state = useBoundStore.getState();
        const targetCar = state.cars.find(car => car.id === this.targetId);

        if (targetCar) {
            const progress = progressFromPercentageToAbsoluteAmount(parseInt(targetCar.progress));
            return progress + targetCar.width + this.offset;
        }else {
            console.error("Could not calculate absolute offset for non-existing car. Car with the id of " + this.targetId + " not found.");
        }
    }

    public abstract activate(): void;
    public abstract destroy?(): void;
}

export class BarrierClass extends Item {
    public renderComponent = Barrier;
    public constructor(senderId: number, targetId: number, offset: number) {
        super(senderId, targetId, offset);
    }

    public activate() {
        console.log("activated");
        const something = useBoundStore.getState();
        console.log(something);
    }

    public destroy() {
        console.log("called before removing");
    }
}

const initialItems = [] as ItemClass[];
export const itemSlice: StateCreatorFn<ItemSlice> = (set, get) => ({
  items: initialItems,
  itemUtility: {
    push: (item) => set((state: State) => {
        return { items: [...state.items, item] }
    }),
    unshift: (item) => set((state: State) => {
        return { items: [item, ...state.items] }
    }),
    pop: () => set((state: State) => {
    state.items.pop();
        return { items: [...state.items] }
    }),
    shift: () => set((state: State) => {
    state.items.shift();
        return { items: [...state.items] }
    }),
    clear: () => set(() => {
        return { items: []}
    }),
    removeByKey: (key) => set((state: State) => {
        const itemToBeRemoved = get().items[key];
        if (itemToBeRemoved.destroy) {
            itemToBeRemoved.destroy();
        }
        state.items.splice(key, 1);
        return { items: [...state.items] }
    })
  }
});
