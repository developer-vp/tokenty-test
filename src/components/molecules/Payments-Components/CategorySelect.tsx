import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const CategorySelect = () => {
  return (
    <Select>
      <SelectTrigger id="framework" className="flex-1 border-[#aaaaaa]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="aus">Category 1</SelectItem>
        <SelectItem value="eng">Category 1</SelectItem>
        <SelectItem value="swit">Category 1</SelectItem>
        <SelectItem value="new">Category 1</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default CategorySelect;
