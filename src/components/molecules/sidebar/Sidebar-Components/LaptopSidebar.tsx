import Image from "next/image";
import React from "react";
import SidebarRoutes from "./SidebarRoutes";
import { ImageAssets } from "@/assets/ImageAssets";
import { cn } from "@/lib/utils";
import Link from "next/link";

const LaptopSidebar = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen w-20 overflow-hidden rounded-br-xl rounded-tr-xl bg-white shadow-[1px_0px_10px_0px_#aeaeb9b5]",
        className,
      )}
    >
      <Link href={"/"}>
        <div className="mx-auto mt-5 h-10 w-10">
          <Image
            src={ImageAssets.Base.Logo}
            alt="Tokenty Logo"
            className="h-full w-full bg-contain bg-center"
          />
        </div>
      </Link>

      <SidebarRoutes />
    </div>
  );
};

export default LaptopSidebar;
