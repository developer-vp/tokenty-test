import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Flame } from "lucide-react";
import React from "react";

const ActivateRate = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("col-span-1 h-32", className)}>
      <CardContent className="flex h-full w-full flex-col justify-between p-3">
        <div className="flex justify-end">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted-foreground/10 p-1.5">
            <Flame strokeWidth={2.8} className="text-muted-foreground/60" />
          </div>
        </div>

        <div className="">
          <h2 className="text-xl font-[800]">100%</h2>
          <p className="text-[10px] leading-3">Active rate</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivateRate;
