import { useBoundStore } from "./components/Zustand/useBoundStore";

export function useStartGame() {
    const startGame = useBoundStore(state => state.start);
    const updateSpeed = useBoundStore(state => state.updateSpeed);
    const players = useBoundStore(state => state.players);
    const npcs = players.filter((player) => !player.human);

    return () => {
        startGame();
        npcs.forEach((npc) => {
            const min = 40;
            const max = 100;
            const randomWPM = Math.floor(Math.random() * (max - min + 1)) + min;
            updateSpeed(npc.id, randomWPM);
        });
    }
}