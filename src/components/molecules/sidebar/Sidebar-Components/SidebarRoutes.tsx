"use client";
import { SidebarRoutesArray } from "@/lib/SidebarRoutesArray";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SidebarRoutes = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="mt-14 flex w-full flex-col gap-5">
      {SidebarRoutesArray.map((Item, i) => {
        return (
          <div
            key={i}
            onClick={() => router.push(Item.url)}
            className="flex cursor-pointer items-center justify-between"
          >
            <div
              className={cn(
                "ml-[2px] h-10 w-[5px] rounded-2xl bg-transparent",
                pathName === Item.url && "bg-primary",
              )}
            />

            <div className="h-7 w-7">
              <Item.Icon
                className={cn(
                  "text-muted-foreground",
                  pathName === Item.url && "text-primary",
                )}
              />
            </div>

            {/* div below is only managing the spacing. Don't remove this! */}
            <div className="mr-[2px] h-10 w-[5px] rounded-2xl bg-transparent" />
          </div>
        );
      })}
    </div>
  );
};

export default SidebarRoutes;
