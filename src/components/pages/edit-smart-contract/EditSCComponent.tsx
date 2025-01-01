"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Time } from "@/lib/enums/utils";
import { createContractFormSchema } from "@/app/(with-sidebar)/(without-block-topRight-links)/edit-smart-contract/ContractPages";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";

const EditSCComponent = ({
  page,
  createQueryString,
  handleNextButton,
  handleBackButton,
  form,
  handleSubmit,
}: {
  page: string;
  createQueryString: (name: string, value: string) => string;
  handleNextButton: () => void;
  handleBackButton: () => void;
  form: UseFormReturn<z.infer<typeof createContractFormSchema>, any, undefined>;
  handleSubmit: (
    data: z.infer<typeof createContractFormSchema>,
  ) => Promise<void>;
}) => {
  return (
    <>
      <div className="my-2 flex gap-4">
        <div className="flex w-full flex-col">
          {page === "1" && (
            <Page1 createQueryString={createQueryString} form={form} />
          )}
          {page === "2" && (
            <Page2 createQueryString={createQueryString} form={form} />
          )}
          {page === "3" && (
            <Page3 createQueryString={createQueryString} form={form} />
          )}
        </div>
      </div>

      <div className="my-5 flex items-center gap-4 md:hidden">
        <Button
          onClick={handleBackButton}
          className="flex h-9 w-9 rounded-full border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent"
        >
          <ChevronLeft size={18} className="text-foreground" />
        </Button>

        {page !== "3" && (
          <Button
            className="flex h-9 w-9 rounded-full border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent"
            onClick={handleNextButton}
          >
            <ChevronRight size={18} />
          </Button>
        )}

        <Button
          className="flex h-9 rounded-full border-gray-100 bg-[#f7f6f6] px-8 font-semibold text-black hover:bg-transparent"
          onClick={() => handleSubmit}
          disabled={page !== "3"}
        >
          Finish
        </Button>
      </div>
    </>
  );
};
export default EditSCComponent;
