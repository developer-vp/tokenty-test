"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectScrollDownButton,
} from "@/components/ui/select";
import React, { useState } from "react";

const NameSelect = () => {
  const [active, setActive] = useState("holder");

  return (
    <Select onValueChange={setActive}>
      <SelectTrigger className="w-full border-0 font-bold shadow-none !outline-none !ring-0 [&_svg]:ml-2 [&_svg]:mt-[1px]">
        {active}
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="holder">Holder</SelectItem>
          <SelectItem value="manager">Manager</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default NameSelect;
