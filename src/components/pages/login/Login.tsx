import React from "react";
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
import Link from "next/link";
import GoogleButton from "./GoogleButton";
import OutlookButton from "./OutlookButton";
import LoginError from "./LoginError";

const Login = () => {
  return (
    <div className="relative mx-5 flex h-[100vh] items-center justify-center md:mx-0">
      <Card className="w-[400px] border-none px-3 shadow-md">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="mt-5 h-12 w-12">
            <Image
              src={ImageAssets.Base.Logo}
              alt="Tokenty Logo"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <p className="text-xs text-[#202123]">Almost there!</p>
        </div>

        <CardHeader className="flex-row items-center gap-2 space-y-0 px-6 py-4">
          <UserRoundCheck size={20} className="" />
          <CardTitle className="font-semibold">Your account</CardTitle>
        </CardHeader>
        <div className="px-6 pb-6 text-sm text-[#202123]">
          Choose one of the following to sign in
        </div>

        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="w-full">
              <GoogleButton />
            </div>

            <div className="w-full">
              <OutlookButton />
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-3 flex justify-between">
          <Link href={"/signin"}>
            <Button variant="outline" className="border border-[#ebebeb]">
              Back
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <LoginError />
    </div>
  );
};
export default Login;
