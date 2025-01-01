import { z } from "zod";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createContractFormSchema } from "@/app/(with-sidebar)/(without-block-topRight-links)/edit-smart-contract/ContractPages";

type SmartContractData = z.infer<typeof createContractFormSchema>;

type CreateSmartContractStore = {
  smartContactData: null | SmartContractData;
  setSmartContactData: (data: SmartContractData | null) => void;
};

export const useSmartContractStore = create<CreateSmartContractStore>()(
  devtools(
    persist(
      (set) => ({
        smartContactData: null,
        setSmartContactData: (data) => set({ smartContactData: data }),
      }),
      { name: "smartContactData" },
    ),
  ),
);
