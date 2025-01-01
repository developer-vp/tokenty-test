import MaxContainer from "@/components/MaxContainer";
import ActivateRate from "@/components/pages/dashboard/ActivateRate";
import ActiveSmartContracts from "@/components/pages/dashboard/ActiveSmartContracts";
import CreateContract from "@/components/pages/dashboard/CreateContract";
import DashboardNav from "@/components/pages/dashboard/DashboardNav";
import OverduePayments from "@/components/pages/dashboard/OverduePayments";
import PendingSmartContracts from "@/components/pages/dashboard/PendingSmartContracts";
import RoyalitySharesAndPayments from "@/components/pages/dashboard/RoyalitySharesAndPayments";
import TeamMembers from "@/components/pages/dashboard/TeamMembers";
import UpcomingPayments from "@/components/pages/dashboard/UpcomingPayments";
import React from "react";

const CompanyDashboardScreen = () => {
  return (
    <MaxContainer className="mb-5 px-0 md:px-0">
      <DashboardNav />

      <div className="mt-8 flex w-full flex-col gap-5 xl:flex-row">
        <section className="flex w-full flex-col gap-5">
          <div className="grid flex-1 grid-cols-3 gap-2 md:grid-cols-5 md:gap-5">
            <CreateContract />
            <RoyalitySharesAndPayments className="hidden md:grid" />
            <UpcomingPayments />
            <ActivateRate />
          </div>

          <RoyalitySharesAndPayments className="gap-10 md:hidden" />

          <div className="grid w-full flex-1 grid-cols-1 gap-5 md:grid-cols-3">
            <ActiveSmartContracts />

            <PendingSmartContracts />

            <OverduePayments />
          </div>
        </section>

        <section>
          <TeamMembers className="w-full xl:w-64" />
        </section>
      </div>
    </MaxContainer>
  );
};

export default CompanyDashboardScreen;
