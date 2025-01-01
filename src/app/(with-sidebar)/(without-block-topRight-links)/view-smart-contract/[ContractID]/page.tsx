import { getSession } from "@/auth";

import { redirect } from "next/navigation";
import React from "react";
import PageComponent from "./PageComponent";

const page = async ({ params }: { params: { ContractID: string } }) => {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  return <PageComponent ContractID={params.ContractID} />;
};

export default page;
