import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
const UPNavbar = () => {
  return (
    <div className="w-[85%] lg:w-[70%]">
      <nav className="relative hidden h-12 items-center gap-5 rounded-3xl bg-white shadow-[0px_0px_4px_3px_#4f4f4f10] md:flex">
        <Link
          href={"/"}
          className="absolute -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 shadow-[0px_0px_3px_1px_#4f4f4f20] transition-all duration-150 hover:shadow-none"
        >
          <ChevronLeft size={18} className="text-foreground" />
        </Link>

        <h2 className="absolute left-12 text-base font-bold">
          Upcoming payments
        </h2>
      </nav>
    </div>
  );
};
export default UPNavbar;
