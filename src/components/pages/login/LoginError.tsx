"use client";
import { useSigninStore } from "@/store/UtilsStore";
import { CircleAlert } from "lucide-react";
import { useSearchParams } from "next/navigation";

const LoginError = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const RoleWhileSignin = useSigninStore((state) => state.roleWhileSignin);

  if (error)
    return (
      <p className="fixed bottom-7 right-7 flex gap-1 rounded-md border border-red-300 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">
        {/* <CircleAlert className="fill-red-600 text-white" size={18} />{" "} */}
        <span className="">
          Your Email is not registered{" "}
          {RoleWhileSignin === "holder" && <span>with Holders</span>}
          {RoleWhileSignin === "manager" && <span>with Managers</span>}
          {/* <br /> */}
          <span className="block text-xs font-normal text-foreground">
            Email: {error}
          </span>
        </span>
      </p>
    );
};

export default LoginError;
