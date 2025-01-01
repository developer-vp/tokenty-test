"use client";
import React, { useCallback } from "react";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import EditSCNavbar from "@/components/pages/edit-smart-contract/EditSCNavbar";
import EditSCComponent from "@/components/pages/edit-smart-contract/EditSCComponent";
import { useRouter, useSearchParams } from "next/navigation";

const ContractPages = ({ page }: { page: string }) => {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  const router = useRouter();

  const handleBackButton = () => {
    if (page === "1") router.push(`/`);

    if (page === "2")
      router.push(
        `/edit-smart-contract` + "?" + createQueryString("page", "1"),
      );
    if (page === "3")
      router.push(
        `/edit-smart-contract` + "?" + createQueryString("page", "2"),
      );
  };

  const handleNextButton = () => {
    if (page === "1")
      router.push(
        `/edit-smart-contract` + "?" + createQueryString("page", "2"),
      );
    if (page === "2")
      router.push(
        `/edit-smart-contract` + "?" + createQueryString("page", "3"),
      );
  };

  const handleFinishButton = () => {
    router.push(`/edit-smart-contract/view-contract`);
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <nav className="flex items-center gap-2 md:gap-5">
        {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
        <MobileSidebar className="md:hidden" />

        <div className="flex-1">
          <EditSCNavbar
            page={page as string}
            createQueryString={createQueryString}
            handleNextButton={handleNextButton}
            handleFinishButton={handleFinishButton}
            handleBackButton={handleBackButton}
          />
        </div>
        {/*
          * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.

          * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
          */}
        <TopRightLinks varient="default" />
      </nav>

      <div className="">
        <EditSCComponent
          page={page as string}
          createQueryString={createQueryString}
          handleNextButton={handleNextButton}
          handleFinishButton={handleFinishButton}
          handleBackButton={handleBackButton}
        />
      </div>
    </div>
  );
};
export default ContractPages;
