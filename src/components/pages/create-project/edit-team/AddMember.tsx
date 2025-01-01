"use client";
import NameSelect from "@/components/molecules/Payments-Components/NameSelect";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Roles } from "@/lib/enums/roles";
import { X } from "lucide-react";

const AddMember = () => {
  const [active, setActive] = useState(Roles.holder as string);
  const [members, setMembers] = useState();

  return (
    <div className="mt-5 flex flex-col gap-2">
      <h2 className="font-semibold text-[#606060]">Members list</h2>

      <div className="text-sm">
        {enteries.map((Item, idx) => {
          return (
            <div key={idx} className="">
              <span>{idx + 1}:</span>
              <span className="mx-3">{Item.email}</span>
              <span>{Item.role}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        <div className="flex min-w-max justify-center rounded-lg border border-gray-300 px-0.5 py-1">
          <Input
            type="text"
            placeholder="jbeinesfurcada@gmail.com"
            className="border-none p-2 shadow-none ring-0 focus-visible:ring-transparent sm:w-72 md:w-96"
          />

          <div className="flex-1">
            <Select onValueChange={setActive}>
              <SelectTrigger className="w-full border-0 font-bold shadow-none !outline-none !ring-0 [&_svg]:ml-2 [&_svg]:mt-[1px]">
                {active}
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value={Roles.holder}>Holder</SelectItem>
                  <SelectItem value={Roles.manager}>Manager</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <X size={18} className="cursor-pointer text-foreground/50" />
      </div>
    </div>
  );
};

export default AddMember;

const enteries = [
  { email: "testemail1@gmail.com", role: Roles.holder },
  { email: "testemail2@gmail.com", role: Roles.manager },
  { email: "testemail3@gmail.com", role: Roles.manager },
  { email: "testemail4@gmail.com", role: Roles.holder },
  { email: "testemail5@gmail.com", role: Roles.manager },
];
