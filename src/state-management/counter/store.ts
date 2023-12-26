import { create } from "zustand";
//devtool
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ max: 10 })),
}));
// devtools
if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
