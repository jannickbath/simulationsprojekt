import { State, StateCreatorFn, UiSlice } from '../Types';

export const uiSlice: StateCreatorFn<UiSlice> = (set) => ({
  ui: [],
  pushUi: (popup) => set((state: State) => {
    return { ui: [...state.ui, popup] }
  }),
  unshift: (popup) => set((state: State) => {
    return { ui: [popup, ...state.ui] }
  }),
  popUi: () => set((state: State) => {
    state.ui.pop();
    return { ui: [...state.ui] }
  }),
  shiftUi: () => set((state: State) => {
    state.ui.shift();
    return { ui: [...state.ui] }
  }),
  clearUi: () => set(() => {
    return { ui: []}
  })
});
