import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "@/components/ui/button";
import { Roles } from "@/lib/enums/roles";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import Cookies from "js-cookie";
import { useRegisterButtonsStore } from "@/store/RegisterStore";
import { useRouter } from "next/navigation";

const CompanyGoogleLogin = ({ isManager }: { isManager: string }) => {
  const buttonDisabled = useRegisterButtonsStore(
    (state) => state.registerButtonDisabled,
  );
  const setButtonDisabled = useRegisterButtonsStore(
    (state) => state.setRegisterButtonDisabled,
  );
  const router = useRouter();

  return (
    <div className="w-full">
      <Button
        className="flex w-full items-center justify-center border border-[#ebebeb] bg-transparent py-6 text-[#202123] hover:bg-transparent"
        onClick={() => {
          setButtonDisabled(true);
          const companyData = Cookies.get("register-company-data");
          if (!companyData) {
            router.push("/company-register?page=1");
            return;
          }

          Cookies.set("role", Roles.company, { path: "/" });
          signIn("google", { callbackUrl: "/create-project" });
        }}
        disabled={isManager === "No" || buttonDisabled}
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
  );
};

export default CompanyGoogleLogin;
