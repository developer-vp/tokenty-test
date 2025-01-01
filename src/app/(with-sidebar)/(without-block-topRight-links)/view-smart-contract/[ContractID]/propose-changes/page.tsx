import { getSession } from "@/auth";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import PCComponent from "@/components/pages/view-smart-contract/propose-changes/PCComponent";
import PCNavbar from "@/components/pages/view-smart-contract/propose-changes/PCNavbar";
import { Roles } from "@/lib/enums/roles";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { ContractID: string } }) => {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  if (session.user.role !== Roles.holder) {
    redirect("/");
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <nav className="flex items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1">
          <PCNavbar ContractID={params.ContractID} />
        </div>
        {/*
          * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.
                
          * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
          */}
        <TopRightLinks varient="default" />
      </nav>

      <div className="">
        <PCComponent ContractID={params.ContractID} />
      </div>
    </div>
  );
};

export default page;
