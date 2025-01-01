import { cn } from "@/lib/utils";
import React from "react";

const MemberSelectSkeleton = () => {
  return (
    <div className={cn("flex items-center")}>
      <div className="rounded-lg bg-white px-4 py-3 leading-[50px] shadow-md">
        <span className="mr-4 text-sm">The Royality Owner is: </span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm border px-4 py-2 text-sm font-semibold text-black",
          )}
        >
          Loading...
        </span>
      </div>
    </div>
  );
};

export default MemberSelectSkeleton;

export const MemberSelectError = () => {
  return (
    <div className={cn("flex items-center")}>
      <div className="rounded-lg bg-white px-4 py-3 leading-[50px] shadow-md">
        <span className="mr-4 text-sm">The Royality Owner is: </span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm border border-red-500 px-4 py-2 text-sm font-semibold text-black",
          )}
        >
          No Members
        </span>
      </div>
    </div>
  );
};
