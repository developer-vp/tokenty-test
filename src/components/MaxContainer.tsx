import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-2 md:px-10", className)}
    >
      {children}
    </div>
  );
};

export default MaxContainer;
