"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideCalculator } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { cn } from "@/lib/utils";

const CPComponent = ({ paymentID }: { paymentID: string }) => {
  const [showpassword, setShowpassword] = useState(false);

  const handleToggle = () => {
    setShowpassword(!showpassword);
  };

  const [input, setInput] = useState<number>();

  return (
    <div className="mb-5">
      <div className="rounded-lg bg-[#f7f6f6] px-4 py-3 leading-[40px] shadow-md md:py-5">
        <span className="text-sm">
          Your smart document established a Royalty fee of
        </span>

        <span
          className={cn(
            "mx-4 inline-flex items-center whitespace-nowrap rounded-sm border bg-white px-2 pr-3 text-sm font-semibold text-black",
            {
              "border-red-600": input === undefined || input > 100 || input < 0,
            },
          )}
        >
          <Input
            value={input}
            onChange={(e) => setInput(parseInt(e.target.value))}
            placeholder="20"
            type="number"
            className={cn(
              "mx-auto inline w-8 rounded-sm border-0 bg-white px-0 text-center shadow-none !outline-none !ring-0",
              /**
               * removing arrows of input field
               */
              "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            )}
          />
          <span>%</span>
        </span>

        <span className="text-sm">of the</span>

        <span className="mx-4 whitespace-nowrap rounded-sm border bg-white px-4 py-2 text-sm font-semibold text-black">
          Revenue
        </span>

        <span className="text-sm">generated by the revenue stream</span>

        <span className="mx-4 whitespace-nowrap rounded-sm border bg-white px-4 py-2 text-sm font-semibold text-black">
          Doky Application
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2.5">
        <LucideCalculator size={18} className="" />
        <h2 className="text-sm font-bold md:text-base md:font-semibold">
          Calculate your final payment
        </h2>
      </div>

      <div className="mt-4 flex flex-col gap-5 md:mt-5 md:flex-row">
        <div className="md:max-w-[250px]">
          <h2 className="mb-3 text-sm">
            Please insert the total revenue generated by Doky Application this
            month:
          </h2>

          {/* TooltipButton shown on hover */}
          <TooltipProvider>
            <Tooltip disableHoverableContent>
              <TooltipTrigger className="relative w-[80%]">
                <Input type="text" className="w-full bg-white p-5" />

                <div
                  className="absolute right-3 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
                  onClick={handleToggle}
                >
                  {showpassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </div>
              </TooltipTrigger>
              <TooltipContent className="absolute -left-36 top-14 w-72 rounded-md border bg-white">
                <p className="hidden text-sm text-black md:block">
                  Your data is completely private and used only for
                  calculations. Tokenty has no access to this information
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="mx-auto mt-5 w-20 md:mx-0 md:mt-0">
          <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0px_0px_4px_3px_#4f4f4f10] transition-all duration-150 hover:shadow-[0px_0px_1px_1px_#4f4f4f10]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ebebeb]">
              <MoveRight size={18} className="" />
            </div>
          </div>
          <h2 className="mt-1 text-center text-xs font-bold md:mt-3 md:text-base md:font-semibold">
            Calculate
          </h2>
        </div>

        <div className="mt-5 flex flex-col gap-3 md:ml-10 md:mt-0 md:max-w-[170px]">
          <h2 className="text-sm">
            Based on your input, you will need to pay John:
          </h2>

          <Button className="w-[200px] bg-white p-5 font-semibold text-black hover:bg-white md:w-full">
            USD $2.000
          </Button>

          <Button className="w-[200px] bg-[#f7f6f6] p-5 font-semibold text-black hover:bg-white md:w-full">
            pay your builder
          </Button>
        </div>
      </div>

      <div className="mt-10 flex gap-3 md:hidden">
        <Link href="/upcoming-payment">
          <Button className="border-gray-100 bg-[#f7f6f6] font-semibold text-black shadow-[1px_1px_2px_1px_#4f4f4f40] hover:bg-[#f7f6f6] hover:shadow-none">
            back
          </Button>
        </Link>

        <Link href="/upcoming-payment">
          <Button className="border-gray-100 bg-[#f7f6f6] font-semibold text-black shadow-[1px_1px_2px_1px_#4f4f4f40] hover:bg-[#f7f6f6] hover:shadow-none">
            view smart contract
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default CPComponent;