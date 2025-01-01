import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, DollarSign, Flame } from "lucide-react";
import React from "react";

const EquityObtained = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("col-span-1 h-32", className)}>
      <CardContent className="flex h-full w-full flex-col justify-between p-3">
        <div className="flex justify-end">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted-foreground/10 p-1.5">
            <DollarSign
              strokeWidth={2.8}
              className="text-muted-foreground/60"
            />
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-1">
            <h2 className="mb-4 text-3xl font-[800]">25%</h2>
            <ArrowRight
              size={16}
              className="rotate-[-45deg] text-[rgb(48,191,71)]"
            />
          </div>
          <p className="text-[10px] leading-3">Equity Obtained</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EquityObtained;
