import { State, StateCreatorFn, TextSlice } from '../Types';

export const textSlice: StateCreatorFn<TextSlice> = (set) => ({
    text: {
        text: '',
        typedText: '',
        remainingText: '',
        originalText: '',
        penalties: {},
    },
    updateTypedText: (newText) =>
        set((state: State) => {
            return { text: { ...state.text, typedText: newText } };
        }),
    updateRemainingText: (newText) =>
        set((state: State) => {
            return { text: { ...state.text, remainingText: newText } };
        }),
    updateText: (newText) =>
        set((state: State) => {
            return { text: { ...state.text, text: newText } };
        }),
    updateOriginalText: (newText) =>
        set((state: State) => {
            return { text: { ...state.text, originalText: newText } };
        }),
    addSentences: (playerId, sentences) =>
        set((state: State) => {
            let playerText = state.text.text;
            let remainingText = state.text.remainingText;
            // Player is human player
            if (playerId === 1) {
                playerText += ' ' + sentences.join(' ');
                remainingText += ' ' + sentences.join(' ');
            }
            return {
                text: {
                    ...state.text,
                    text: playerText,
                    remainingText: remainingText,
                    penalties: {
                        ...state.text.penalties,
                        [playerId]: [
                            ...(state.text.penalties[playerId] ?? []),
                            ...sentences,
                        ],
                    },
                },
            };
        }),
    resetPenalties: () =>
        set((state: State) => {
            return { text: { ...state.text, penalties: {} } };
        }),
});
