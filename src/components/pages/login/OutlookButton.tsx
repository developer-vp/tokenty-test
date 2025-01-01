"use client";

import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const OutlookButton = () => {
  return (
    <Button
      className="flex w-full items-center justify-center border border-[#ebebeb] bg-transparent py-6 text-[#202123] hover:bg-transparent"
      onClick={() => signIn("azure-ad", { callbackUrl: "/" })}
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
  );
};

export default OutlookButton;
