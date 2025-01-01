import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "@/components/ui/button";
import { Roles } from "@/lib/enums/roles";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import Cookies from "js-cookie";
import { useRegisterButtonsStore } from "@/store/RegisterStore";

const CompanyOutlookLogin = ({ isManager }: { isManager: string }) => {
  const buttonDisabled = useRegisterButtonsStore(
    (state) => state.registerButtonDisabled,
  );
  const setButtonDisabled = useRegisterButtonsStore(
    (state) => state.setRegisterButtonDisabled,
  );
  return (
    <div className="w-full">
      <Button
        className="flex w-full items-center justify-center border border-[#ebebeb] bg-transparent py-6 text-[#202123] hover:bg-transparent"
        onClick={() => {
          setButtonDisabled(true);
          Cookies.set("role", Roles.manager, { path: "/" });
          signIn("azure-ad", { callbackUrl: "/create-project" });
        }}
        disabled={isManager === "No" || buttonDisabled}
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
  );
};

export default CompanyOutlookLogin;
