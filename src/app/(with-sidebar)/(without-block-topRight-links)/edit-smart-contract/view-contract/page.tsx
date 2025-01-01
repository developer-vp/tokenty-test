"use client";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import VCNavbar from "@/components/pages/edit-smart-contract/view-contract/VCNavbar";
import VCComponent from "@/components/pages/edit-smart-contract/view-contract/VCComponent";
import React from "react";
import { useSmartContractStore } from "@/store/CreateSmartContractStore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Roles } from "@/lib/enums/roles";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { createContractFormSchema } from "../ContractPages";

/**
 * @todo Make state in zustand. Get form fields value in it then show those states in this page
 */

const Contract = () => {
  const router = useRouter();
  const session = useSession();
  if (!session) {
    router.push("/login");
    return null;
  }
  const role = session.data?.user.role;
  if (role !== Roles.manager) {
    router.push("/");
    return null;
  }
  const token = session.data?.user.token;
  if (!token) {
    router.push("/login");
    return null;
  }

  const smartContractData = useSmartContractStore(
    (state) => state.smartContactData,
  );

  return (
    <div className="flex w-full flex-col gap-5">
      <nav className="flex items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1">
          <VCNavbar token={token} />
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
