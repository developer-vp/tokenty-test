// screenn no 13 original navbar in which 14,15 screens navbar will merged
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { createContractFormSchema } from "@/app/(with-sidebar)/(without-block-topRight-links)/edit-smart-contract/ContractPages";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const EditSCNavbar = ({
  page,
  createQueryString,
  handleNextButton,
  handleBackButton,
  handleSubmit,
  form,
}: {
  page: string;
  createQueryString: (name: string, value: string) => string;
  handleNextButton: () => void;
  handleBackButton: () => void;
  handleSubmit: (
    data: z.infer<typeof createContractFormSchema>,
  ) => Promise<void>;
  form: UseFormReturn<z.infer<typeof createContractFormSchema>, any, undefined>;
}) => {
  const router = useRouter();

  return (
    <div className="w-[95%]">
      <div className="relative hidden h-12 items-center gap-5 rounded-3xl bg-white shadow-[0px_0px_4px_3px_#4f4f4f10] md:flex">
        <Button
          onClick={handleBackButton}
          className="absolute -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f6f6] shadow-[0px_0px_3px_1px_#4f4f4f20] transition-all duration-150 hover:bg-[#f7f6f6] hover:shadow-none"
        >
          <ChevronLeft size={18} className="text-foreground" />
        </Button>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem className="absolute left-12">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Edit Smart Contract name"
                    className={cn(
                      "mx-auto inline w-[250px] rounded-sm border-0 bg-white px-4 text-start text-base font-bold shadow-none !outline-none !ring-0 placeholder:text-sm",
                      form.formState.errors.name && "border border-red-500",
                    )}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <div className="absolute right-2 flex items-center gap-4">
          {page !== "3" && (
            <Button
              className="flex h-9 w-9 rounded-full border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent"
              onClick={handleNextButton}
            >
              <ChevronRight size={18} />
            </Button>
          )}

          <Button
            className="flex gap-2 rounded-3xl border-gray-100 bg-[#f7f6f6] px-8 font-semibold text-black hover:bg-transparent"
            onClick={() => handleSubmit}
            disabled={page !== "3"}
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EditSCNavbar;
