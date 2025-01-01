import React from "react";
import { cn } from "@/lib/utils";
import { SmartContractData } from "@/lib/Interfaces/SmartContractInterface";

const Royality = ({ data }: { data: SmartContractData }) => {
  return (
    <div className="rounded-lg bg-white px-4 py-3 leading-[50px] shadow-md">
      <span className="mr-4 text-sm">
        The first royality will be paid after
      </span>

      <span
        className={cn(
          "mr-4 inline-flex items-center whitespace-nowrap rounded-sm border bg-white px-4 py-1.5 text-sm font-semibold text-black",
        )}
      >
        1
      </span>

      <span
        className={cn(
          "inline-flex items-center whitespace-nowrap rounded-sm border bg-white px-4 py-1.5 text-sm font-semibold text-black",
        )}
      >
        Month
      </span>

      <span className="mx-4 text-sm">
        of the present smart contract signature.
      </span>

      <br />

      <span className="mr-4 text-sm">
        The first royality will be paid after
      </span>

      <span
        className={cn(
          "inline-flex items-center whitespace-nowrap rounded-sm border bg-white px-4 py-1.5 text-sm font-semibold text-black",
        )}
      >
        Month
      </span>

      <span className="mx-4 text-sm">during next</span>

      <span
        className={cn(
          "mr-4 inline-flex items-center whitespace-nowrap rounded-sm border bg-white px-4 py-1.5 text-sm font-semibold text-black",
        )}
      >
        1
      </span>

      <span
        className={cn(
          "inline-flex items-center whitespace-nowrap rounded-sm border bg-white px-4 py-1.5 text-sm font-semibold text-black",
        )}
      >
        Year
      </span>
    </div>
  );
};

export default Royality;
