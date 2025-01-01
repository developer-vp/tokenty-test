import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const Rscreen2Choice = ({
  isManager,
  setIsManager,
}: {
  isManager: string;
  setIsManager: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Select value={isManager} onValueChange={setIsManager}>
      <SelectTrigger id="framework" className="w-20 rounded-[6px]">
        {isManager}
      </SelectTrigger>

      <SelectContent position="popper">
        <SelectItem className="cursor-pointer" value="No">
          No
        </SelectItem>
        <SelectItem className="cursor-pointer" value="Yes">
          Yes
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Rscreen2Choice;
