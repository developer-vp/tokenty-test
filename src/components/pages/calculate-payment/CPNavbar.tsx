import { ChevronLeft } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";

const CPNavbar = ({ paymentID }: { paymentID: string }) => {
  return (
    <div className="w-[100%] lg:w-[95%]">
      <nav className="relative hidden h-12 items-center gap-5 rounded-3xl bg-white shadow-[0px_0px_4px_3px_#4f4f4f10] md:flex">
        <Link
          href={"/upcoming-payment"}
          className="absolute -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f6f6] shadow-[0px_0px_3px_1px_#4f4f4f20] transition-all duration-150 hover:shadow-none"
        >
          <ChevronLeft size={18} className="text-[#d1d1d1]" />
        </Link>

        <h2 className="absolute left-12 text-base font-bold">
          Doky Revenue Royalty for John
        </h2>
        <div className="absolute right-2 flex gap-2">
          <Link href={`/view-smart-contract/${paymentID}`}>
            <Button className="flex gap-2 rounded-3xl border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent">
              view smart contract
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default CPNavbar;
