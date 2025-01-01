import { ChevronLeft } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EditTeamNavbar = () => {
  return (
    <div className="">
      <nav className="relative hidden h-12 items-center gap-5 rounded-3xl bg-white shadow-[0px_0px_4px_3px_#4f4f4f10] md:flex">
        <Link
          href={"/create-project"}
          className="absolute -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f6f6] shadow-[0px_0px_3px_1px_#4f4f4f20] transition-all duration-150 hover:shadow-none"
        >
          <ChevronLeft size={18} className="text-[#d1d1d1]" />
        </Link>

        <h2 className="absolute left-12 text-base font-bold">
          Edit team members
        </h2>
        <div className="absolute right-2 flex items-center gap-3">
          <Link href={"/"}>
            <Button className="flex w-16 gap-2 rounded-3xl border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent md:w-24">
              save
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default EditTeamNavbar;
