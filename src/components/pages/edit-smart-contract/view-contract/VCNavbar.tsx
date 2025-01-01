import React from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const VCNavbar = () => {
  return (
    <div className="lg:w-[76%]">
      <nav className="relative hidden h-12 w-full items-center gap-5 rounded-3xl bg-white shadow-[0px_0px_4px_3px_#4f4f4f10] md:flex">
        <Link
          href={"/edit-smart-contract?page=3"}
          className={cn(
            "absolute -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f6f6]",
            "shadow-[0px_0px_3px_1px_#4f4f4f20] transition-all duration-150 hover:bg-[#f7f6f6] hover:shadow-none",
          )}
        >
          <ChevronLeft size={18} className="text-[#d1d1d1]" />
        </Link>

        <h2 className="absolute left-12 text-base font-semibold">
          Doky Revenue Smart Contract for John
        </h2>
        <div className="absolute right-2 flex gap-3">
          <Button className="w-20 rounded-3xl border-gray-100 bg-transparent font-semibold text-black hover:bg-transparent md:w-24">
            export
          </Button>

          <Link href={"/edit-smart-contract/success"}>
            <Button className="flex gap-2 rounded-3xl border-gray-100 bg-[#f7f6f6] px-8 font-semibold text-black hover:bg-transparent">
              Sign
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default VCNavbar;
