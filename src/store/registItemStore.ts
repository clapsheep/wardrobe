//https://zustand.docs.pmnd.rs/guides/nextjs#creating-a-store-per-request
import { createStore } from "zustand";

export type registItemState = {
  site: string;
  name: string;
  image: string;
  price: number;
  category: string;
  brand: string;
};
export type registItemAction = {
  setState: () => void;
};
export type TregistItemStore = registItemState & registItemAction;
export const DEFAULT_RESIST_STATE = {
  site: "",
  name: "",
  image: "",
  price: 0,
  category: "",
  brand: "",
};

export const registItemStore = (
  initState: registItemState = DEFAULT_RESIST_STATE,
) => {
  return createStore<TregistItemStore>()((set) => ({
    ...initState,
    setState: () => set((state) => ({})),
  }));
};
