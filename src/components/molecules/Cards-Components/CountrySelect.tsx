import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const CountrySelect = ({ value, onChange }: any) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger id="framework" className="flex-1 border-[#aaaaaa]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="aus">Australia</SelectItem>
        <SelectItem value="eng">England</SelectItem>
        <SelectItem value="swit">Switzerland</SelectItem>
        <SelectItem value="new">NewZealand</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default CountrySelect;
