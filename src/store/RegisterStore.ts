import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type RegForm = {
  publicName: string;
  registerName: string;
  Country: string;
  Industry: string;
  NoOfEmployees: number;
};

type RegisterStore = {
  registerFormData: null | RegForm;
  setRegisterFormData: (data: RegForm) => void;
};

export const useRegisterStore = create<RegisterStore>()(
  devtools(
    persist(
      (set) => ({
        registerFormData: null,
        setRegisterFormData: (data) => set({ registerFormData: data }),
      }),
      { name: "registerStore" },
    ),
  ),
);

/**
 * Second store start
 */

type RegisterButtonsStore = {
  registerButtonDisabled: boolean;
  setRegisterButtonDisabled: (newData: boolean) => void;
};

export const useRegisterButtonsStore = create<RegisterButtonsStore>((set) => ({
  registerButtonDisabled: false,
  setRegisterButtonDisabled: (newData) =>
    set({ registerButtonDisabled: newData }),
}));
