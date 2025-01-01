import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const EmployeeSelect = ({ value, onChange }: any) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id="framework" className="flex-1 border-[#aaaaaa]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="30">30</SelectItem>
        <SelectItem value="40">40</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default EmployeeSelect;
