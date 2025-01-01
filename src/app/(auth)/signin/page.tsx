"use client";
import React from "react";
import { Building2, User2 } from "lucide-react";
import Link from "next/link";
import TooltipButton from "@/components/molecules/Signin-Components/TooltipButton";
import { cn } from "@/lib/utils";
import MobileTooltip from "@/components/molecules/Signin-Components/MobileTooltip";
import { Roles } from "@/lib/enums/roles";
import Cookies from "js-cookie";

const SignIn = () => {
  return (
    <section className="h-screen bg-black">
      <section
        className={cn(
          "relative text-white",
          "h-[calc(100vh-55px)] overflow-hidden",
        )}
      >
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center md:left-auto md:right-[15%] md:translate-x-0">
          <h1 className="text-4xl font-bold">Sign in</h1>

          <h2 className="mt-2 text-sm font-semibold">Welcome to Tokenty!</h2>

          <ToolTipButtonsGroup />

          <div className="mt-5 flex h-8 w-[200px] items-center justify-center">
            <Link
              href={"/company-register?page=1"}
              onClick={() => Cookies.set("role", Roles.company, { path: "/" })}
              className="cursor-pointer font-medium transition-all duration-300 hover:text-lg"
            >
              Register Company
            </Link>
          </div>
          {/* <div className="mt-2 flex w-[200px] items-center justify-center text-gray-500">
            <Link
              href={"/login"}
              onClick={() => Cookies.set("role", Roles.company, { path: "/" })}
              className="cursor-pointer font-medium"
            >
              Signin Company
            </Link>
          </div> */}
        </div>
        <MobileTooltip />
      </section>
    </section>
  );
};

export default SignIn;

const ToolTipButtonsGroup = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <TooltipButton
        trigger="Manager"
        TriggerIcon={Building2}
        url="/login"
        tooltipText="You will create Smart Contracts and pay your holders"
        className="mt-7 w-[320px] bg-neutral-800/90 hover:border-white md:w-[220px]"
        tooltipClassName="max-w-[220px] mt-7 "
        RoleWhileSignin={Roles.manager}
      />

      <TooltipButton
        trigger="Holder"
        TriggerIcon={User2}
        url="/login"
        tooltipText="You will sign Smart Contracts to receive your tokens and
                royalties"
        className="mt-5 w-[320px] bg-neutral-800/90 hover:border-white md:w-[220px]"
        tooltipClassName="max-w-[220px] mt-5"
        RoleWhileSignin={Roles.holder}
      />
    </div>
  );
};
