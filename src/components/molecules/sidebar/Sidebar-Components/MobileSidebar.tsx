"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageAssets } from "@/assets/ImageAssets";
import Image from "next/image";
import { SidebarRoutesArray } from "@/lib/SidebarRoutesArray";
import { usePathname, useRouter } from "next/navigation";

const MobileSidebar = ({ className }: { className: string }) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger className={cn("", className)}>
        <AlignLeft />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col items-center">
        {/* following is added just because shadcn required it in SheetContent. It is hidden btw */}
        <SheetTitle className="hidden" aria-disabled>
          This is hidden
        </SheetTitle>

        <div className="mt-10 h-20 w-20">
          <Image
            src={ImageAssets.Base.Logo}
            alt="Tokenty Logo"
            className="h-full w-full object-contain object-center"
          />
        </div>
        <h2 className="text-center text-xl font-bold">Tokenty</h2>

        <div className="mt-10 flex w-full flex-col gap-7">
          {SidebarRoutesArray.map((Item, i) => {
            return (
              <div
                key={i}
                onClick={() => router.push(Item.url)}
                className="flex cursor-pointer items-center"
              >
                <div
                  className={cn(
                    "h-10 w-[5px] rounded-2xl bg-transparent",
                    pathName === Item.url && "bg-primary",
                  )}
                />

                <div className="ml-10 flex items-center gap-5">
                  <div className="h-7 w-7">
                    <Item.Icon
                      className={cn(
                        "text-muted-foreground",
                        pathName === Item.url && "text-primary",
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "text-xl font-semibold",
                      pathName === Item.url && "text-primary",
                    )}
                  >
                    {Item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
