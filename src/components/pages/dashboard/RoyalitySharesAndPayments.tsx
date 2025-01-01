import { Card } from "@/components/ui/card";
import { DollarSign, Percent } from "lucide-react";
import React from "react";
import DoughnutChart from "./DoughnutChart";
import { cn } from "@/lib/utils";

const RoyalitySharesAndPayments = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("col-span-2 grid h-32 grid-cols-2", className)}>
      <RoyaltyChart />
      <Payments />
    </Card>
  );
};

export default RoyalitySharesAndPayments;

const RoyaltyChart = () => {
  return (
    <div className="col-span-1 h-32">
      <div className="flex h-full w-full flex-col justify-between p-3">
        <div className="relative">
          <DoughnutChart
            royaltyShare={25}
            className=""
            chartWidth="72%"
            textClassName="ml-[2px]"
          />

          <div className="absolute right-3 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-muted-foreground/10 p-2">
            <Percent strokeWidth={2.8} className="text-muted-foreground/60" />
          </div>
        </div>

        <div className="">
          <p className="text-[10.5px] font-medium leading-3">Royalty Shared</p>
        </div>
      </div>
    </div>
  );
};

const Payments = () => {
  return (
    <div className="col-span-1 h-32">
      <div className="flex h-full w-full flex-col justify-between p-3">
        <div className="flex justify-end">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted-foreground/10 p-1.5">
            <DollarSign
              strokeWidth={2.8}
              className="text-muted-foreground/60"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-semibold leading-3">USD</p>
          <h2 className="text-xl font-[800]">$2.500</h2>
          <p className="mt-1 text-[10px] leading-3">Payments</p>
        </div>
      </div>
    </div>
  );
};
