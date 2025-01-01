import PaymentStatement from "@/components/pages/edit-smart-contract/page-components/PaymentStatement";
import { SmartContractData } from "@/lib/Interfaces/SmartContractInterface";
import { CircleUser, Clock4, DollarSign } from "lucide-react";
import Link from "next/link";

import React, { Dispatch, SetStateAction } from "react";

const Page1 = ({
  createQueryString,
  data,
  setData,
}: {
  createQueryString: (name: string, value: string) => string;
  data: SmartContractData;
  setData: Dispatch<SetStateAction<SmartContractData>>;
}) => {
  return (
    <div className="mb-5 flex gap-4">
      <SideBar createQueryString={createQueryString} />

      <div className="flex w-full flex-col">
        <PaymentStatement data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Page1;

const SideBar = ({
  createQueryString,
}: {
  createQueryString: (name: string, value: string) => string;
}) => {
  return (
    <div className="hidden flex-col items-center md:flex">
      <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#9c1f4d] shadow-md">
        <DollarSign size={18} className="text-white" />
      </div>

      <div className="h-20 w-0.5 bg-[#c0c0c0] md:h-16"></div>

      <Link
        href={`/edit-smart-contract` + "?" + createQueryString("page", "2")}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-[#c0c0c0] bg-white"
      >
        <CircleUser size={18} className="text-[#c0c0c0]" />
      </Link>

      <div className="h-10 w-0.5 bg-[#c0c0c0]"></div>

      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#c0c0c0] bg-white">
        <Clock4 size={18} className="text-[#c0c0c0]" />
      </div>
    </div>
  );
};
