import { Plus, UserRoundPlus, X } from "lucide-react";
import React from "react";
import { Input } from "../../ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NameSelect from "@/components/molecules/Payments-Components/NameSelect";

const EditTeamComponent = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-3">
        <UserRoundPlus
          size={20}
          className="font-semibold text-foreground"
          strokeWidth={2.8}
        />
        <h2 className="font-bold text-[#444444] sm:font-semibold">
          Add team members to your project
        </h2>
      </div>

      <p className="text-sm text-[#444444]">
        An email invitation will be sent to every team member when you click on
        save
      </p>

      <div className="mt-5 flex flex-col gap-2">
        <h2 className="font-semibold text-[#606060]">Members list</h2>

        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex min-w-max justify-center rounded-lg border border-gray-300 px-0.5 py-1">
            <Input
              type="text"
              placeholder="jbeinesfurcada@gmail.com"
              className="border-none p-2 shadow-none ring-0 focus-visible:ring-transparent sm:w-72 md:w-96"
            />

            <div className="flex-1">
              <NameSelect />
            </div>
          </div>

          <X size={18} className="cursor-pointer text-foreground/50" />
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2.5">
        <Plus size={18} className="cursor-pointer" />
        <h2 className="text-base text-[#7a7a7a]">Add more</h2>
      </div>

      <div className="mt-5 flex items-center gap-3 md:hidden">
        <Link href="/">
          <Button className="border-gray-100 bg-[#f7f6f6] font-semibold text-black shadow-[2px_2px_2px_1px_#4f4f4f40] transition-all duration-150 hover:bg-[#f7f6f6] hover:shadow-none">
            back
          </Button>
        </Link>

        <Link href="/">
          <Button className="border-gray-100 bg-[#f7f6f6] font-semibold text-black shadow-[2px_2px_2px_1px_#4f4f4f40] transition-all duration-150 hover:bg-[#f7f6f6] hover:shadow-none">
            save
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default EditTeamComponent;
