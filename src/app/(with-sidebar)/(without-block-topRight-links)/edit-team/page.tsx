// screen no 9
import EditTeamComponent from "@/components/pages/edit-team/EditTeamComponent";
import EditTeamNavbar from "@/components/pages/edit-team/EditTeamNavbar";
import React from "react";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import { getSession } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getSession();
  if (!session) redirect("/signin");
  const role = session.user.role;
  if (role !== "manager") {
    redirect("/");
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <nav className="flex items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1">
          <EditTeamNavbar />
        </div>
        {/*
          * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.

        * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
        */}
        <TopRightLinks varient="default" />
      </nav>

      <div className="mt-2 w-full sm:mt-5">
        <EditTeamComponent />
      </div>
    </div>
  );
};

export default Page;
