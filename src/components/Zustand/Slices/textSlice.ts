import { State, StateCreatorFn, TextSlice } from '../Types';

export const textSlice: StateCreatorFn<TextSlice> = (set) => ({
  text: {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non, ab aperiam error perspiciatis eius! Odit quisquam animi incidunt sed velit modi vel debitis et.",
    typedText: "",
    remainingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non, ab aperiam error perspiciatis eius! Odit quisquam animi incidunt sed velit modi vel debitis et."
  },
  updateTypedText: (newText) => set((state: State) => {
    return { text: { ...state.text, typedText: newText} }
  }),
  updateRemainingText: (newText) => set((state: State) => {
    return { text: { ...state.text, remainingText: newText} }
  })
});
