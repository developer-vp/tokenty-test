import PaymentStatement from "@/components/pages/edit-smart-contract/page-components/PaymentStatement";
import MemberSelect from "@/components/pages/edit-smart-contract/page-components/MemberSelect";
import { CircleUser, Clock4, DollarSign } from "lucide-react";
import Link from "next/link";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { createContractFormSchema } from "@/app/(with-sidebar)/(without-block-topRight-links)/edit-smart-contract/ContractPages";

const Page2 = ({
  createQueryString,
  form,
}: {
  createQueryString: (name: string, value: string) => string;
  form: UseFormReturn<z.infer<typeof createContractFormSchema>, any, undefined>;
}) => {
  return (
    <div className="mb-5 flex gap-4">
      <Sidebar createQueryString={createQueryString} />

      <div className="flex w-full flex-col gap-5">
        <PaymentStatement form={form} />

        <MemberSelect form={form} />
      </div>
    </div>
  );
};

export default Page2;

const Sidebar = ({
  createQueryString,
}: {
  createQueryString: (name: string, value: string) => string;
}) => {
  return (
    <div className="hidden flex-col items-center md:flex">
      <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#9c1f4d] shadow-md">
        <DollarSign size={18} className="text-white" />
      </div>

      <div className="h-24 w-1 bg-[#9c1f4d] [@media(min-width:1180px)]:h-12"></div>

      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#ff6624] shadow-md">
        <CircleUser size={18} className="text-white" />
      </div>

      <div className="h-10 w-0.5 bg-[#c0c0c0]"></div>

      <Link
        href={`/edit-smart-contract` + "?" + createQueryString("page", "3")}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-[#c0c0c0] bg-white"
      >
        <Clock4 size={18} className="text-[#c0c0c0]" />
      </Link>
    </div>
  );
};
