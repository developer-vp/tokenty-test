import { Plus, UserRoundPlus, X } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NameSelect from "@/components/molecules/Payments-Components/NameSelect";
import { Input } from "@/components/ui/input";
import AddMember from "./AddMember";

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

      <AddMember />

      <div className="mt-2 flex items-center gap-2.5">
        <Plus size={18} className="cursor-pointer" />
        <h2 className="text-base text-[#7a7a7a]">Add more</h2>
      </div>

      <div className="mt-5 flex items-center gap-3 md:hidden">
        <Link href="/create-project">
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
