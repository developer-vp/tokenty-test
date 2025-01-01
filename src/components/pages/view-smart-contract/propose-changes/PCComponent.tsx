"use client";
import PaymentStatement from "@/components/pages/edit-smart-contract/page-components/PaymentStatement";
import RoyalityStatement from "@/components/pages/edit-smart-contract/page-components/RoyalityStatement";
import MemberSelect from "@/components/pages/edit-smart-contract/page-components/MemberSelect";
import { CircleUser, Clock4, DollarSign } from "lucide-react";
import React, { useState } from "react";
import { SmartContractData } from "@/lib/Interfaces/SmartContractInterface";
import { ContractType, MonthOrYear, Time } from "@/lib/enums/utils";
import { createContractFormSchema } from "@/app/(with-sidebar)/(without-block-topRight-links)/edit-smart-contract/ContractPages";
import { z } from "zod";

const Page3 = ({ ContractID }: { ContractID: string }) => {
  const [data, setData] = useState<z.infer<typeof createContractFormSchema>>({
    name: "Edit Smart Contract name",
    percent: 0,
    type: ContractType.Revenue,
    revenueStream: "",
    holderEmail: "",
    first_payment_after_number: 1,
    first_payment_after_unit: MonthOrYear.Month,
    payment_frequency_unit: MonthOrYear.Month,
    payment_duration_number: 1,
    payment_duration_unit: MonthOrYear.Month,
  });

  return (
    <div className="mb-5 flex gap-4">
      <Sidebar />

      <div className="flex flex-col gap-5">
        <PaymentStatement form={form} />

        <MemberSelect form={form} />

        <RoyalityStatement form={form} />
      </div>
    </div>
  );
};

export default Page3;

const Sidebar = () => {
  return (
    <div className="hidden flex-col items-center md:flex">
      <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#9c1f4d] shadow-md">
        <DollarSign size={18} className="text-white" />
      </div>

      <div className="h-24 w-1 bg-[#9c1f4d] [@media(min-width:1180px)]:h-12"></div>

      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#ff6624] shadow-md">
        <CircleUser size={18} className="text-white" />
      </div>

      <div className="h-10 w-1 bg-[#ffa834]"></div>

      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#ffa834] shadow-md">
        <Clock4 size={18} className="text-white" />
      </div>
    </div>
  );
};