import CreatePComponent from "@/components/pages/create-project/CreatePComponent";
import React from "react";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import { getSession } from "@/auth";
import { Roles } from "@/lib/enums/roles";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getSession();
  if (!session) redirect("/signin");
  const role = session.user.role;
  if (role !== Roles.manager) {
    redirect("/login");
  }

  return (
    <div>
      <nav className="flex items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1">
          <div className="flex items-center gap-1 rounded-md bg-secondary px-4 py-1 placeholder:text-sm">
            <Search size={16} className="mb-0.5 text-muted-foreground" />
            <Input
              placeholder="Search projects and smart contracts"
              className="flex-1 border-0 text-muted-foreground shadow-none outline-none !ring-0"
            />
          </div>
        </div>
        {/*
          * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.
                  
          * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
          */}

        {/* md:hidden because above one is present in layout */}
        {/* <div className="md:hidden">
          <TopRightLinks varient="default" />
        </div> */}
      </nav>

      <CreatePComponent />
    </div>
  );
};
export default Page;
