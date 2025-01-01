import Register from "@/components/pages/register/Register";
import React from "react";

const CompanyRegister = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page || "1";

  return (
    <div>
      <Register page={page as string} />
    </div>
  );
};
export default CompanyRegister;
