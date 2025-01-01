"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "@/components/ui/button";
import { UserRoundCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CompanyGoogleLogin from "./CompanyGoogleLogin";
import CompanyOutlookLogin from "./CompanyOutlookLogin";
import Rscreen2Tooltip from "./Rscreen2Tooltip";
import Rscreen2Choice from "./Rscreen2Choice";
import RegisterErrors from "./RegisterErrors";

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
            <Rscreen2Choice isManager={isManager} setIsManager={setIsManager} />

            <Rscreen2Tooltip />
          </div>
        </div>

        <CardContent>
          <div className="grid w-full items-center gap-4">
            <CompanyGoogleLogin isManager={isManager} />

            <CompanyOutlookLogin isManager={isManager} />
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

      <RegisterErrors />
    </div>
  );
};
export default Rscreen2;
