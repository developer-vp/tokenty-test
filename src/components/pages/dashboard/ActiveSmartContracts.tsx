import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Play, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const ActiveSmartContracts = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("flex min-h-56 flex-1 flex-col p-2", className)}>
      <CardHeader className="flex flex-row items-center gap-3 p-1 text-muted-foreground">
        <div className="flex items-center gap-1 rounded-md bg-secondary px-3 py-0.5">
          <Play size={10} className="fill-current" />
          <h3 className="text-sm font-bold">2</h3>
        </div>

        <p className="text pb-1.5 text-xs font-bold">Active Smart Contracts</p>
      </CardHeader>

      <CardContent className="flex-1 px-3 py-2">
        <ScrollArea className="h-40">
          {ActiveSmartContractsData.length === 0 && (
            <p className="mt-1 text-xs text-muted-foreground/80">
              You don't have any Smart Contracts active
            </p>
          )}
          {ActiveSmartContractsData.map((item, i) => {
            return (
              <div
                key={i}
                className={cn(
                  "mx-auto mb-2 w-full rounded-sm border bg-gradient-to-r px-4 py-2 text-muted-foreground text-white",
                  i % 2 === 0
                    ? "from-[rgb(185,28,50)] to-[rgb(237,61,10)]"
                    : "from-[rgb(238,62,20)] to-[rgb(240,147,44)]",
                )}
              >
                <p className="text text-[11px] font-bold">
                  {item.contractName}
                </p>
                <p className="text text-[10px] font-medium">
                  {item.personName}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActiveSmartContracts;

const ActiveSmartContractsData: {
  contractName: string;
  personName: string;
}[] = [
  { contractName: "Employee Retention", personName: "Thomas" },
  { contractName: "Sales Compansation", personName: "David" },
  { contractName: "Employee Retention", personName: "Thomas" },
  { contractName: "Sales Compansation", personName: "David" },
  { contractName: "Employee Retention", personName: "Thomas" },
  { contractName: "Sales Compansation", personName: "David" },
  { contractName: "Employee Retention", personName: "Thomas" },
  { contractName: "Sales Compansation", personName: "David" },
];
