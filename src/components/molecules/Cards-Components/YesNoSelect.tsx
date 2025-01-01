import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const YesNoSelect = () => {
  const [defaultvalue, setDefaultvalue] = useState(false);

  const defaultHandle = () => {
    setDefaultvalue(!defaultvalue);
    console.log("test click on function", defaultvalue);
  };
  return (
    <Select>
      <SelectTrigger id="rootaccount" className="w-24 border border-[#ebebeb]">
        <SelectValue placeholder="No" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem onChange={() => defaultHandle} value="yes">
          yes
        </SelectItem>
        <SelectItem onChange={() => defaultHandle} value="no">
          no
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
export default YesNoSelect;
