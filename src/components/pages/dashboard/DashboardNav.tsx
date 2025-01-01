import Searchbar from "@/components/molecules/Navbar-Components/Searchbar";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import { Input } from "@/components/ui/input";
import { Pencil, Search } from "lucide-react";
import React from "react";

const DashboardNav = () => {
  return (
    <nav className="flex items-center gap-2 md:gap-5">
      {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
      <MobileSidebar className="md:hidden" />

      <div className="flex flex-1 items-center justify-between">
        <div className="ml-3 flex items-center gap-4 md:ml-0 md:gap-5">
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-muted-foreground/10 p-2">
            <Pencil className="text-muted-foreground" />
          </div>

          <h2 className="font-semibold">Doky.ai</h2>
        </div>

        <Searchbar />

        {/* following div is only for spacing purpose */}
        <div className="invisible hidden md:block" aria-hidden></div>
      </div>
      {/*
      * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.

     * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
     */}
      <TopRightLinks varient="default" />
    </nav>
  );
};

export default DashboardNav;
