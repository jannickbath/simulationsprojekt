import { State, StateCreatorFn, TextSlice } from '../Types';

export const textSlice: StateCreatorFn<TextSlice> = (set) => ({
  text: {
    text: "",
    typedText: "",
    remainingText: ""
  },
  updateTypedText: (newText) => set((state: State) => {
    return { text: { ...state.text, typedText: newText} }
  }),
  updateRemainingText: (newText) => set((state: State) => {
    return { text: { ...state.text, remainingText: newText} }
  }),
  updateOriginalText: (newText) => set((state: State) => {
    return { text: { ...state.text, text: newText} }
  })
});
