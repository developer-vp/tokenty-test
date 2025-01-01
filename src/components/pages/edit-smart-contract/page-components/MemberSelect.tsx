import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SmartContractData } from "@/lib/Interfaces/SmartContractInterface";
import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";

const MemberSelect = ({
  data,
  setData,
  className,
}: {
  className?: string;
  data: SmartContractData;
  setData: Dispatch<SetStateAction<SmartContractData>>;
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="rounded-lg bg-white px-4 py-3 leading-[50px] shadow-md">
        <span className="mr-4 text-sm">The Royality Owner is: </span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm text-sm font-semibold text-black",
          )}
        >
          <Select
            onValueChange={(value) =>
              setData((prev) => ({ ...prev, owner: value }))
            }
          >
            <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
              <SelectValue placeholder="Select Member" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Team Members</SelectLabel>
                <SelectItem value="John" className="cursor-pointer">
                  John
                </SelectItem>
                <SelectItem value="David" className="cursor-pointer">
                  David
                </SelectItem>
                <SelectItem value="Arham" className="cursor-pointer">
                  Arham
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>
      </div>
    </div>
  );
};
export default MemberSelect;
