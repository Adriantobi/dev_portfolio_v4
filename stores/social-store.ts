import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SocialStore {
  visible: boolean;
  setVisibility: (visibility: boolean) => void;
}

const useSocialStore = create(
  persist<SocialStore>(
    (set) => ({
      visible: true,
      setVisibility: (visibility: boolean) => set({ visible: visibility }),
    }),
    {
      name: "social-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSocialStore;
