// screen no 16

import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import VCNavbar from "@/components/pages/edit-smart-contract/view-contract/VCNavbar";
import VCComponent from "@/components/pages/edit-smart-contract/view-contract/VCComponent";
import React from "react";

/**
 * Make state in zustand. Get form fields value in it then show those states in this page
 */

const Contract = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <nav className="flex items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1">
          <VCNavbar />
        </div>
        {/*
         * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.

         * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
         */}
        <TopRightLinks varient="default" />
      </nav>

      <div className="lg:w-[70%]">
        <VCComponent />
      </div>
    </div>
  );
};
export default Contract;
