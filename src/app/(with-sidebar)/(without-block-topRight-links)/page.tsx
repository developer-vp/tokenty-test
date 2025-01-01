import { getSession } from "@/auth";
import CompanyDashboardScreen from "@/components/pages/dashboard/Company-Dashboard/CompanyDashboardScreen";
import React from "react";
import { redirect } from "next/navigation";
import HolderDashboardScreen from "@/components/pages/dashboard/Holder-Dashboard/HolderDashboardScreen";

const Dashboard = async () => {
  const session = await getSession();
  if (!session) redirect("/signin");
  const role = session.user.role;

  if (role === "manager") return <CompanyDashboardScreen />;
  else if (role === "holder") return <HolderDashboardScreen />;
  else redirect("/signin");
};

export default Dashboard;
