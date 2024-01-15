import { ItemClass, ItemSlice, State, StateCreatorFn } from '../Types';

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
