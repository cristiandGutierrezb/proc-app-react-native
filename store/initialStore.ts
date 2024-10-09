import { create } from "zustand";

type countStoreType = {
  count: number
  inc: () => void
}

export const countStore = create<countStoreType>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
