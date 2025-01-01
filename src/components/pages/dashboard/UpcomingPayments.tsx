import { getSession } from "@/auth";
import { Card, CardContent } from "@/components/ui/card";
import { Roles } from "@/lib/enums/roles";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const UpcomingPayments = async ({ className }: { className?: string }) => {
  const session = await getSession();
  let url = "/upcoming-payment";
  if (session?.user.role === Roles.holder) {
    url = "/view-smart-contract/id";
  }
  return (
    <Card className={cn("col-span-1 h-32", className)}>
      <CardContent className="flex h-full w-full flex-col justify-between p-3">
        <div className="flex items-center justify-between">
          <Link
            href={url}
            className="flex h-5 items-center justify-center rounded-lg bg-muted-foreground/10 px-3 text-[10px]"
          >
            view
          </Link>

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted-foreground/10 p-1.5">
            <Clock strokeWidth={2.8} className="text-muted-foreground/60" />
          </div>
        </div>

        <div className="">
          <h2 className="text-xl font-[800]">2</h2>
          <p className="text-[10px] leading-3">
            Upcoming <br /> Payments
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingPayments;
