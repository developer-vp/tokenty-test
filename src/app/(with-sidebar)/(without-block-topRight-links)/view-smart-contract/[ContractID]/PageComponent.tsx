"use client";
import React, { useState } from "react";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import VSMComponent from "@/components/pages/view-smart-contract/VSMComponent";
import VsmNavbar from "@/components/pages/view-smart-contract/VsmNavbar";
import { useSession } from "next-auth/react";
import { Roles } from "@/lib/enums/roles";
import VsmHolderNavbar from "@/components/pages/view-smart-contract/VsmHolderNavbar";

const PageComponent = ({ ContractID }: { ContractID: string }) => {
  const { data } = useSession();
  const role = data?.user.role;

  return (
    <div className="flex w-full flex-col gap-5">
      <nav className="flex items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1">
          {role === Roles.manager && <VsmNavbar ContractID={ContractID} />}
          {role === Roles.holder && <VsmHolderNavbar ContractID={ContractID} />}
        </div>
        {/*
          * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.
                
          * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
          */}
        <TopRightLinks varient="default" />
      </nav>

      <div className="">
        <VSMComponent ContractID={ContractID} />
      </div>
    </div>
  );
};

export default PageComponent;
