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
