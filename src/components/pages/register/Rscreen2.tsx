"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "@/components/ui/button";
import { CircleAlert, UserRoundCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import GoogleButton from "../login/GoogleButton";
import OutlookButton from "../login/OutlookButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn } from "next-auth/react";
import Cookies from "js-cookie";
import { Roles } from "@/lib/enums/roles";

const Rscreen2 = ({ handleBackButton }: { handleBackButton: () => void }) => {
  const [isManager, setIsManager] = useState("No");

  return (
    <div className="relative mx-5 flex h-[85vh] items-center justify-center md:mx-0 md:h-[100vh]">
      <Card className="w-[400px] border-none px-3 shadow-md">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="mt-5 h-12 w-12">
            <Image
              src={ImageAssets.Base.Logo}
              alt="Tokenty Logo"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <p className="text-xs text-[#202123]">
            Almost there! Add your email account
          </p>
        </div>

        <div className="mx-6 mb-2 mt-5 flex items-center gap-1">
          <div className="h-4 flex-1 rounded-l-[6px] bg-gradient-to-r from-[rgb(160,13,68)] to-[rgb(232,65,0)]"></div>
          <div className="h-4 flex-1 rounded-r-[6px] bg-gradient-to-r from-[rgb(238,62,20)] to-[rgb(240,147,44)]"></div>
        </div>

        <CardHeader className="flex-row items-center gap-2 space-y-0 px-6 py-4">
          <UserRoundCheck size={20} className="" />
          <CardTitle className="font-semibold">Root account</CardTitle>
        </CardHeader>
        <div className="flex items-center justify-between px-6 pb-6 text-xs text-[#202123]">
          <p className="w-[40%] leading-[14px]">
            Are you authorized to legally represent your company for this
            registration?
          </p>

          <div className="flex items-center gap-2">
            <Select value={isManager} onValueChange={setIsManager}>
              <SelectTrigger id="framework" className="w-20 rounded-[6px]">
                {isManager}
              </SelectTrigger>

              <SelectContent position="popper">
                <SelectItem className="cursor-pointer" value="No">
                  No
                </SelectItem>
                <SelectItem className="cursor-pointer" value="Yes">
                  Yes
                </SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none ring-0">
                <CircleAlert
                  size={20}
                  className="rotate-180 fill-foreground/70 text-white"
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="mr-4 w-72" sideOffset={10}>
                <DropdownMenuItem className="bg-white p-3 text-black focus:bg-white md:p-4">
                  You need to be a manager to create Smart Contracts as they are
                  a legal binding agreement between your company and your value
                  creator. You will need to authorize payments through your
                  company{`'`}s wallet.
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="w-full">
              <Button
                className="flex w-full items-center justify-center border border-[#ebebeb] bg-transparent py-6 text-[#202123] hover:bg-transparent"
                onClick={() => {
                  Cookies.set("role", Roles.manager, { path: "/" });
                  signIn("google", { callbackUrl: "/" });
                }}
                disabled={isManager === "No"}
              >
                <div className="h-7 w-7">
                  <Image
                    src={ImageAssets.Base.Google}
                    alt="Google Logo"
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                Google account
              </Button>
            </div>

            <div className="w-full">
              <Button
                className="flex w-full items-center justify-center border border-[#ebebeb] bg-transparent py-6 text-[#202123] hover:bg-transparent"
                onClick={() => {
                  Cookies.set("role", Roles.manager, { path: "/" });
                  signIn("azure-ad", { callbackUrl: "/" });
                }}
                disabled={isManager === "No"}
              >
                <div className="h-7 w-7">
                  <Image
                    src={ImageAssets.Base.Outlook}
                    alt="Outlook Logo"
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                Outlook account
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-3 flex justify-between">
          <Button
            variant="outline"
            className="border border-[#ebebeb]"
            onClick={handleBackButton}
          >
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Rscreen2;
