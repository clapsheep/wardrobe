//https://zustand.docs.pmnd.rs/guides/nextjs#creating-a-store-per-request
import { createStore } from "zustand";

export type RegistItemState = {
  site: string;
  name: string;
  image: string;
  price: number;
  category: string;
  brand: string;
};
export type RegistItemAction = {
  setSite: (site: string) => void;
  setName: (name: string) => void;
  setImage: (image: string) => void;
  setPrice: (price: number) => void;
  setCategory: (category: string) => void;
  setBrand: (brand: string) => void;
  setAllState: (
    site: string,
    name: string,
    image: string,
    price: number,
    category: string,
    brand: string,
  ) => void;
};
export type TRegistItemStore = RegistItemState & RegistItemAction;
export const DEFAULT_REGIST_STATE: RegistItemState = {
  site: "",
  name: "",
  image: "",
  price: 0,
  category: "",
  brand: "",
};

export const createRegistItemStore = (
  initState: RegistItemState = DEFAULT_REGIST_STATE,
) => {
  return createStore<TRegistItemStore>()((set) => ({
    ...initState,
    setSite: (site: string) => set((state) => ({ ...state, site })),
    setName: (name: string) => set((state) => ({ ...state, name })),
    setImage: (image: string) => set((state) => ({ ...state, image })),
    setPrice: (price: number) => set((state) => ({ ...state, price })),
    setCategory: (category: string) => set((state) => ({ ...state, category })),
    setBrand: (brand: string) => set((state) => ({ ...state, brand })),
    setAllState: (site, name, image, price, category, brand) =>
      set((state) => ({ site, name, image, price, category, brand })),
  }));
};
