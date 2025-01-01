import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const MonthSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-36 font-bold">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Month</SelectLabel>
          <SelectItem value="jan">January</SelectItem>
          <SelectItem value="feb">February</SelectItem>
          <SelectItem value="mar">March</SelectItem>
          <SelectItem value="apr">April</SelectItem>
          <SelectItem value="may">May</SelectItem>
          <SelectItem value="june">June</SelectItem>
          <SelectItem value="july">July</SelectItem>
          <SelectItem value="aug">August</SelectItem>
          <SelectItem value="sept">September</SelectItem>
          <SelectItem value="oct">October</SelectItem>
          <SelectItem value="nov">November</SelectItem>
          <SelectItem value="dec">December</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default MonthSelect;
