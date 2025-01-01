import { getSession } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Admin = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/signintest");
  }

  return <div>Admin {session?.user?.name}</div>;
};

export default Admin;
