"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import Rscreen1 from "./Rscreen1";
import Rscreen2 from "./Rscreen2";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRegisterButtonsStore } from "@/store/RegisterStore";

export const registerFormSchema = z.object({
  publicName: z.string().min(3),
  registerName: z.string().min(3),
  Country: z.string().min(2),
  Industry: z.string().min(2),
  noOfEmployees: z.string().min(1),
});

const Register = ({ page }: { page: string }) => {
  /**
   * To undisable the google and outlook button
   */
  const setButtonDisabled = useRegisterButtonsStore(
    (state) => state.setRegisterButtonDisabled,
  );

  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  const router = useRouter();

  const handleBackButton = () => {
    if (page === "1") router.push(`/signin`);

    if (page === "2")
      router.push(`/company-register` + "?" + createQueryString("page", "1"));
  };

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      publicName: "",
      registerName: "",
      Country: "",
      Industry: "",
      noOfEmployees: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof registerFormSchema>) => {
    // console.log(data);

    Cookies.set("register-company-data", JSON.stringify(data), { path: "/" });

    form.reset({
      publicName: "",
      registerName: "",
      Country: "",
      Industry: "",
      noOfEmployees: "",
    });

    // google and outlook buttons on next Rscreen2
    setButtonDisabled(false);
    router.push(`/company-register` + "?" + createQueryString("page", "2"));
  };

  if (page === "1")
    return (
      <Rscreen1
        form={form}
        handleSubmit={handleSubmit}
        handleBackButton={handleBackButton}
      />
    );
  if (page === "2") return <Rscreen2 handleBackButton={handleBackButton} />;
};

export default Register;