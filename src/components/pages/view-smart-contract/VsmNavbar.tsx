"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const VsmNavbar = ({ ContractID }: { ContractID: string }) => {
  return (
    <div className="w-[95%]">
      <div className="relative hidden h-12 items-center gap-5 rounded-3xl bg-white shadow-[0px_0px_4px_3px_#4f4f4f10] md:flex">
        <Link
          href={`/calculate-payment/${ContractID}`}
          className="absolute -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f6f6] shadow-[0px_0px_3px_1px_#4f4f4f20] transition-all duration-150 hover:bg-[#f7f6f6] hover:shadow-none"
        >
          <ChevronLeft size={18} className="text-foreground" />
        </Link>

        <h2 className="absolute left-12 text-base font-bold">
          Doky Revenue Royalty for John
        </h2>

        <div className="absolute right-2 flex items-center gap-4">
          <Link href={`/calculate-payment/${ContractID}`}>
            <Button className="flex gap-2 rounded-3xl border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent">
              <ChevronLeft size={18} className="text-foreground" /> Back to
              Payment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VsmNavbar;
