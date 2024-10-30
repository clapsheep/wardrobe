import { createStore } from "zustand";
export type RegistModalState = {
  urlModal: boolean;
  formModal: boolean;
};
export type RegistModalAction = {
  setUrlModal: () => void;
  setFormModal: () => void;
};
export type TRegistModalStore = RegistModalState & RegistModalAction;

export const DEFAULT_MODAL_STATE = {
  urlModal: false,
  formModal: false,
};

export const createRegistModalStore = (
  initState: RegistModalState = DEFAULT_MODAL_STATE,
) => {
  return createStore<TRegistModalStore>()((set) => ({
    ...initState,
    setUrlModal: () =>
      set((state: TRegistModalStore) => ({
        ...state,
        urlModal: !state.urlModal, // 상태를 반전시킴
      })),
    setFormModal: () =>
      set((state: TRegistModalStore) => ({
        ...state,
        formModal: !state.formModal, // 상태를 반전시킴
      })),
  }));
};
