import { Item, ItemSlice, State, StateCreatorFn } from '../Types';

const initialItems: Array<Item> = [];
export const itemSlice: StateCreatorFn<ItemSlice> = (set) => ({
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
    })
  }
});
