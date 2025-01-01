"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { SmartContractData } from "@/lib/Interfaces/SmartContractInterface";
import { Time } from "@/lib/enums/utils";

const EditSCComponent = ({
  page,
  createQueryString,
  handleFinishButton,
  handleNextButton,
  handleBackButton,
}: {
  page: string;
  createQueryString: (name: string, value: string) => string;
  handleNextButton: () => void;
  handleFinishButton: () => void;
  handleBackButton: () => void;
}) => {
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
          {page === "1" && (
            <Page1
              createQueryString={createQueryString}
              data={data}
              setData={setData}
            />
          )}
          {page === "2" && (
            <Page2
              createQueryString={createQueryString}
              data={data}
              setData={setData}
            />
          )}
          {page === "3" && (
            <Page3
              createQueryString={createQueryString}
              data={data}
              setData={setData}
            />
          )}
        </div>
      </div>

      <div className="my-5 flex items-center gap-4 md:hidden">
        <Button
          onClick={handleBackButton}
          className="flex h-9 w-9 rounded-full border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent"
        >
          <ChevronLeft size={18} className="text-foreground" />
        </Button>

        {page !== "3" && (
          <Button
            className="flex h-9 w-9 rounded-full border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent"
            onClick={handleNextButton}
          >
            <ChevronRight size={18} />
          </Button>
        )}

        <Button
          className="flex h-9 rounded-full border-gray-100 bg-[#f7f6f6] px-8 font-semibold text-black hover:bg-transparent"
          onClick={handleFinishButton}
          disabled={page !== "3"}
        >
          Finish
        </Button>
      </div>
    </>
  );
};
export default EditSCComponent;
