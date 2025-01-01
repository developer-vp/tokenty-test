// screen no 13

import React from "react";
import ContractPages from "./ContractPages";
import { getSession } from "@/auth";
import { redirect } from "next/navigation";
import { Roles } from "@/lib/enums/roles";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  const role = session.user.role;
  if (role !== Roles.manager) {
    redirect("/");
  }

  const page = searchParams.page || "3";

  return <ContractPages page={page as string} />;
};
export default Page;