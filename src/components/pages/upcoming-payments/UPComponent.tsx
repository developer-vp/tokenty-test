import MaxContainer from "@/components/MaxContainer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const UPComponent = () => {
  return (
    <MaxContainer className="mt-5 md:px-0">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {UpcomingPaymentsData.map((Item, i) => {
          return (
            <Link
              href={`/calculate-payment/${Item.id}`}
              key={i}
              className={cn(
                "mx-auto w-full rounded-sm bg-gradient-to-r px-4 py-3 text-muted-foreground text-white shadow-[2px_2px_5px_1px_#4f4f4f40] transition-all duration-200 hover:shadow-[1px_1px_3px_1px_#4f4f4f40] md:px-4",
                i % 2 === 0
                  ? "from-[rgb(185,28,50)] to-[rgb(237,61,10)]"
                  : "from-[rgb(238,62,20)] to-[rgb(240,147,44)]",
              )}
            >
              <p className="text-base font-bold">{Item.type}</p>
              <p className="text-sm font-medium">{Item.personName}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 md:hidden">
        <Link href="/">
          <Button className="border-gray-100 bg-[#f7f6f6] font-semibold text-black shadow-[2px_2px_2px_1px_#4f4f4f40] hover:bg-transparent hover:shadow-none">
            back
          </Button>
        </Link>
      </div>
    </MaxContainer>
  );
};
export default UPComponent;

const UpcomingPaymentsData = [
  {
    id: "payment1",
    type: "Employee Retention",
    personName: "Thomas",
  },
  {
    id: "payment2",
    type: "Sales Compensation",
    personName: "David",
  },
];
