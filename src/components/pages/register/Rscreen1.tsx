import React from "react";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { registerFormSchema } from "./Register";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Rscreen1 = ({
  form,
  handleSubmit,
  handleBackButton,
}: {
  form: UseFormReturn<
    {
      publicName: string;
      registerName: string;
      Country: string;
      Industry: string;
      noOfEmployees: string;
    },
    any,
    undefined
  >;
  handleSubmit: (data: z.infer<typeof registerFormSchema>) => Promise<void>;
  handleBackButton: () => void;
}) => {
  return (
    <div className="relative mx-5 flex h-[85vh] items-center justify-center md:mx-0 md:h-[100vh]">
      <Card className="w-[400px] border-none px-2 shadow-md sm:px-3">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="mt-5 h-12 w-12">
            <Image
              src={ImageAssets.Base.Logo}
              alt="Tokenty Logo"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <p className="text-xs text-[#202123]">
            Please fill up your company{`'`}s information
          </p>
        </div>

        <div className="mx-6 mb-2 mt-5 flex items-center gap-1">
          <div className="h-4 flex-1 rounded-l-[6px] bg-gradient-to-r from-[rgb(160,13,68)] to-[rgb(232,65,0)]"></div>
          {/* <div className="h-4 flex-1 rounded-r-[6px] bg-gradient-to-r from-[rgb(238,62,20)] to-[rgb(240,147,44)]"></div> */}
          <div className="h-4 flex-1"></div>
        </div>

        <CardHeader className="flex-row items-center gap-2 space-y-0 px-6 py-4">
          <Building2 size={20} className="" />
          <CardTitle className="font-semibold">Your Company</CardTitle>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <CardContent>
              <div className="grid w-full items-center gap-2">
                <FormField
                  control={form.control}
                  name="publicName"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex items-center justify-between">
                        <FormLabel className="">Public name</FormLabel>

                        <FormControl className="max-w-40 sm:max-w-48">
                          <Input
                            placeholder="For holders view"
                            type="text"
                            {...field}
                            className="h-[30px] flex-1 rounded-[6px] text-xs placeholder:text-xs placeholder:text-[#c0c0c0]"
                            style={{ marginTop: 0 }}
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="registerName"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex items-center justify-between">
                        <FormLabel className="">Register name</FormLabel>

                        <FormControl className="max-w-40 sm:max-w-48">
                          <Input
                            placeholder="This is you legal entity name"
                            type="text"
                            {...field}
                            className="h-[30px] flex-1 rounded-[6px] text-xs placeholder:text-xs placeholder:text-[#c0c0c0]"
                            style={{ marginTop: 0 }}
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="Country"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex items-center justify-between">
                        <FormLabel className="">Country</FormLabel>

                        <FormControl className="max-w-40 sm:max-w-48">
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              id="framework"
                              className="h-[30px] max-w-40 flex-1 rounded-[6px] sm:max-w-48"
                              style={{ marginTop: 0 }}
                            >
                              <SelectValue
                                placeholder="Select Country"
                                className="text-xs placeholder:text-xs"
                              />
                            </SelectTrigger>
                            {/* prettier-ignore */}
                            <SelectContent position="popper">
                              <SelectItem value="aus" className="cursor-pointer">Australia</SelectItem>
                              <SelectItem value="eng" className="cursor-pointer">England</SelectItem>
                              <SelectItem value="swit" className="cursor-pointer">Switzerland</SelectItem>
                              <SelectItem value="new" className="cursor-pointer">NewZealand</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="Industry"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex items-center justify-between">
                        <FormLabel className="">Industry</FormLabel>

                        <FormControl className="max-w-40 sm:max-w-48">
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              id="framework"
                              className="h-[30px] max-w-40 flex-1 rounded-[6px] sm:max-w-48"
                              style={{ marginTop: 0 }}
                            >
                              <SelectValue
                                placeholder="Select Industry"
                                className="text-xs placeholder:text-xs"
                              />
                            </SelectTrigger>

                            {/* prettier-ignore */}
                            <SelectContent position="popper">
                              <SelectItem className="cursor-pointer" value="it">IT</SelectItem>
                              <SelectItem className="cursor-pointer" value="insurance">Insurance</SelectItem>
                              <SelectItem className="cursor-pointer" value="bank">Banking</SelectItem>
                              <SelectItem className="cursor-pointer" value="teach">Teaching</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="noOfEmployees"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex items-center justify-between">
                        <FormLabel className="">No. of Employees</FormLabel>

                        <FormControl className="max-w-40 sm:max-w-48">
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              id="framework"
                              className="h-[30px] max-w-40 flex-1 rounded-[6px] sm:max-w-48"
                              style={{ marginTop: 0 }}
                            >
                              <SelectValue
                                placeholder="Employees"
                                className="text-xs placeholder:text-xs"
                              />
                            </SelectTrigger>

                            {/* prettier-ignore */}
                            <SelectContent position="popper">
                                <SelectItem className="cursor-pointer" value="10">10</SelectItem>
                                <SelectItem className="cursor-pointer" value="20">20</SelectItem>
                                <SelectItem className="cursor-pointer" value="30">30</SelectItem>
                                <SelectItem className="cursor-pointer" value="40">40</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>
            </CardContent>

            <CardFooter className="mt-3 flex justify-between">
              <Button
                variant="outline"
                className="border border-[#ebebeb]"
                onClick={handleBackButton}
                type="button"
              >
                Back
              </Button>

              <Button
                type="submit"
                variant="outline"
                className="border border-[#ebebeb] bg-gray-200 hover:bg-gray-200/80"
              >
                Next
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};
export default Rscreen1;
