import { create } from "zustand";

type LoginStore = {
  loginButtonDisabled: boolean;
  setLoginButtonDisabled: (newData: boolean) => void;
};

export const useLoginStore = create<LoginStore>((set) => ({
  loginButtonDisabled: false,
  setLoginButtonDisabled: (newData) => set({ loginButtonDisabled: newData }),
}));
