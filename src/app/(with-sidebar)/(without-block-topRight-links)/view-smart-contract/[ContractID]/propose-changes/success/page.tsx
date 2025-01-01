// screen no 17.

import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import ContractSigned from "@/components/pages/edit-smart-contract/success/ESCSuccess";
import React from "react";

const Page = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <nav className="flex items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1"></div>
        {/*
   * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.

   * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
   */}
        <TopRightLinks varient="default" />
      </nav>

      <div className="">
        {/* <ContractSection /> */}
        <Component />
      </div>
    </div>
  );
};
export default Page;

import Image from "next/image";
import TickImage from "@/assets/images/tickbg.png";
import Link from "next/link";

const Component = () => {
  return (
    <div className="mt-32 flex items-center justify-center">
      <div className="flex w-72 flex-col items-center gap-5 rounded-2xl border px-10 py-5">
        <Image src={TickImage} alt="Tick_missing" width={50} height={50} />
        <h2 className="font-semibold">Changes Sent!</h2>
        <p className="text-center text-xs">
          An email with your smart contract changes has been sent to your
          employer!
        </p>

        <Link href={"/"} className="font-semibold">
          back to dashboard
        </Link>
      </div>
    </div>
  );
};
