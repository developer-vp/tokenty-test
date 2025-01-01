"use client";

import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "@/components/ui/button";
import { useLoginStore } from "@/store/LoginStore";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";
import { Roles } from "@/lib/enums/roles";

const OutlookButton = () => {
  const buttonDisabled = useLoginStore((state) => state.loginButtonDisabled);
  const setButtonDisabled = useLoginStore(
    (state) => state.setLoginButtonDisabled,
  );
  const router = useRouter();
  return (
    <Button
      className="flex w-full items-center justify-center border border-[#ebebeb] bg-transparent py-6 text-[#202123] hover:bg-transparent"
      onClick={() => {
        // const role = Cookies.get("role");
        // if (!role) {
        //   router.push("/signin");
        //   return;
        // }
        // setButtonDisabled(true);
        // signIn("google", { callbackUrl: "/" });

        /**
         * Below is only to enable company login, above is stable code
         */
        const role = Cookies.get("role");
        if (!role) {
          router.push("/signin");
          return;
        }
        setButtonDisabled(true);
        if (role === Roles.company) {
          signIn("azure-ad", { callbackUrl: "/create-project" });
          return;
        }
        signIn("azure-ad", { callbackUrl: "/" });
      }}
      disabled={buttonDisabled}
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
