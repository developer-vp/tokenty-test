"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleUser, Clock4, DollarSign } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Payment from "./Payment";
import Member from "./Member";
import Royality from "./Royality";
import { Time } from "@/lib/enums/utils";
import { SmartContractData } from "@/lib/Interfaces/SmartContractInterface";

const VSMComponent = ({ ContractID }: { ContractID: string }) => {
  const [data, setData] = useState<SmartContractData>({
    percent: 0,
    isRevenue: true,
    stream: "",
    owner: "",
    num1: 1,
    time1: Time.Month,
    time2: Time.Month,
    num2: 1,
    time3: Time.Year,
  });

  return (
    <>
      <div className="my-2 flex gap-4">
        <div className="flex w-full flex-col">
          <div className="mb-5 flex gap-4">
            <Sidebar />

            <div className="flex w-full flex-col gap-5 md:w-auto">
              <Payment data={data} />
              <Member data={data} />
              <Royality data={data} />
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 flex items-center gap-4 md:hidden">
        <Link href={`/calculate-payment/${ContractID}`}>
          <Button className="flex h-10 rounded-2xl border-gray-100 bg-[#f7f6f6] px-5 font-semibold text-black hover:bg-transparent">
            Back to Payment
          </Button>
        </Link>
      </div>
    </>
  );
};

export default VSMComponent;

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
