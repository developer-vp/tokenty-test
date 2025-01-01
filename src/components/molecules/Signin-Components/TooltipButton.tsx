"use client";
import React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useSigninStore } from "@/store/UtilsStore";
import Cookies from "js-cookie";

const TooltipButton = ({
  trigger,
  TriggerIcon,
  url,
  tooltipText,
  className,
  tooltipClassName,
  RoleWhileSignin,
}: {
  trigger: string;
  TriggerIcon: React.ForwardRefExoticComponent<any>;
  url: string;
  tooltipText: string;
  className?: string;
  tooltipClassName?: string;
  RoleWhileSignin: "holder" | "manager";
}) => {
  const setRoleWhileSignin = useSigninStore(
    (state) => state.setRoleWhileSignin,
  );

  return (
    <TooltipProvider delayDuration={400}>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={url}
            onClick={() => {
              setRoleWhileSignin(RoleWhileSignin);
              Cookies.set("role", RoleWhileSignin, { path: "/" });
            }}
            className={cn(
              "flex items-center justify-center gap-3 rounded-lg border border-transparent py-3 transition-all duration-300 hover:cursor-pointer",
              className,
            )}
          >
            <TriggerIcon size={15} className="mb-1" />
            <p className="text-lg">{trigger}</p>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          className={cn(
            "hidden bg-white px-4 py-3 text-black md:block",
            tooltipClassName,
          )}
        >
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipButton;
