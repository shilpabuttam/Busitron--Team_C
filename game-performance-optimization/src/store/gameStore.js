import { create } from "zustand";

const useGameStore = create((set) => ({
  score: 0,
  level: 1,
  imageUrl: "/assets/level1.webp", // Initial image

  increaseScore: () =>
    set((state) => {
      let newScore = state.score + 1;
      let newLevel = state.level;

      if (newScore % 10 === 0 && newLevel < 10) {
        newLevel += 1;
      }

      if (newScore > 100) newScore = 100;

      return { score: newScore, level: newLevel, imageUrl: `/assets/level${newLevel}.webp` };
    }),

  nextLevel: () =>
    set((state) => {
      const newLevel = state.level < 10 ? state.level + 1 : 10;
      return { level: newLevel, imageUrl: `/assets/level${newLevel}.webp` };
    }),

  resetGame: () => set({ score: 0, level: 1, imageUrl: "/assets/level1.webp" }),
}));

export default useGameStore;
