/**
 * @todo remove this page and route
 */

import React from "react";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import EditTeamNavbar from "@/components/pages/create-project/edit-team/EditTeamNavbar";
import EditTeamComponent from "@/components/pages/create-project/edit-team/EditTeamComponent";
import { redirect } from "next/navigation";
import { getSession } from "@/auth";
import { Roles } from "@/lib/enums/roles";

const Page = async () => {
  const session = await getSession();
  if (!session) redirect("/signin");
  const role = session.user.role;
  if (role !== Roles.company) {
    redirect("/company-register?page=1");
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <nav className="flex w-full items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1">
          <EditTeamNavbar />
        </div>
        {/*
          * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.

          * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
          */}
        {/* <TopRightLinks varient="block" /> */}
      </nav>

      <div className="mt-2 w-full sm:mt-5">
        <EditTeamComponent />
      </div>
    </div>
  );
};

export default Page;
