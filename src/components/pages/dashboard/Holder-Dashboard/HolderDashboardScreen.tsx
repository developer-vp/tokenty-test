import MaxContainer from "@/components/MaxContainer";
import ActivateRate from "@/components/pages/dashboard/ActivateRate";
import ActiveSmartContracts from "@/components/pages/dashboard/ActiveSmartContracts";
import DashboardNav from "@/components/pages/dashboard/DashboardNav";
import OverduePayments from "@/components/pages/dashboard/OverduePayments";
import PendingSmartContracts from "@/components/pages/dashboard/PendingSmartContracts";
import UpcomingPayments from "@/components/pages/dashboard/UpcomingPayments";
import React from "react";
import EquityObtained from "./EquityObtained";
import Earnings from "./Earnings";

const HolderDashboardScreen = () => {
  return (
    <MaxContainer className="mb-5 px-0 md:px-0">
      <DashboardNav />

      <div className="my-8 flex w-full flex-col gap-5 xl:flex-row">
        <section className="flex w-full flex-col gap-5">
          <div className="grid flex-1 grid-cols-3 gap-2 md:grid-cols-4 md:gap-5 lg:grid-cols-6">
            <EquityObtained />
            <Earnings />
            <UpcomingPayments />
            <ActivateRate />
          </div>

          <div className="grid w-full flex-1 grid-cols-1 gap-5 md:grid-cols-3 lg:pr-20">
            <ActiveSmartContracts />

            <PendingSmartContracts />

            <OverduePayments />
          </div>
        </section>
      </div>
    </MaxContainer>
  );
};

export default HolderDashboardScreen;
