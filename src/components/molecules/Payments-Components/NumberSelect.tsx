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

const NumberSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-12 font-bold">
        <SelectValue placeholder="1" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>1</SelectLabel>
          <SelectItem value="one">1</SelectItem>
          <SelectItem value="two">2</SelectItem>
          <SelectItem value="three">3</SelectItem>
          <SelectItem value="four">4</SelectItem>
          <SelectItem value="five">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default NumberSelect;
