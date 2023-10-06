import { State, StateCreatorFn, TextSlice } from '../Types';

export const textSlice: StateCreatorFn<TextSlice> = (set) => ({
  text: {
    text: "Lorem ipsum sit dolor amet.",
    typedText: "",
    remainingText: "Lorem ipsum sit dolor amet."
  },
  updateTypedText: (newText) => set((state: State) => {
    return { text: { ...state.text, typedText: newText} }
  }),
  updateRemainingText: (newText) => set((state: State) => {
    return { text: { ...state.text, remainingText: newText} }
  })
});
