"use client";
import React, { useCallback, useEffect, useRef } from "react";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";
import MobileSidebar from "@/components/molecules/sidebar/Sidebar-Components/MobileSidebar";
import EditSCNavbar from "@/components/pages/edit-smart-contract/EditSCNavbar";
import EditSCComponent from "@/components/pages/edit-smart-contract/EditSCComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContractType, MonthOrYear } from "@/lib/enums/utils";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useSmartContractStore } from "@/store/CreateSmartContractStore";

export const createContractFormSchema = z.object({
  name: z.string().min(3),
  type: z.string(),
  percent: z.number().min(0).max(100),
  revenueStream: z.string().min(3),
  holderEmail: z.string().min(3),
  first_payment_after_number: z.number(),
  first_payment_after_unit: z.string(),
  payment_frequency_unit: z.string(),
  payment_duration_number: z.number(),
  payment_duration_unit: z.string(),
});

const ContractPages = ({ page }: { page: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rendered = useRef(false);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  // prettier-ignore
  const handleBackButton = () => {
    if (page === "1") router.push(`/`);
    if (page === "2") router.push(`/edit-smart-contract` + "?" + createQueryString("page", "1"));
    if (page === "3") router.push(`/edit-smart-contract` + "?" + createQueryString("page", "2"));
  };

  // prettier-ignore
  const handleNextButton = () => {
    if (page === "1")
      router.push(
        `/edit-smart-contract` + "?" + createQueryString("page", "2"),
      );
    if (page === "2")
      router.push(
        `/edit-smart-contract` + "?" + createQueryString("page", "3"),
      );
  };

  /**
   *  @Explaination of form implementation
   * 1. Created schema above function
   */

  const setSmartContractData = useSmartContractStore(
    (state) => state.setSmartContactData,
  );
  const smartContractData = useSmartContractStore(
    (state) => state.smartContactData,
  );

  useEffect(() => {
    // prettier-ignore
    const setFormFields = (data: z.infer<typeof createContractFormSchema>) => {
      form.setValue("name", data.name);
      form.setValue("type", data.type);
      form.setValue("percent", data.percent);
      form.setValue("revenueStream", data.revenueStream);
      form.setValue("holderEmail", data.holderEmail);
      form.setValue("first_payment_after_number", data.first_payment_after_number);
      form.setValue("first_payment_after_unit", data.first_payment_after_unit);
      form.setValue("payment_frequency_unit", data.payment_frequency_unit);
      form.setValue("payment_duration_number", data.payment_duration_number);
      form.setValue("payment_duration_unit", data.payment_duration_unit);
    };

    if (smartContractData) {
      setFormFields(smartContractData);
    }
  }, []);

  const form = useForm<z.infer<typeof createContractFormSchema>>({
    resolver: zodResolver(createContractFormSchema),
    defaultValues: {
      name: "",
      type: ContractType.Revenue,
      revenueStream: "",
      holderEmail: "",
      first_payment_after_number: 1,
      first_payment_after_unit: MonthOrYear.Month,
      payment_frequency_unit: MonthOrYear.Month,
      payment_duration_number: 1,
      payment_duration_unit: MonthOrYear.Year,
    },
  });

  const handleSubmit = async (
    data: z.infer<typeof createContractFormSchema>,
  ) => {
    console.log(data);

    setSmartContractData(data);

    router.push(`/edit-smart-contract/view-contract`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex w-full flex-col gap-5">
          <nav className="flex items-center gap-2 md:gap-5">
            {/* Below sidebar is only of mobile, laptop one is present in layout of with-sidebar */}
            <MobileSidebar className="md:hidden" />

            <div className="flex-1">
              <EditSCNavbar
                page={page as string}
                createQueryString={createQueryString}
                handleNextButton={handleNextButton}
                handleBackButton={handleBackButton}
                handleSubmit={handleSubmit}
                form={form}
              />
            </div>
            {/*
          * In with-block-topRight-link folder this control only mobile. Laptop code of this for with-block-topRight-link folder is present in layout of with-block-topRight-link.

          * This is done to satify different ui. TopRightLinks is single component and logic is handled in sigle component just varient is different in layout of with-block-topRight-link of laptop only
          */}
            <TopRightLinks varient="default" />
          </nav>

          <div className="">
            <EditSCComponent
              page={page as string}
              createQueryString={createQueryString}
              handleNextButton={handleNextButton}
              handleBackButton={handleBackButton}
              handleSubmit={handleSubmit}
              form={form}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};
export default ContractPages;
