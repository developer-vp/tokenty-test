import React from "react";
import { cn } from "@/lib/utils";
import { SmartContractData } from "@/lib/Interfaces/SmartContractInterface";

const Member = ({ data }: { data: SmartContractData }) => {
  return (
    <div className="rounded-lg bg-white px-4 py-3 leading-[50px] shadow-md">
      <span className="mr-4 text-sm">The Royality Owner is: </span>

      <span
        className={cn(
          "inline-flex items-center whitespace-nowrap rounded-sm border bg-white px-4 py-1.5 text-sm font-semibold text-black",
        )}
      >
        John
      </span>
    </div>
  );
};

export default Member;
