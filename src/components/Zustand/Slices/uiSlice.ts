import { State, StateCreatorFn, UiSlice } from '../Types';

export const uiSlice: StateCreatorFn<UiSlice> = (set) => ({
  ui: [],
  pushUi: (popup) => set((state: State) => {
    return { ui: [...state.ui, popup] }
  }),
  clearUi: () => set(() => {
    return { ui: []}
  })
});
