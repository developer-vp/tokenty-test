import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const IndustrySelect = ({ value, onChange }: any) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger id="framework" className="flex-1 border-[#aaaaaa]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="it">IT</SelectItem>
        <SelectItem value="insurance">Insurance</SelectItem>
        <SelectItem value="bank">Banking</SelectItem>
        <SelectItem value="teach">Teaching</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default IndustrySelect;
