"use client";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import {
  type TRegistModalStore,
  createRegistModalStore,
} from "@/store/registModalStore";

export type RegistModalStoreApi = ReturnType<typeof createRegistModalStore>;

export const RegistModalStoreContext = createContext<
  RegistModalStoreApi | undefined
>(undefined);

export interface RegistModalStoreProviderProps {
  children: ReactNode;
}

export const RegistModalStoreProvider = ({
  children,
}: RegistModalStoreProviderProps) => {
  const storeRef = useRef<RegistModalStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createRegistModalStore();
  }
  return (
    <RegistModalStoreContext.Provider value={storeRef.current}>
      {children}
    </RegistModalStoreContext.Provider>
  );
};

export const useRegistModalStore = <T,>(
  selector: (store: TRegistModalStore) => T,
): T => {
  const registModalStoreContext = useContext(RegistModalStoreContext);
  if (!registModalStoreContext) {
    throw new Error(
      "useRegistModalStore hook은 반드시 RegistModalStoreProvider 안에서 쓰여야 합니다!!",
    );
  }
  return useStore(registModalStoreContext, selector);
};
