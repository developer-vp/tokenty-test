import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Time } from "@/lib/enums/utils";
import { SmartContractData } from "@/lib/Interfaces/SmartContractInterface";
import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";

const RoyalityStatement = ({
  data,
  setData,
}: {
  data: SmartContractData;
  setData: Dispatch<SetStateAction<SmartContractData>>;
}) => {
  return (
    <div className="flex items-center">
      <div className="rounded-lg bg-white px-4 py-3 leading-[50px] shadow-md">
        <span className="mr-4 text-sm">
          The first royality will be paid after:{" "}
        </span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <Select
            onValueChange={(value) =>
              setData((prev) => ({ ...prev, num1: parseInt(value) }))
            }
          >
            <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
              <SelectValue placeholder="1" />
            </SelectTrigger>

            <SelectContent className="h-56">
              <SelectGroup>
                {["1", "2", "3", "4", "5", "5", "6", "7", "9", "10", "11"].map(
                  (Item, idx) => {
                    return (
                      <SelectItem
                        value={Item}
                        key={idx}
                        className="cursor-pointer"
                      >
                        {Item}
                      </SelectItem>
                    );
                  },
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <Select
            onValueChange={(value) =>
              setData((prev) => ({ ...prev, time1: value as Time }))
            }
          >
            <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
              <SelectValue placeholder="Month" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value={Time.Month} className="cursor-pointer">
                  {Time.Month}
                </SelectItem>
                <SelectItem value={Time.Year} className="cursor-pointer">
                  {Time.Year}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>

        <span className="mr-4 text-sm">
          of the present smart contract signature.
        </span>

        <br />

        <span className="mr-4 text-sm">The royality will be paid every</span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <Select
            onValueChange={(value) =>
              setData((prev) => ({ ...prev, time2: value as Time }))
            }
          >
            <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
              <SelectValue placeholder="Month" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value={Time.Month} className="cursor-pointer">
                  {Time.Month}
                </SelectItem>
                <SelectItem value={Time.Year} className="cursor-pointer">
                  {Time.Year}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>

        <span className="mr-4 text-sm">during next</span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <Select
            onValueChange={(value) =>
              setData((prev) => ({ ...prev, num2: parseInt(value) }))
            }
          >
            <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
              <SelectValue placeholder="1" />
            </SelectTrigger>

            <SelectContent className="h-56">
              <SelectGroup>
                {["1", "2", "3", "4", "5", "5", "6", "7", "9", "10", "11"].map(
                  (Item, idx) => {
                    return (
                      <SelectItem
                        value={Item}
                        key={idx}
                        className="cursor-pointer"
                      >
                        {Item}
                      </SelectItem>
                    );
                  },
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <Select
            onValueChange={(value) =>
              setData((prev) => ({ ...prev, time3: value as Time }))
            }
          >
            <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
              <SelectValue placeholder="Month" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value={Time.Month} className="cursor-pointer">
                  {Time.Month}
                </SelectItem>
                <SelectItem value={Time.Year} className="cursor-pointer">
                  {Time.Year}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>
      </div>
    </div>
  );
};
export default RoyalityStatement;
