"use client";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import {
  type TRegistItemStore,
  createRegistItemStore,
} from "@/store/registItemStore";

export type RegistItemStoreApi = ReturnType<typeof createRegistItemStore>;

export const RegistItemStoreContext = createContext<
  RegistItemStoreApi | undefined
>(undefined);

export interface RegistItemStoreProviderProps {
  children: ReactNode;
}

export const RegistItemStoreProvider = ({
  children,
}: RegistItemStoreProviderProps) => {
  const storeRef = useRef<RegistItemStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createRegistItemStore();
  }
  return (
    <RegistItemStoreContext.Provider value={storeRef.current}>
      {children}
    </RegistItemStoreContext.Provider>
  );
};
export const useRegistItemStore = <T,>(
  selector: (store: TRegistItemStore) => T,
): T => {
  const registItemstoreContext = useContext(RegistItemStoreContext);
  if (!registItemstoreContext) {
    throw new Error(
      "useRegistItemStore hook은 반드시 RegistStoreProvider 안에서 쓰여야 합니다!!",
    );
  }
  return useStore(registItemstoreContext, selector);
};
