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

const YearSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-24 flex-1 font-bold">
        <SelectValue placeholder="Year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Year</SelectLabel>
          <SelectItem value="23">2023</SelectItem>
          <SelectItem value="24">2024</SelectItem>
          <SelectItem value="25">2025</SelectItem>
          <SelectItem value="26">2026</SelectItem>
          <SelectItem value="27">2027</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default YearSelect;
