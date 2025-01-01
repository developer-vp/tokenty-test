import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type SigninStore = {
  roleWhileSignin: "manager" | "holder" | null;
  setRoleWhileSignin: (role: "manager" | "holder") => void;
};

export const useSigninStore = create<SigninStore>()(
  devtools(
    persist(
      (set) => ({
        roleWhileSignin: null,
        setRoleWhileSignin: (role) => set({ roleWhileSignin: role }),
      }),
      { name: "signinStore" },
    ),
  ),
);

//   setRoleWhileSignin: (role) => set((state) => ({ roleWhileSignin: role })),
